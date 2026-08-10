import { Divider, Drawer, Spin } from "antd";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
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
    refetchOnMountOrArgChange : true
  });

  const [updateCart, { isLoading: isUpdating }] = useUpdateCartMutation();
  const [deleteFromCart] = useDeleteFromCartMutation();

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const debounceTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>(
    {},
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
        clearTimeout(timer),
      );
    };
  }, []);

  /*
   * Quantity update with debounce.
   */
  const handleQuantityChange = (collectionId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setQuantities((prev) => ({
      ...prev,
      [collectionId]: newQuantity,
    }));

    // Clear previous timer for this collection
    if (debounceTimers.current[collectionId]) {
      clearTimeout(debounceTimers.current[collectionId]);
    }

    // Wait 500ms before calling API
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
      // Clear pending quantity update
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
          <ShoppingBag size={20} className="text-[#d17f89]" />

          <span className="text-[#d17f89] font-bold tracking-wide">
            MY CART
          </span>

          {cartItems.length > 0 && (
            <span className="text-xs text-white/40 font-normal">
              ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
            </span>
          )}
        </div>
      }
      placement="right"
      onClose={onClose}
      open={showCart}
      width={400}
      closeIcon={
        <span
          className="
            flex items-center justify-center
            w-10 h-10
            rounded-xl
            border border-white/15
            text-white
            transition-all duration-200
            hover:border-[#d17f89]
            hover:text-[#d17f89]
            hover:bg-[#d17f89]/10
          "
        >
          ✕
        </span>
      }
      styles={{
        header: {
          background:
            "linear-gradient(135deg, #0d0d0d 0%, #171717 50%, #202020 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "15px 20px",
        },

        body: {
          background:
            "linear-gradient(135deg, #0b0b0b 0%, #121212 50%, #1b1b1b 100%)",
          padding: "18px",
        },

        content: {
          background:
            "linear-gradient(135deg, #0b0b0b 0%, #121212 50%, #1b1b1b 100%)",
        },

        mask: {
          background: "rgba(0,0,0,0.75)",
        },
      }}
    >
      {/* Loading */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Spin size="large" className="[&_.ant-spin-dot-item]:!bg-[#d17f89]" />

          <p className="!mt-4 text-white/40 text-sm">Loading your Cart...</p>
        </div>
      ) : cartItems.length === 0 ? (
        /* Empty cart */
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div
            className="
              w-20 h-20
              rounded-full
              flex items-center justify-center
              bg-[#d17f89]/10
              border border-[#d17f89]/20
              mb-5
            "
          >
            <ShoppingBag size={32} className="text-[#d17f89]" />
          </div>

          <h3 className="text-white text-lg font-semibold">
            Your cart is empty
          </h3>

          <p className="text-white/40 text-sm mt-2">
            Looks like you haven't added anything yet.
          </p>

          <button
            onClick={onClose}
            className="
              mt-6
              px-6 py-2.5
              rounded-full
              bg-[#d17f89]
              text-white
              font-semibold
              text-sm
              transition-all
              hover:bg-[#c26a75]
              hover:shadow-[0_0_20px_rgba(209,127,137,0.25)]
            "
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <>
          {/* Cart items */}
          <div className="space-y-3">
            {cartItems.map((item: any) => {
              const collection = item.collection;

              if (!collection) return null;

              const collectionId = collection._id;

              const quantity = quantities[collectionId] ?? item.quantity;

              return (
                <div
                  key={collectionId}
                  className="
                    group
                    relative
                    p-3
                    rounded-2xl
                    border border-white/[0.07]
                    bg-white/[0.025]
                    hover:bg-white/[0.045]
                    hover:border-[#d17f89]/20
                    transition-all duration-300
                  "
                >
                  <div className="flex gap-3">
                    {/* Product image */}
                    <div
                      className="
                        relative
                        flex-shrink-0
                        w-[82px]
                        h-[82px]
                        rounded-xl
                        overflow-hidden
                        border border-white/10
                        bg-black
                      "
                    >
                      <img
                        crossOrigin="anonymous"
                        src={`${UPLOADS_URL}${collection.image}`}
                        alt={collection.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      />
                    </div>

                    {/* Product information */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <div className="min-w-0">
                          <h3
                            className="
                              text-white
                              font-semibold
                              text-sm
                              truncate
                            "
                          >
                            {collection.title}
                          </h3>

                          <p className="text-white/45 text-xs mt-1">
                            Rs{" "}
                            {Number(collection.CollectionPrice ?? 0).toFixed(2)}
                          </p>
                        </div>

                        {/* Delete */}
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => handleRemove(collectionId)}
                          className="group flex-shrink-0 w-7 h-7 flex items-center justify-center outline-none cursor-pointer select-none"
                        >
                          <Trash2
                            size={18}
                            className="text-white/30 group-hover:text-[#d17f89] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Bottom row */}
                      <div className="flex items-end justify-between mt-4">
                        {/* Quantity control */}
                        <div className="flex items-center h-10 w-[134px] rounded-xl border border-white/10 bg-[#0b0b0b] overflow-hidden">
                          {/* Minus */}
                          <div
                            role="button"
                            tabIndex={quantity <= 1 ? -1 : 0}
                            aria-disabled={quantity <= 1}
                            onClick={() =>
                              quantity > 1 &&
                              handleDecrease(collectionId, quantity)
                            }
                            className={`group w-10 h-full flex items-center justify-center outline-none select-none ${
                              quantity <= 1
                                ? "opacity-30 cursor-not-allowed"
                                : "cursor-pointer"
                            }`}
                          >
                            <Minus
                              size={20}
                              strokeWidth={3}
                              className="text-white hover:!text-[#d17f89] transition-colors"
                            />
                          </div>

                          {/* Quantity */}
                          <div className="flex-1 h-full flex items-center justify-center text-white font-semibold text-sm select-none">
                            {quantity}
                          </div>

                          {/* Plus */}
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                              handleIncrease(collectionId, quantity)
                            }
                            className="group w-10 h-full flex items-center justify-center outline-none cursor-pointer select-none"
                          >
                            <Plus
                              size={22}
                              strokeWidth={3}
                              className="text-white hover:!text-[#d17f89] transition-colors"
                            />
                          </div>
                        </div>

                        {/* Item subtotal */}
                        <div className="text-right">
                          <p className="text-[#d17f89] font-bold text-sm">
                            Rs {Number(item.subTotal ?? 0).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Divider className="!border-white/[0.08] !my-5" />

          {/* Summary */}
          <div
            className="
              rounded-2xl
              border border-white/[0.07]
              bg-white/[0.025]
              p-4
            "
          >
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm">Sub-total</span>

              <span className="text-white font-bold text-lg">
                Rs {Number(cart?.totalAmount ?? 0).toFixed(2)}
              </span>
            </div>

            <p className="text-white/30 text-xs mt-1">
              Taxes and shipping calculated at checkout
            </p>

            <button
              disabled={isFetching || isUpdating}
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
              className="
                mt-4
                w-full
                h-12
                rounded-xl
                bg-[#d17f89]
                border border-[#d17f89]
                text-white
                font-bold
                tracking-wide
                transition-all duration-300
                hover:bg-[#c26a75]
                hover:border-[#c26a75]
                hover:shadow-[0_8px_25px_rgba(209,127,137,0.2)]
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              CHECKOUT
            </button>
          </div>
        </>
      )}
    </Drawer>
  );
};
