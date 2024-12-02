import React from 'react';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="text-sm font-medium hover:text-gray-600">New Arrivals</a>
              <a href="#" className="text-sm font-medium hover:text-gray-600">Men</a>
              <a href="#" className="text-sm font-medium hover:text-gray-600">Women</a>
              <a href="#" className="text-sm font-medium hover:text-gray-600">Collections</a>
            </div>
          </div>
          
          <div className="text-xl font-bold">ESSENCE</div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}