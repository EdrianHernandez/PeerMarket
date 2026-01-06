
import React, { useState, useMemo } from 'react';
import MarketplaceHeader from './components/MarketplaceHeader';
import CategoryIcons from './components/CategoryIcons';
import ProductGrid from './components/ProductGrid';
import { MOCK_PRODUCTS, CATEGORIES } from './constants';
import { geminiService } from './services/geminiService';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  
  // Filtering logic
  const filteredProducts = useMemo(() => {
    let results = MOCK_PRODUCTS;

    if (selectedCategoryId) {
      const categoryName = CATEGORIES.find(c => c.id === selectedCategoryId)?.name;
      if (categoryName) {
        results = results.filter(p => p.category === categoryName);
      }
    }

    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      results = results.filter(p => 
        p.title.toLowerCase().includes(lowerSearch) || 
        p.category.toLowerCase().includes(lowerSearch) ||
        p.description.toLowerCase().includes(lowerSearch)
      );
    }

    return results;
  }, [searchTerm, selectedCategoryId]);

  const handleSellClick = () => {
    setIsSellModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MarketplaceHeader 
        searchTerm={searchTerm} 
        onSearch={setSearchTerm} 
        onSellClick={handleSellClick}
      />
      
      <CategoryIcons 
        selectedCategoryId={selectedCategoryId} 
        onSelectCategory={setSelectedCategoryId} 
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 w-full">
        {/* Banner */}
        <div className="mt-8 mb-4 p-6 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Buy and sell in your neighborhood</h2>
            <p className="text-indigo-100 text-sm md:text-base">Find great deals on electronics, furniture, vehicles and more from local sellers you can trust.</p>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 flex items-center justify-center transform translate-x-1/4">
             <span className="text-9xl">🛍️</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-2 mt-8">
          <h2 className="text-xl font-bold text-gray-900">
            {selectedCategoryId 
              ? `Items in ${CATEGORIES.find(c => c.id === selectedCategoryId)?.name}` 
              : searchTerm 
                ? `Results for "${searchTerm}"`
                : "Today's picks"}
          </h2>
          <div className="flex items-center text-sm text-indigo-600 font-medium cursor-pointer hover:underline">
            <span>Filter</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </div>
        </div>

        <ProductGrid products={filteredProducts} />
      </main>

      <footer className="bg-white border-t border-gray-200 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Marketplace</h4>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="hover:text-indigo-600 cursor-pointer">Local Listings</li>
                <li className="hover:text-indigo-600 cursor-pointer">Categories</li>
                <li className="hover:text-indigo-600 cursor-pointer">Buyer Protection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Sell</h4>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="hover:text-indigo-600 cursor-pointer">Create Listing</li>
                <li className="hover:text-indigo-600 cursor-pointer">Selling Tips</li>
                <li className="hover:text-indigo-600 cursor-pointer">Fees & Payments</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Support</h4>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="hover:text-indigo-600 cursor-pointer">Help Center</li>
                <li className="hover:text-indigo-600 cursor-pointer">Trust & Safety</li>
                <li className="hover:text-indigo-600 cursor-pointer">Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="hover:text-indigo-600 cursor-pointer">Terms of Service</li>
                <li className="hover:text-indigo-600 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-indigo-600 cursor-pointer">Ad Choices</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>&copy; 2024 PeerMarket Inc. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span>English (US)</span>
              <span>USD</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Basic Sell Modal Overlay */}
      {isSellModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsSellModalOpen(false)}></div>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">List an Item</h3>
                <button onClick={() => setIsSellModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <SellItemForm onCancel={() => setIsSellModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Simplified Sell Item Form with AI feature
const SellItemForm: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0].name);
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateDescription = async () => {
    if (!title) return;
    setIsGenerating(true);
    const result = await geminiService.generateProductDescription(title, category);
    setDescription(result);
    setIsGenerating(false);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">What are you selling?</label>
        <input 
          type="text" 
          placeholder="e.g. iPhone 13 Pro Max, used" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
        </select>
      </div>
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <button 
            type="button" 
            onClick={handleGenerateDescription}
            disabled={isGenerating || !title}
            className={`text-xs flex items-center ${isGenerating || !title ? 'text-gray-400' : 'text-indigo-600 hover:text-indigo-800 font-semibold'}`}
          >
            {isGenerating ? 'Generating...' : '✨ Auto-generate with AI'}
          </button>
        </div>
        <textarea 
          rows={4} 
          placeholder="Tell buyers about your item..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="pt-2 flex gap-3">
        <button 
          onClick={onCancel}
          className="flex-1 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button 
          className="flex-1 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
          onClick={() => {
            alert("This is a demo. In a real app, your item would be listed!");
            onCancel();
          }}
        >
          List Item
        </button>
      </div>
    </div>
  );
};

export default App;
