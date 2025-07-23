import { Filter, Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { ImageUrl } from '../../utils/Functions';

type Category = 'Pharmacogenomics' | 'Wellness' | 'Mental Health' | 'Cancer Risk' | 'Prenatal';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
}

function BrowseCategory() {
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(new Set());
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories: Category[] = ['Pharmacogenomics', 'Wellness', 'Mental Health', 'Cancer Risk', 'Prenatal'];
  
  const products: Product[] = [
    {
      id: '1',
      name: 'GENECORE',
      price: 499.00,
      image: 'cs.png',
      category: 'Pharmacogenomics'
    },
    {
      id: '2',
      name: 'GENEPAIN',
      price: 499.00,
      image: 'cs.png',
      category: 'Mental Health'
    },
    {
      id: '3',
      name: 'GENEESTROGEN',
      price: 499.00,
      image: 'cs.png',
      category: 'Cancer Risk'
    },
  ];

  const handleCategoryChange = (category: Category) => {
    const newSelectedCategories = new Set(selectedCategories);
    if (newSelectedCategories.has(category)) {
      newSelectedCategories.delete(category);
    } else {
      newSelectedCategories.add(category);
    }
    setSelectedCategories(newSelectedCategories);
  };

  const filteredProducts = products.filter(product => 
    selectedCategories.size === 0 || selectedCategories.has(product.category)
  );

  return (
    <div className="  text-white">
      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed top-4 right-4 z-10">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="bg-purple-600 p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        >
          <Filter className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 md:p-4 lg:p-4">
        <div className=" mx-auto">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Filters Section */}
            <div className={`
              fixed inset-0 lg:relative z-40 transform transition-transform duration-300 ease-in-out
              ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
              bg-gray-900 lg:bg-transparent
              lg:block
            `}>
              {/* Close button for mobile */}
              <button
                className="lg:hidden absolute top-4 right-4 text-white"
                onClick={() => setIsFilterOpen(false)}
              >
                ×
              </button>

              <div className="h-full overflow-y-auto  space-y-8">
                {/* Category Browser */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-4">Browse by Category</h2>
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <li key={category}>
                        <label className="flex items-center space-x-3 p-2 rounded-md transition-colors hover:bg-gray-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedCategories.has(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="w-4 h-4 text-purple-600 rounded border-gray-600 focus:ring-purple-500 focus:ring-2 bg-gray-700"
                          />
                          <span className="text-gray-300 ml-2">{category}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="overflow-hidden transition-transform hover:scale-105"
                  >
                    <div className="relative rounded-4xl bg-white/40">
                      <img
                        src={ImageUrl(product.image)}
                        alt={product.name}
                        className=" object-cover"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                          <ShoppingCart className="w-5 h-5 transition-colors" />
                        </button>
                        <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      {/* <span className="inline-block px-2 py-1 mt-2 text-xs rounded-full bg-purple-600/20 text-purple-300">
                        {product.category}
                      </span> */}
                      <p className="text-xl font-bold mt-3">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseCategory;