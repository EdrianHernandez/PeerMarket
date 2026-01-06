
import React from 'react';
import { Seller } from '../types';

interface SellerBadgeProps {
  seller: Seller;
  className?: string;
}

const SellerBadge: React.FC<SellerBadgeProps> = ({ seller, className = "" }) => {
  return (
    <div className={`seller-info flex items-center space-x-2 ${className}`}>
      <img 
        src={seller.avatar} 
        alt={seller.name} 
        className="w-6 h-6 rounded-full object-cover border border-gray-200"
      />
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <span className="text-xs font-semibold text-gray-700 truncate max-w-[80px]">
            {seller.name}
          </span>
          {seller.isVerified && (
            <svg className="w-3 h-3 text-blue-500 fill-current" viewBox="0 0 20 20">
              <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
              <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div className="flex items-center text-[10px] text-gray-500">
          <span className="text-yellow-500 mr-0.5">★</span>
          <span>{seller.rating}</span>
          <span className="mx-1">•</span>
          <span>{seller.reviewCount} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default SellerBadge;
