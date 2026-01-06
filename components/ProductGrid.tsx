
import React from 'react';
import { Product } from '../types';
import SellerBadge from './SellerBadge';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p className="text-xl font-medium">No items found</p>
        <p className="text-sm">Try adjusting your search or category filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-6">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="item-card bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer"
        >
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-900 shadow-sm">
                ${product.price}
              </span>
            </div>
            <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm transition-colors shadow-sm">
              <svg className="w-4 h-4 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Details Container */}
          <div className="p-3 md:p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 min-h-[40px]">
              {product.title}
            </h3>
            
            <div className="flex items-center text-xs text-gray-500 mb-3">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate">{product.location}</span>
              <span className="mx-1">•</span>
              <span className="flex-shrink-0">{product.postedAt}</span>
            </div>

            <div className="pt-3 border-t border-gray-100">
              <SellerBadge seller={product.seller} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
