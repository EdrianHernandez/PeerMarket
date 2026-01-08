import React, { useState, useEffect, useRef } from 'react';
import { geminiService } from '../services/geminiService';

const MarketplaceHeader = ({ searchTerm, onSearch, onSellClick }) => {
  const [inputValue, setInputValue] = useState(searchTerm);
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputValue.length > 2) {
        const results = await geminiService.getSearchSuggestions(inputValue);
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  // Handle outside click to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  const handleSuggestionClick = (s) => {
    setInputValue(s);
    onSearch(s);
    setIsFocused(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-xl">P</span>
          </div>
          <span className="hidden sm:block text-xl font-bold text-gray-900 tracking-tight">
            PeerMarket
          </span>
        </div>

        {/* Search Bar */}
        <div ref={searchRef} className="search-bar relative flex-grow max-w-2xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm"
              placeholder="Search items, brands, categories..."
              value={inputValue}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
            />
          </div>

          {/* AI Suggestions Dropdown */}
          {isFocused && (suggestions.length > 0 || inputValue.length > 1) && (
            <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden py-2 animate-in fade-in zoom-in duration-200">
              <div className="px-4 py-1 text-[10px] font-bold text-indigo-500 uppercase tracking-wider flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 15.657l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414zM16 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1z" />
                </svg>
                AI Suggestions
              </div>
              {suggestions.length > 0 ? (
                suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestionClick(s)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 flex items-center"
                  >
                    <span className="mr-3 text-gray-400">🔍</span>
                    {s}
                  </button>
                ))
              ) : (
                <div className="px-4 py-2 text-xs text-gray-400 italic">Thinking of related items...</div>
              )}
            </div>
          )}
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onSellClick}
            className="hidden sm:flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-semibold text-sm transition-colors shadow-sm"
          >
            <span className="mr-1.5">+</span> Sell Item
          </button>
          
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden group-hover:border-indigo-500 transition-colors">
              <img src="https://i.pravatar.cc/100?u=currentUser" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MarketplaceHeader;
