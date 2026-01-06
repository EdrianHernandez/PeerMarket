
export interface Seller {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  avatar: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  category: string;
  image: string;
  description: string;
  seller: Seller;
  postedAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
