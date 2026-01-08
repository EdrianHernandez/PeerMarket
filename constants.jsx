export const CATEGORIES = [
  { id: '1', name: 'Electronics', icon: '📱' },
  { id: '2', name: 'Furniture', icon: '🛋️' },
  { id: '3', name: 'Vehicles', icon: '🚗' },
  { id: '4', name: 'Apparel', icon: '👕' },
  { id: '5', name: 'Home & Garden', icon: '🏡' },
  { id: '6', name: 'Hobbies', icon: '🎨' },
  { id: '7', name: 'Toys', icon: '🧸' },
  { id: '8', name: 'Sports', icon: '⚽' },
  { id: '9', name: 'Tools', icon: '🛠️' },
  { id: '10', name: 'Music', icon: '🎸' },
  { id: '11', name: 'Pets', icon: '🐶' },
  { id: '12', name: 'Books', icon: '📚' },
];

export const MOCK_PRODUCTS = [
  {
    id: 'p1',
    title: 'Vintage Film Camera',
    price: 120,
    location: 'Brooklyn, NY',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    description: 'Beautifully maintained 35mm film camera from the 70s.',
    seller: {
      id: 's1',
      name: 'Alex Rivera',
      rating: 4.8,
      reviewCount: 42,
      isVerified: true,
      avatar: 'https://i.pravatar.cc/150?u=s1'
    },
    postedAt: '2 hours ago'
  },
  {
    id: 'p2',
    title: 'Mid-Century Modern Chair',
    price: 350,
    location: 'Austin, TX',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80',
    description: 'Genuine teak wood chair with original leather upholstery.',
    seller: {
      id: 's2',
      name: 'Sarah Chen',
      rating: 4.9,
      reviewCount: 128,
      isVerified: true,
      avatar: 'https://i.pravatar.cc/150?u=s2'
    },
    postedAt: '5 hours ago'
  },
  {
    id: 'p3',
    title: 'Electric City Bike',
    price: 899,
    location: 'Portland, OR',
    category: 'Vehicles',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80',
    description: 'Fast commuter e-bike with 40 mile range.',
    seller: {
      id: 's3',
      name: 'Mike Johnson',
      rating: 4.5,
      reviewCount: 15,
      isVerified: false,
      avatar: 'https://i.pravatar.cc/150?u=s3'
    },
    postedAt: '1 day ago'
  },
  {
    id: 'p4',
    title: 'Minimalist Ceramic Vase',
    price: 45,
    location: 'San Francisco, CA',
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80',
    description: 'Hand-crafted ceramic vase for your modern living room.',
    seller: {
      id: 's4',
      name: 'Elena Gilbert',
      rating: 5.0,
      reviewCount: 8,
      isVerified: true,
      avatar: 'https://i.pravatar.cc/150?u=s4'
    },
    postedAt: '3 hours ago'
  },
  {
    id: 'p5',
    title: 'Denim Jacket - XL',
    price: 35,
    location: 'Chicago, IL',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1576871333021-d142416a292d?w=800&q=80',
    description: 'Lightly worn denim jacket. Heavyweight quality.',
    seller: {
      id: 's5',
      name: 'Damian Wayne',
      rating: 4.2,
      reviewCount: 22,
      isVerified: false,
      avatar: 'https://i.pravatar.cc/150?u=s5'
    },
    postedAt: '6 hours ago'
  },
  {
    id: 'p6',
    title: 'Mechanical Keyboard (RGB)',
    price: 75,
    location: 'Seattle, WA',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80',
    description: 'Hot-swappable mechanical keyboard with brown switches.',
    seller: {
      id: 's6',
      name: 'Jason Todd',
      rating: 4.7,
      reviewCount: 56,
      isVerified: true,
      avatar: 'https://i.pravatar.cc/150?u=s6'
    },
    postedAt: '12 hours ago'
  },
  {
    id: 'p7',
    title: 'Indoor Monstera Plant',
    price: 25,
    location: 'Miami, FL',
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80',
    description: 'Large healthy Monstera Deliciosa in a 10-inch pot.',
    seller: {
      id: 's7',
      name: 'Pamela Isley',
      rating: 4.9,
      reviewCount: 94,
      isVerified: true,
      avatar: 'https://i.pravatar.cc/150?u=s7'
    },
    postedAt: '4 hours ago'
  },
  {
    id: 'p8',
    title: 'Smart Watch Series 7',
    price: 210,
    location: 'Denver, CO',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1544117518-30dd5ff7a986?w=800&q=80',
    description: 'Good condition smart watch, comes with charger.',
    seller: {
      id: 's8',
      name: 'Bruce Wayne',
      rating: 5.0,
      reviewCount: 1024,
      isVerified: true,
      avatar: 'https://i.pravatar.cc/150?u=s8'
    },
    postedAt: '8 hours ago'
  }
];
