import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ModelGenerator } from './components/ModelGenerator';
import { PrintingHubs } from './components/PrintingHubs';
import { OrderForm } from './components/OrderForm';
import { ProviderDashboard } from './components/ProviderDashboard';

function App() {
  const [userType, setUserType] = useState<'client' | 'provider'>('client');
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation userType={userType} />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* User Type Switcher (for demo purposes) */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={() => setUserType(userType === 'client' ? 'provider' : 'client')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Switch to {userType === 'client' ? 'Provider' : 'Client'} View
          </button>
        </div>

        {userType === 'client' ? (
          <div className="space-y-8">
            <ModelGenerator />
            <PrintingHubs />
            <OrderForm />
          </div>
        ) : (
          <ProviderDashboard />
        )}
      </main>
    </div>
  );
}

export default App;