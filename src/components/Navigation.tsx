import React from 'react';
import { Menu, User, Package, Settings } from 'lucide-react';

export const Navigation = ({ userType }: { userType: 'client' | 'provider' }) => {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">3D Print Hub</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {userType === 'client' ? (
              <>
                <a href="/dashboard" className="flex items-center space-x-1 hover:text-indigo-200">
                  <Package size={20} />
                  <span>My Orders</span>
                </a>
              </>
            ) : (
              <>
                <a href="/orders" className="flex items-center space-x-1 hover:text-indigo-200">
                  <Package size={20} />
                  <span>Orders</span>
                </a>
                <a href="/settings" className="flex items-center space-x-1 hover:text-indigo-200">
                  <Settings size={20} />
                  <span>Settings</span>
                </a>
              </>
            )}
            <a href="/profile" className="flex items-center space-x-1 hover:text-indigo-200">
              <User size={20} />
              <span>Profile</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}