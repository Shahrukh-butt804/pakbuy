import { Divider, Drawer, Spin } from "antd";
import { Minus, Plus, ShoppingBag, Trash2, X, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UPLOADS_URL } from "../../constants/api";
import {
  useDeleteFromCartMutation,
  useGetMyCartQuery,
  useUpdateCartMutation,
} from "../../redux/services/cartSlice";

export const Cart = ({ showCart, onClose }: any) => {
  const navigate = useNavigate();

  const { data, isLoading, isFetching } = useGetMyCartQuery(undefined, {
    skip: !showCart,
    refetchOnMountOrArgChange: true,
  });

  const [updateCart, { isLoading: isUpdating }] = useUpdateCartMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const debounceTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>(
    {}
  );

  const cart = data;
  const cartItems = cart?.items || [];

  useEffect(() => {
    if (!cartItems.length) {
      setQuantities({});
      return;
    }

    const serverQuantities: Record<string, number> = {};

    cartItems.forEach((item: any) => {
      const collectionId = item.collection?._id;

      if (collectionId) {
        serverQuantities[collectionId] = item.quantity;
      }
    });

    setQuantities(serverQuantities);
  }, [data]);

  useEffect(() => {
    return () => {
      Object.values(debounceTimers.current).forEach((timer) =>
        clearTimeout(timer)
      );
    };
  }, []);

  const handleQuantityChange = (collectionId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setQuantities((prev) => ({
      ...prev,
      [collectionId]: newQuantity,
    }));

    if (debounceTimers.current[collectionId]) {
      clearTimeout(debounceTimers.current[collectionId]);
    }

    debounceTimers.current[collectionId] = setTimeout(async () => {
      try {
        await updateCart({
          collectionId,
          quantity: newQuantity,
        }).unwrap();
      } catch (error) {
        console.error("Failed to update cart quantity:", error);
      }
    }, 500);
  };

  const handleIncrease = (collectionId: string, currentQuantity: number) => {
    handleQuantityChange(collectionId, currentQuantity + 1);
  };

  const handleDecrease = (collectionId: string, currentQuantity: number) => {
    if (currentQuantity <= 1) return;
    handleQuantityChange(collectionId, currentQuantity - 1);
  };

  const handleRemove = async (collectionId: string) => {
    try {
      if (debounceTimers.current[collectionId]) {
        clearTimeout(debounceTimers.current[collectionId]);
      }

      await deleteFromCart(collectionId).unwrap();

      setQuantities((prev) => {
        const updated = { ...prev };
        delete updated[collectionId];
        return updated;
      });
    } catch (error) {
      console.error("Failed to remove collection:", error);
    }
  };

  return (
    <Drawer
      title={
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873]">
            <ShoppingBag className="w-4 h-4" />
          </div>

          <span className="text-white font-extrabold tracking-wider text-sm uppercase">
            MY <span className="text-[#C97873]">CART</span>
          </span>

          {cartItems.length > 0 && (
            <span className="text-xs text-gray-400 font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </span>
          )}
        </div>
      }
      placement="right"
      onClose={onClose}
      open={showCart}
      width={420}
      className="custom-cart-drawer"
      closeIcon={
        <span className="drawer-close-btn w-8 h-8 rounded-full bg-white/10 hover:bg-[#C97873] text-white flex items-center justify-center transition-colors">
          <X className="w-4 h-4 text-[#C97873] hover:text-white" />
        </span>
      }
      styles={{
        header: {
          background: "#0d0d10",
          borderBottom: "1px solid rgba(201, 120, 115, 0.25)",
          padding: "16px 20px",
        },
        body: {
          background: "#0a0a0c",
          padding: "20px",
        },
        content: {
          background: "#0a0a0c",
        },
        mask: {
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(4px)",
        },
      }}
    >
      {/* Loading State */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Spin size="large" className="[&_.ant-spin-dot-item]:!bg-[#C97873]" />
          <p className="mt-4 text-gray-400 text-xs font-semibold uppercase tracking-widest">
            Loading your Cart...
          </p>
        </div>
      ) : cartItems.length === 0 ? (
        /* Empty Cart State */
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#C97873]/10 border border-[#C97873]/30 mb-5 shadow-inner">
            <ShoppingBag className="w-10 h-10 text-[#C97873]" />
          </div>

          <h3 className="text-white text-xl font-extrabold tracking-tight">
            Your Cart is Empty
          </h3>

          <p className="text-gray-400 text-xs mt-2 max-w-xs leading-relaxed">
            Looks like you haven't added any Pak Buy collections to your cart yet.
          </p>

          <button
            onClick={onClose}
            className="mt-6 px-6 py-3 rounded-full bg-[#C97873] hover:bg-[#b86762] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C97873]/25 hover:shadow-[#C97873]/40 transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <span>Explore Shop</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="space-y-4">
            {cartItems.map((item: any) => {
              const collection = item.collection;
              if (!collection) return null;

              const collectionId = collection._id;
              const quantity = quantities[collectionId] ?? item.quantity;

              return (
                <div
                  key={collectionId}
                  className="group relative p-4 rounded-2xl border border-[#C97873]/20 bg-[#121215]/90 hover:border-[#C97873]/50 transition-all duration-300 shadow-lg backdrop-blur-md"
                >
                  <div className="flex gap-3 sm:gap-4">
                    {/* Product Image */}
                    <div className="relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-[#C97873]/30 bg-black/60">
                      <img
                        crossOrigin="anonymous"
                        src={`${UPLOADS_URL}${collection.image}`}
                        alt={collection.title || collection.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Information */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-2">
                        <div className="min-w-0">
                          <h4 className="text-white font-extrabold text-sm truncate">
                            {collection.title || collection.name}
                          </h4>

                          <p className="text-xs text-[#C97873] font-bold font-mono mt-0.5">
                            Rs {Number(collection.CollectionPrice ?? 0).toFixed(2)}
                          </p>
                        </div>

                        {/* Remove Item Button */}
                        <button
                          type="button"
                          onClick={() => handleRemove(collectionId)}
                          className="cart-remove-btn text-gray-400 hover:text-[#C97873] transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4 text-[#C97873]" />
                        </button>
                      </div>

                      {/* Quantity Control & Subtotal Row */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                        {/* Quantity Pill Controls */}
                        <div className="flex items-center h-8 rounded-xl border border-[#C97873]/30 bg-[#0a0a0c] overflow-hidden px-1">
                          <button
                            type="button"
                            disabled={quantity <= 1}
                            onClick={() => handleDecrease(collectionId, quantity)}
                            className="cart-qty-btn text-gray-300 hover:text-[#C97873] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            title="Decrease quantity"
                          >
                            <Minus className="w-4 h-4 text-[#C97873]" />
                          </button>

                          <span className="px-3 text-white font-black text-xs font-mono">
                            {quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => handleIncrease(collectionId, quantity)}
                            className="cart-qty-btn text-gray-300 hover:text-[#C97873] transition-colors"
                            title="Increase quantity"
                          >
                            <Plus className="w-4 h-4 text-[#C97873]" />
                          </button>
                        </div>

                        {/* Item Subtotal */}
                        <div className="text-right">
                          <span className="text-xs text-gray-400 block font-normal text-[10px] uppercase tracking-wider">Subtotal</span>
                          <span className="text-[#C97873] font-extrabold text-sm font-mono">
                            Rs {Number(item.subTotal ?? (collection.CollectionPrice * quantity)).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Divider className="!border-white/10 !my-5" />

          {/* Cart Summary Box */}
          <div className="rounded-2xl border border-[#C97873]/30 bg-[#121215]/95 p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs uppercase tracking-wider font-bold">Total Amount</span>
              <span className="text-[#C97873] font-black text-xl font-mono">
                Rs {Number(cart?.totalAmount ?? 0).toFixed(2)}
              </span>
            </div>

            <p className="text-gray-400 text-[11px] leading-relaxed">
              Taxes and shipping calculated at checkout.
            </p>

            <button
              disabled={isFetching || isUpdating}
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-[#C97873] hover:bg-[#b86762] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C97873]/25 hover:shadow-[#C97873]/40 transition-all duration-300 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </Drawer>
  );
};
