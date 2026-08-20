import {
  Check,
  LayoutGrid,
  List as ListIcon,
  ShoppingBag,
  Star,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { UPLOADS_URL } from "../../constants/api";
import { useAddToCartMutation } from "../../redux/services/cartSlice";
import { useGetAllCollectionQuery } from "../../redux/services/collectionSlice";
import { amountFormatter } from "../../utils/Functions";
import Swal from "sweetalert2";

const ProductWithSidebar: React.FC = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState<string | any>();
  const [saving, setSaving] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams<{ id: string }>();

  const { data: collection } = useGetAllCollectionQuery({});
  const [addToCart, { isLoading }] = useAddToCartMutation();

  useEffect(() => {
    if (collection && collection.length > 0) {
      if (id) {
        const foundCollection = collection.find((p: any) => p._id === id);
        let savings = foundCollection?.products?.reduce(
          (acc: number, product: any) =>
            acc + (product.retailPrice - product.price),
          0,
        );
        setSelectedCollection(foundCollection);
        setSaving(savings || 0);
      } else {
        setSelectedCollection(collection[0]);
        let savings = collection[0]?.products?.reduce(
          (acc: number, product: any) =>
            acc + (product.retailPrice - product.price),
          0,
        );
        setSaving(savings || 0);
      }
    }
  }, [collection]);

  async function handleAddToCart(collection: any) {
    try {
      const result = await addToCart({
        collectionId: collection._id,
        quantity,
      }).unwrap();

      if (result?.success !== false) {
        Swal.fire({
          icon: "success",
          title: "Added to cart",
          text:
            result?.message || "Collection added to your cart successfully.",
          confirmButtonColor: "#C97873",
        });
      }
    } catch (error: any) {
      console.error("Failed to add collection to cart:", error);
      Swal.fire({
        icon: "error",
        title: "Unable to add to cart",
        text: error?.data?.message || "Something went wrong.",
        confirmButtonColor: "#C97873",
      });
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleChange(item: any) {
    setSelectedCollection(item);
    setQuantity(1);
    let savings = item?.products?.reduce(
      (acc: number, product: any) =>
        acc + (product.retailPrice - product.price),
      0,
    );
    setSaving(savings || 0);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#141414] to-[#1a1a1a] text-white flex flex-col font-sans selection:bg-[#C97873]/30 selection:text-white">
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero Header Section */}
        <div className="relative mb-10 pb-6 border-b border-[#C97873]/20 overflow-hidden">
          {/* Ambient Glow background decorative element */}
          <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#C97873]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C97873]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative p-3 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 text-[#C97873] text-xs font-semibold uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C97873] animate-pulse"></span>
                Exclusive Catalog
              </div>
              <h1 className=" text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Shop <span className="text-[#C97873]">Collections</span>
              </h1>
              <p className="mt-2 text-sm md:text-base text-gray-400 max-w-2xl">
                Explore curated product bundles with exclusive member-only
                savings and premium crafted selection.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-b from-[#18181b] to-[#101012] rounded-2xl p-5 border border-[#C97873]/20 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  COLLECTION
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10 font-mono">
                  {collection?.length || 0} Available
                </span>
              </div>

              <div className="space-y-2 mb-6">
                {collection && collection.length > 0 ? (
                  collection.map((item: any) => {
                    const isSelected =
                      selectedCollection?._id === item?._id ||
                      selectedCollection === item;
                    return (
                      <button
                        key={item?._id}
                        type="button"
                        onClick={() => handleChange(item)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-sm font-medium transition-all duration-200 group border ${
                          isSelected
                            ? "bg-[#C97873]/15 border-[#C97873]/60 text-white shadow-lg shadow-[#C97873]/10"
                            : "bg-white/[0.02] border-white/5 text-gray-300 hover:bg-white/[0.06] hover:border-white/15 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-3 truncate pr-2">
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${
                              isSelected
                                ? "border-[#C97873] bg-[#C97873] text-black"
                                : "border-gray-600 group-hover:border-gray-400"
                            }`}
                          >
                            {isSelected && (
                              <Check className="w-3 h-3 stroke-[3]" />
                            )}
                          </span>
                          <span className="truncate">{item?.name}</span>
                        </span>
                        {item?.products && (
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${isSelected ? "bg-[#C97873]/20 text-[#C97873]" : "bg-white/5 text-gray-500"}`}
                          >
                            {item.products.length} items
                          </span>
                        )}
                      </button>
                    );
                  })
                ) : (
                  <div className="py-4 text-center text-sm text-gray-500 bg-white/[0.02] rounded-xl border border-white/5">
                    No Collections Found
                  </div>
                )}
              </div>

              {/* Collection Summary & Add to Cart Card */}
              {selectedCollection && (
                <div className="mt-6 pt-5 border-t border-white/10 space-y-4">
                  <div className="bg-gradient-to-br from-[#C97873]/15 via-white/[0.02] to-transparent p-4 rounded-xl border border-[#C97873]/30 space-y-3 shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 w-16 h-16 bg-[#C97873]/10 rounded-full blur-xl pointer-events-none" />

                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Retail Price</span>
                      <span className="line-through font-mono text-gray-400">
                        {amountFormatter(
                          selectedCollection?.CollectionPrice + saving,
                        )}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-[#C97873] flex items-center gap-1">
                        <span>Member Savings</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#C97873]/20 text-[#C97873] font-bold font-mono">
                        {amountFormatter(saving)}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-baseline justify-between">
                      <span className="text-sm font-bold text-gray-200">
                        Member Price
                      </span>
                      <span className="text-xl font-black text-[#C97873] font-mono tracking-tight">
                        {amountFormatter(selectedCollection?.CollectionPrice)}
                      </span>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex w-full items-center justify-between gap-3 rounded-full border border-[#C97873]/80 bg-[#101315] px-3 py-2">
                      <button
                        type="button"
                        onClick={() =>
                          setQuantity((prev) => Math.max(1, prev - 1))
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C97873]/80 text-2xl font-light leading-none text-[#C97873] transition-colors hover:bg-[#C97873]/10"
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-[1.1rem] font-semibold text-white">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity((prev) => prev + 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C97873]/80 text-2xl font-light leading-none text-[#C97873] transition-colors hover:bg-[#C97873]/10"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToCart(selectedCollection)}
                    disabled={isLoading}
                    className="
                        w-full relative group overflow-hidden rounded-[16px]
                        border border-[#D89B93]/70
                        px-4 py-3
                        text-[#1d1a1a] font-bold text-base
                        shadow-[0_8px_18px_rgba(217,163,154,0.25)]
                        transition-all duration-300
                        hover:brightness-105
                        active:scale-[0.99]
                        flex items-center justify-center gap-3
                        bg-[#C97873] hover:bg-[#b86762]
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                        disabled:hover:bg-[#C97873]
                        disabled:hover:brightness-100
                        disabled:active:scale-100
                      "
                  >
                    <ShoppingBag className="w-5 h-5 shrink-0" />
                    <span>{isLoading ? "Adding..." : "Add To Cart"}</span>
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* Main Products Container */}
          <div className="lg:col-span-3 space-y-6">
            {/* Control Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                  <span className="w-2 h-6 rounded-full bg-[#C97873] inline-block"></span>
                  <span className="text-[#C97873]">
                    {selectedCollection?.name || "Products"}
                  </span>
                </h2>
              </div>

              {/* View Switcher Controls */}
              <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10 self-start sm:self-auto">
                <button
                  onClick={() => setIsGridView(true)}
                  title="Grid View"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isGridView
                      ? "bg-[#C97873]/20 text-white border border-[#C97873]/50 shadow-sm"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setIsGridView(false)}
                  title="List View"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    !isGridView
                      ? "bg-[#C97873]/20 text-white border border-[#C97873]/50 shadow-sm"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <ListIcon className="w-4 h-4" />
                  <span>List</span>
                </button>
              </div>
            </div>

            {/* Collection Description Callout */}
            {selectedCollection?.about && (
              <div className="p-5 rounded-2xl bg-[#C97873]/5 border-l-4 border-y border-r !border-[#C97873]/20 text-gray-300 text-sm leading-relaxed shadow-lg">
                <div
                  className="prose prose-invert max-w-none prose-p:my-1 prose-a:text-[#C97873]"
                  dangerouslySetInnerHTML={{ __html: selectedCollection.about }}
                />
              </div>
            )}

            {/* Product Cards Grid / List */}
            <div
              className={
                isGridView
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "flex flex-col gap-4"
              }
            >
              {selectedCollection?.products?.map((product: any) => {
                return (
                  <div
                    key={product.id || product._id}
                    className={`group bg-gradient-to-b from-[#18181b] to-[#101012] rounded-2xl border border-white/10 hover:border-[#C97873]/50 shadow-lg hover:shadow-2xl hover:shadow-[#C97873]/10 transition-all duration-300 overflow-hidden flex ${
                      isGridView
                        ? "flex-col"
                        : "flex-col md:flex-row items-center gap-5 p-4"
                    }`}
                  >
                    {/* Product Image Area */}
                    <div
                      className={`relative overflow-hidden bg-white p-3 flex items-center justify-center ${
                        isGridView
                          ? "w-full h-64 border-b border-white/10"
                          : "w-full md:w-48 h-48 rounded-xl flex-shrink-0"
                      }`}
                    >
                      <img
                        crossOrigin="anonymous"
                        src={UPLOADS_URL + product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Product Details Area */}
                    <div
                      className={`p-5 flex-1 flex flex-col justify-between ${!isGridView ? "p-0 w-full" : ""}`}
                    >
                      <div>
                        {/* Product Name */}
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#C97873] transition-colors duration-200 line-clamp-1">
                          {product.name}
                        </h3>

                        {/* Rating & Review */}
                        <div className="flex items-center gap-2 mt-2 mb-3">
                          <div className="flex items-center text-[#C97873]">
                            {Array.from({ length: 5 }).map((_, i) => {
                              const full =
                                i + 1 <= Math.floor(product.rating || 0);
                              const half = !full && i < (product.rating || 0);

                              return (
                                <div
                                  key={i}
                                  className="relative w-3.5 h-3.5 mr-0.5"
                                >
                                  <Star className="w-3.5 h-3.5 fill-gray-700 text-gray-700 absolute" />
                                  {full && (
                                    <Star className="w-3.5 h-3.5 fill-[#C97873] text-[#C97873] absolute" />
                                  )}
                                  {half && (
                                    <Star
                                      className="w-3.5 h-3.5 fill-[#C97873] text-[#C97873] absolute"
                                      style={{ clipPath: "inset(0 50% 0 0)" }}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          <span className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                            {product.review || 0} reviews
                          </span>
                        </div>

                        {/* Product Description */}
                        <div className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-4">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <section className="ethicsBoundary-bg border-t border-white/10 mt-auto">
        <ChooseInfoSection />
        <Footer />
      </section>
    </div>
  );
};

export default ProductWithSidebar;
