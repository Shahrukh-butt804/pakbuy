import React, { useEffect, useState } from "react";
import { Check, LayoutGrid, List as ListIcon, ShoppingBag, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import { useGetAllCollectionQuery } from "../../redux/services/collectionSlice";
import { useAddToCartMutation } from "../../redux/services/cartSlice";
import { UPLOADS_URL } from "../../constants/api";
import { amountFormatter } from "../../utils/Functions";

export const ShopCollectionsShowcase: React.FC = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState<any>(null);
  const [saving, setSaving] = useState<number>(0);
  const navigate = useNavigate();

  const { data: collections, isLoading } = useGetAllCollectionQuery({});
  const [addToCart] = useAddToCartMutation();

  useEffect(() => {
    if (collections && collections.length > 0) {
      const initial = collections[0];
      setSelectedCollection(initial);
      const totalSavings = initial?.products?.reduce(
        (acc: number, p: any) => acc + ((p.retailPrice || p.price * 1.25) - p.price),
        0
      );
      setSaving(totalSavings || 0);
    }
  }, [collections]);

  const handleSelectCollection = (item: any) => {
    setSelectedCollection(item);
    const totalSavings = item?.products?.reduce(
      (acc: number, p: any) => acc + ((p.retailPrice || p.price * 1.25) - p.price),
      0
    );
    setSaving(totalSavings || 0);
  };

  const handleAddToCart = async (collectionItem: any) => {
    if (!collectionItem?._id) return;
    try {
      await addToCart({
        collectionId: collectionItem._id,
        quantity: 1,
      });
    } catch (error) {
      console.error("Cart error:", error);
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto text-white">
      {/* Header Title Section matching image */}
      <div className="relative mb-10 pb-6 border-b border-[#C97873]/20 overflow-hidden">
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#C97873]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 text-[#C97873] text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C97873] animate-pulse" />
              EXCLUSIVE CATALOG
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Shop <span className="text-[#C97873]">Collections</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
              Explore curated product bundles with exclusive member-only savings and premium crafted selection.
            </p>
          </div>

          <button
            onClick={() => navigate("/shop")}
            className="self-start md:self-auto py-2.5 px-5 rounded-full bg-white/5 hover:bg-[#C97873]/20 border border-white/10 hover:border-[#C97873]/40 text-xs font-bold tracking-wider text-white transition-all duration-200"
          >
            VIEW ALL IN SHOP →
          </button>
        </div>
      </div>

      {/* Main Grid Layout matching image */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Sidebar Collection Picker */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-b from-[#18181b] via-[#141417] to-[#101012] rounded-3xl p-5 border border-[#C97873]/25 shadow-2xl backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
                COLLECTION
              </h3>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10 font-mono">
                {collections?.length || 0} Available
              </span>
            </div>

            {/* List of Collections */}
            <div className="space-y-2 mb-6 max-h-[320px] overflow-y-auto pr-1 custom-scrollbar">
              {isLoading ? (
                <div className="py-6 text-center text-xs text-gray-500">Loading collections...</div>
              ) : collections && collections.length > 0 ? (
                collections.map((item: any) => {
                  const isSelected = selectedCollection?._id === item._id;
                  return (
                    <button
                      key={item._id}
                      type="button"
                      onClick={() => handleSelectCollection(item)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl text-left text-sm font-medium transition-all duration-200 border ${
                        isSelected
                          ? "bg-[#C97873]/20 border-[#C97873]/60 text-white shadow-lg shadow-[#C97873]/10"
                          : "bg-white/[0.02] border-white/5 text-gray-300 hover:bg-white/[0.06] hover:border-white/15 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-3 truncate pr-2">
                        <span
                          className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${
                            isSelected
                              ? "border-[#C97873] bg-[#C97873] text-black"
                              : "border-gray-600"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        <span className="truncate font-semibold">{item.name}</span>
                      </span>
                      {item.products && (
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                            isSelected
                              ? "bg-[#C97873]/30 text-[#C97873] font-bold"
                              : "bg-white/5 text-gray-500"
                          }`}
                        >
                          {item.products.length} items
                        </span>
                      )}
                    </button>
                  );
                })
              ) : (
                <div className="py-4 text-center text-xs text-gray-500">No collections available</div>
              )}
            </div>

            {/* Savings & Add to Cart Card */}
            {selectedCollection && (
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="bg-gradient-to-br from-[#C97873]/15 via-white/[0.02] to-transparent p-4 rounded-2xl border border-[#C97873]/30 space-y-2.5 shadow-inner">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Retail Price</span>
                    <span className="line-through font-mono text-gray-400">
                      {amountFormatter(
                        (selectedCollection.CollectionPrice || 150) + saving
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#C97873]">Member Savings</span>
                    <span className="px-2 py-0.5 rounded bg-[#C97873]/20 text-[#C97873] font-bold font-mono">
                      {amountFormatter(saving)}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-baseline justify-between">
                    <span className="text-xs font-bold text-gray-200">Member Price</span>
                    <span className="text-lg font-black text-[#C97873] font-mono">
                      {amountFormatter(selectedCollection.CollectionPrice || 100)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(selectedCollection)}
                  className="w-full py-3 px-4 rounded-2xl bg-[#C97873] hover:bg-[#b86762] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C97873]/25 hover:shadow-[#C97873]/40 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Cart</span>
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* Main Product Showcase */}
        <div className="lg:col-span-3 space-y-6">
          {/* Header Bar with Vertical Rose Accent and Grid/List Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5 tracking-tight">
              <span className="w-2 h-6 rounded-full bg-[#C97873] inline-block" />
              <span>{selectedCollection?.name || "Collection Showcase"}</span>
            </h3>

            {/* View Switcher Toggle */}
            <div className="flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-white/10 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setIsGridView(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isGridView
                    ? "bg-[#C97873]/25 text-white border border-[#C97873]/50 shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setIsGridView(false)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  !isGridView
                    ? "bg-[#C97873]/25 text-white border border-[#C97873]/50 shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <ListIcon className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
            </div>
          </div>

          {/* Collection Description Callout */}
          {selectedCollection?.about && (
            <div className="p-5 rounded-2xl bg-[#C97873]/10 border border-[#C97873]/30 text-gray-300 text-xs sm:text-sm leading-relaxed shadow-lg">
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedCollection.about }}
              />
            </div>
          )}

          {/* Product Grid / List */}
          {selectedCollection?.products && selectedCollection.products.length > 0 ? (
            <div
              className={
                isGridView
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                  : "flex flex-col gap-4"
              }
            >
              {selectedCollection.products.map((product: any) => (
                <div
                  key={product._id || product.id}
                  className={`group bg-gradient-to-b from-[#18181b] via-[#141417] to-[#101012] rounded-2xl border border-white/10 hover:border-[#C97873]/50 shadow-lg hover:shadow-2xl hover:shadow-[#C97873]/10 transition-all duration-300 overflow-hidden flex ${
                    isGridView
                      ? "flex-col"
                      : "flex-col md:flex-row items-center gap-5 p-4"
                  }`}
                >
                  {/* Image container */}
                  <div
                    className={`relative overflow-hidden bg-white p-4 flex items-center justify-center ${
                      isGridView
                        ? "w-full h-56 border-b border-white/10"
                        : "w-full md:w-44 h-44 rounded-xl flex-shrink-0"
                    }`}
                  >
                    <img
                      crossOrigin="anonymous"
                      src={UPLOADS_URL + product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/80 text-[10px] font-bold text-[#C97873] border border-[#C97873]/30">
                      Member Exclusive
                    </div>
                  </div>

                  {/* Details */}
                  <div className={`p-4 flex-1 flex flex-col justify-between ${!isGridView ? "p-0" : ""}`}>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#C97873] transition-colors duration-200 truncate">
                        {product.name}
                      </h4>

                      {/* Stars rating */}
                      <div className="flex items-center gap-1.5 mt-1.5 mb-2">
                        <div className="flex text-[#C97873]">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < (product.rating || 5)
                                  ? "fill-[#C97873] text-[#C97873]"
                                  : "text-gray-700"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-gray-400 font-mono">
                          ({product.review || 12} reviews)
                        </span>
                      </div>

                      {/* Clean HTML description snippet */}
                      <div className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-3">
                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-500 block">Retail {amountFormatter(product.retailPrice || product.price * 1.25)}</span>
                        <span className="text-sm font-extrabold text-[#C97873] font-mono">
                          {amountFormatter(product.price)}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#C97873]/15 text-[#C97873] border border-[#C97873]/30">
                        Save {amountFormatter((product.retailPrice || product.price * 1.25) - product.price)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/5 text-gray-400">
              <Sparkles className="w-8 h-8 text-[#C97873] mx-auto mb-3 animate-pulse" />
              <p className="text-sm font-medium">Select a collection from the left sidebar to explore items.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
