// import { Eye, Heart, Lock, ShoppingCart, Star } from "lucide-react";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { UPLOADS_URL } from "../../constants/api";
import { addToCart } from "../../redux/reducers/cartSlice";
import { useGetAllCollectionQuery } from "../../redux/services/collectionSlice";



const ProductWithSidebar: React.FC = () => {
    const [isGridView, setIsGridView] = useState(true);
    // const [likedItems, setLikedItems] = useState<number[]>([]);
    const [selectedCollection, setSelectedCollection] = useState<string | any>();
    const [saving, setSaving] = useState<number>(0);
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();

    const { data: collection } = useGetAllCollectionQuery({})

    useEffect(() => {
        if (collection && collection.length > 0) {
            if (id) {
                const foundCollection = collection.find((p: any) => p._id === id)
                let savings = foundCollection?.products?.reduce((acc: number, product: any) => acc + (product.retailPrice - product.price), 0)
                setSelectedCollection(foundCollection);
                setSaving(savings || 0);
            }
            else {
                setSelectedCollection(collection[0]);
                let savings = collection[0]?.products?.reduce((acc: number, product: any) => acc + (product.retailPrice - product.price), 0)
                setSaving(savings || 0);
            }


        }
    }, [collection]);

    function handleAddToCart(item: any) {
        dispatch(addToCart(item));
    }

    useEffect(() => { window.scrollTo(0, 0); }, []);

    function handleChange(item: any) {
        setSelectedCollection(item);
        let savings = item?.products?.reduce((acc: number, product: any) => acc + (product.retailPrice - product.price), 0)
        setSaving(savings || 0);
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#181d2c] text-white px-4 md:px-8 py-6">
                <h6 className="shop-heading">SHOP</h6>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="bg-[#1f2638] rounded-xl p-6 space-y-4 w-full">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 mb-2">
                                COLLECTION
                            </h3>
                            {collection && collection.length > 0 ?

                                collection?.map((item: any) => (
                                    <label
                                        key={item?._id}
                                        className="flex items-center space-x-2 text-sm mb-1 cursor-pointer py-2"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedCollection === item}
                                            onChange={() => handleChange(item)}
                                            className="form-checkbox accent-green-500"
                                        />
                                        <span className="text-white pl-2">CHOOSE {item?.name}</span>
                                    </label>
                                ))

                                :

                                <div className="flex items-center space-x-2 text-sm mb-1 cursor-pointer py-2">
                                    <span className="text-white pl-2">No Collection</span>
                                </div>


                            }

                        </div>


                        {selectedCollection && (
                            <>
                                <div className="space-y-4 bg-white/5 p-4 rounded-xl border border-white/10 shadow-md w-full">

                                    {/* Price Section */}
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-lg font-semibold text-gray-300">Price</span>
                                        <span className="text-2xl font-extrabold text-white">
                                            ${selectedCollection?.CollectionPrice + saving}
                                        </span>
                                    </div>

                                    {/* Savings Section */}

                                    <div className="flex items-center justify-between gap-4">
                                        <h4 className="text-lg font-semibold text-green-400">You Saved</h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-400 text-xl font-extrabold">
                                                ${saving}
                                            </span>
                                        </div>
                                    </div>


                                    {/* total Price */}
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-lg font-semibold text-gray-300">Total</span>
                                        <span className="text-2xl font-extrabold text-white">
                                            ${selectedCollection?.CollectionPrice}
                                        </span>
                                    </div>

                                </div>

                                <button onClick={() => handleAddToCart(selectedCollection)} className="w-full site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200">
                                    Add To Cart
                                </button>
                            </>
                        )}


                    </div>

                    {/* Product Section */}
                    <div className="lg:col-span-3">
                        {/* Top: Grid/List Toggle & Sort (Moved Inside) */}
                        <div className="flex justify-between items-center mb-6 ">
                            <div className="flex space-x-2 gap-3">
                                <button
                                    onClick={() => setIsGridView(true)}
                                    className={`p-2 rounded ${isGridView ? "bg-[#3a4160]" : "bg-[#2a3146]"
                                        }`}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect x="3" y="3" width="7" height="7" />
                                        <rect x="14" y="3" width="7" height="7" />
                                        <rect x="14" y="14" width="7" height="7" />
                                        <rect x="3" y="14" width="7" height="7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setIsGridView(false)}
                                    className={`p-2 rounded ${!isGridView ? "bg-[#3a4160]" : "bg-[#2a3146]"
                                        }`}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect x="3" y="4" width="18" height="2" />
                                        <rect x="3" y="10" width="18" height="2" />
                                        <rect x="3" y="16" width="18" height="2" />
                                    </svg>
                                </button>
                            </div>

                            {/* <select
                                className="bg-[#2a3146] text-white px-4 py-2 rounded text-sm"
                            >
                                <option value="">Sort by</option>
                                <option value="Rating">Rating</option>
                                <option value="Title">Title (A-Z)</option>
                            </select> */}
                        </div>


                        <div className="w-full p-4 bg-[#1f2638] rounded-xl my-4  md:text-xl">
                            {/* {selectedCollection?.about || ""} */}
                            <div dangerouslySetInnerHTML={{ __html: selectedCollection?.about || '' }} />
                        </div>

                        {/* Product Cards */}
                        <div
                            className={`${isGridView
                                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                                : "flex flex-col gap-4"
                                }`}
                        >
                            {selectedCollection?.products?.map((product: any) => {
                                // const isLiked = likedItems.includes(product.id);
                                return (
                                    <div
                                        key={product.id}
                                        className={`bg-[#1f2638] p-4 rounded-lg shadow hover:shadow-lg transition-all ${!isGridView ? "flex items-center gap-4" : ""
                                            }`}
                                    >
                                        <div className="bg-[#fff]">
                                            <img
                                                crossOrigin="anonymous"
                                                src={UPLOADS_URL + product.image}
                                                alt={product.title}
                                                className={`rounded object-cover ${isGridView ? "w-full h-64" : "w-40 h-40"
                                                    }`}
                                            />
                                        </div>
                                        <div className={`${!isGridView ? "flex-1" : ""}`}>
                                            {/* <div className="flex justify-center md:justify-start space-x-3 my-3">
                                                <Heart
                                                    onClick={() => toggleLike(product.id)}
                                                    className={`w-4 h-4 cursor-pointer ${isLiked
                                                        ? "text-red-500 fill-red-500"
                                                        : "text-[#ff6680]"
                                                        }`}
                                                />
                                                <Eye className="w-4 h-4 text-[#ff6680]" />
                                                <Lock className="w-4 h-4 text-[#ff6680]" />
                                                <ShoppingCart className="w-4 h-4 text-[#ff6680]" />
                                            </div> */}
                                            <div className="flex justify-between items-center mt-2">
                                                <h3 className="lg:text-lg font-semibold">
                                                    {product.name}
                                                </h3>

                                                <div className="flex items-center gap-2">
                                                    {/* Discounted / Sale Price */}
                                                    <span className="text-green-600 font-bold text-md lg:text-lg whitespace-nowrap">
                                                        $ {product?.price}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center text-sm text-yellow-400 mb-1">

                                                {Array.from({ length: 5 }).map((_, i) => {
                                                    const full = i + 1 <= Math.floor(product.rating);
                                                    const half = !full && i < product.rating;

                                                    return (
                                                        <div key={i} className="relative w-4 h-4">
                                                            <Star className="w-4 h-4 fill-gray-300 absolute" stroke="none" />
                                                            {full && <Star className="w-4 h-4 fill-yellow-400 absolute" />}
                                                            {half && (
                                                                <Star
                                                                    className="w-4 h-4 fill-yellow-400 absolute"
                                                                    style={{ clipPath: "inset(0 50% 0 0)" }}
                                                                />
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                                <span className="ml-2 text-gray-300">
                                                    {product.review}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm">
                                                {product.description}
                                            </p>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <section className="ethicsBoundary-bg">
                <ChooseInfoSection />
                <Footer />
            </section>
        </>
    );
};

export default ProductWithSidebar;
