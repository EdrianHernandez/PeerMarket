import React from 'react';
import { CATEGORIES } from '../constants';

const CategoryIcons = ({ selectedCategoryId, onSelectCategory }) => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto no-scrollbar py-4 space-x-6">
          <button 
            onClick={() => onSelectCategory(null)}
            className="flex flex-col items-center flex-shrink-0 group focus:outline-none"
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-200 border-2 ${!selectedCategoryId ? 'bg-indigo-50 border-indigo-600 scale-110 shadow-sm' : 'bg-gray-100 border-transparent group-hover:bg-gray-200'}`}>
              🏠
            </div>
            <span className={`mt-2 text-xs font-medium transition-colors ${!selectedCategoryId ? 'text-indigo-600 font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>
              All
            </span>
          </button>
          
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="flex flex-col items-center flex-shrink-0 group focus:outline-none"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-200 border-2 ${selectedCategoryId === category.id ? 'bg-indigo-50 border-indigo-600 scale-110 shadow-sm' : 'bg-gray-100 border-transparent group-hover:bg-gray-200'}`}>
                {category.icon}
              </div>
              <span className={`mt-2 text-xs font-medium transition-colors ${selectedCategoryId === category.id ? 'text-indigo-600 font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryIcons;
