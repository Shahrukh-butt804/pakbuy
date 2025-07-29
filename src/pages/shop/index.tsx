import { Eye, Heart, Lock, ShoppingCart, Star } from "lucide-react";
import React, {  useState } from "react";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { ImageUrl } from '../../utils/Functions';






const productsData = [
    {
        id: 1,
        title: "Muse S Athena",
        image: "product1.png",
        rating: 5,
        reviews: 2643,
        description:
            "Train your brain to achieve peak focus, endurance, and resilience with exclusive EEG and fNIRS technology.",
    },
    {
        id: 2,
        title: "SecuriGene",
        image: "product1.png",
        rating: 4,
        reviews: 2643,
        description:
            "Does late-onset dementia run in your family? SecuriGene Alzheimer’s DNA test helps determine who may be at risk.",
    },
    {
        id: 3,
        title: "Brain HQ",
        image: "product1.png",
        rating: 3,
        reviews: 2643,
        description:
            "Brain HQ is the proven platform for individualized brain engagement.",
    },
    {
        id: 4,
        title: "LifeSum",
        image: "product1.png",
        rating: 5,
        reviews: 2643,
        description:
            "Improving your nutrition can lead to better brain health. Lifesum helps achieve nutrition goals.",
    },
];

const ProductWithSidebar: React.FC = () => {
    const [isGridView, setIsGridView] = useState(true);
    const [likedItems, setLikedItems] = useState<number[]>([]);
    const [selectedCollection, setSelectedCollection] = useState<string>("Mind");
    const [sortBy, setSortBy] = useState<string>("");
 


    // const collections = ["Mind", "Ultra", "Shift", "Beat", "Snooze"];

    const toggleLike = (id: number) => {
        setLikedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const sortedProducts = [...productsData].sort((a, b) => {
        if (sortBy === "Rating") return b.rating - a.rating;
        if (sortBy === "Title") return a.title.localeCompare(b.title);
        return 0;
    });





    



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
                            {["Mind", "Ultra", "Shift", "Beat", "Snooze"].map((col) => (
                                <label
                                    key={col}
                                    className="flex items-center space-x-2 text-sm mb-1 cursor-pointer py-2"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedCollection === col}
                                        onChange={() => setSelectedCollection(col)}
                                        className="form-checkbox accent-green-500"
                                    />
                                    <span className="text-white pl-2">CHOOSE {col}</span>
                                </label>
                            ))}
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-1">PRICE:</h4>
                            <p className="text-lg font-bold text-white">$600</p>
                        </div>

                        <button className="w-full site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200">
                            Buy Now
                        </button>
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

                            <select
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-[#2a3146] text-white px-4 py-2 rounded text-sm"
                            >
                                <option value="">Sort by</option>
                                <option value="Rating">Rating</option>
                                <option value="Title">Title (A-Z)</option>
                            </select>
                        </div>

                        {/* Product Cards */}
                        <div
                            className={`${isGridView
                                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                                : "flex flex-col gap-4"
                                }`}
                        >
                            {sortedProducts.map((product) => {
                                const isLiked = likedItems.includes(product.id);
                                return (
                                    <div
                                        key={product.id}
                                        className={`bg-[#1f2638] p-4 rounded-lg shadow hover:shadow-lg transition-all ${!isGridView ? "flex items-center gap-4" : ""
                                            }`}
                                    >
                                        <div className="bg-[#fff]">
                                            <img
                                                src={ImageUrl(product.image)}
                                                alt={product.title}
                                                className={`rounded object-cover ${isGridView ? "w-full h-64" : "w-40 h-40"
                                                    }`}
                                            />
                                        </div>
                                        <div className={`${!isGridView ? "flex-1" : ""}`}>
                                            <div className="flex justify-center md:justify-start space-x-3 my-3">
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
                                            </div>
                                            <h3 className="text-lg font-semibold mb-1">
                                                {product.title}
                                            </h3>
                                            <div className="flex items-center text-sm text-yellow-400 mb-1">
                                                {Array.from({ length: product.rating }).map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                                                ))}
                                                <span className="ml-2 text-gray-300">
                                                    {product.reviews}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm">
                                                {product.description}
                                            </p>

                                            <button className={`site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200 ${isGridView ? "w-full" : "w-auto"}`} >
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* {showCart && <Drawer
                            title="Bonus Add-On Options"
                            placement="right"
                            onClose={onClose}
                            open={showCart}
                            width={600}
                            extra={<Button icon={<CloseOutlined />} onClick={onClose} />}
                        >

                            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4`}>
                                {addOns.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-[#1f2638] p-4 rounded-lg shadow hover:shadow-lg transition-all"
                                    >
                                        <div className="bg-white">
                                            <img
                                                src={ImageUrl(item.image)}
                                                alt={item.title}
                                                className="rounded object-cover w-full h-44"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="text-lg font-semibold mb-1 text-white">{item.title}</h3>
                                            <div className="flex items-center text-sm text-yellow-400 mb-1">
                                                {Array.from({ length: item.rating }).map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                                                ))}
                                            </div>
                                            <p className="text-white font-semibold text-lg">${item.price.toFixed(2)}</p>

                                            <button
                                                className="site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200 w-full mt-3 text-white"
                                                onClick={() => handleAddToCart(item)}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <Divider />

                            
                            <div>
                                <h3 className="text-lg font-bold mb-2">My Cart</h3>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={cartItems}
                                    renderItem={(item) => (
                                        <List.Item
                                            actions={[
                                                <Button
                                                    size="small"
                                                    type="text"
                                                    danger
                                                    onClick={() => handleRemove(item.id)}
                                                >
                                                    ✕
                                                </Button>,
                                            ]}
                                        >
                                            <List.Item.Meta
                                                avatar={<Image src={ImageUrl(item.image)} width={60} />}
                                                
                                                title={item.title}
                                                description={`$${item.price.toFixed(2)}`}
                                            />
                                        </List.Item>
                                    )}
                                />

                                <Divider />

                               
                                <div className="text-right space-y-1">
                                    <p>
                                        Sub-total: <strong>${subtotal.toFixed(2)}</strong>
                                    </p>
                                    <p>
                                        Tax (20%): <strong>${tax.toFixed(2)}</strong>
                                    </p>
                                    <p className="text-xl">
                                        Total: <strong>${total.toFixed(2)}</strong>
                                    </p>
                                    <Button
                                        type="primary"
                                        onClick={() => navigate("/checkout")}
                                        className="mt-2 w-full site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200"
                                    >
                                        CHECKOUT
                                    </Button>
                                </div>
                            </div>
                        </Drawer>} */}
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
