import React, { useState } from 'react';
import { Package, Printer, Clock, AlertCircle, Settings, ChevronDown, Filter } from 'lucide-react';

export const ProviderDashboard = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  
  const orders = [
    {
      id: '1',
      customer: 'John Doe',
      model: 'Custom Prototype v1',
      status: 'pending',
      created: '2024-03-10',
      price: 149.99,
      material: 'PLA',
      printer: 'Ultimaker S5'
    },
    {
      id: '2',
      customer: 'Jane Smith',
      model: 'Architectural Model',
      status: 'printing',
      created: '2024-03-09',
      price: 299.99,
      material: 'PETG',
      printer: 'Prusa i3 MK3S+'
    },
    {
      id: '3',
      customer: 'Mike Johnson',
      model: 'Medical Device Prototype',
      status: 'completed',
      created: '2024-03-08',
      price: 199.99,
      material: 'Resin',
      printer: 'Form 3+'
    }
  ];

  const filteredOrders = selectedStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'printing': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Orders</p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-green-600 mt-1">↑ 8% from last week</p>
            </div>
            <Package className="h-8 w-8 text-indigo-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Printer Status</p>
              <p className="text-2xl font-bold">3/4 Active</p>
              <p className="text-sm text-gray-600 mt-1">75% Utilization</p>
            </div>
            <Printer className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Print Time</p>
              <p className="text-2xl font-bold">4.2 hrs</p>
              <p className="text-sm text-blue-600 mt-1">↓ 12% improvement</p>
            </div>
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Recent Orders</h2>
            <div className="flex space-x-4">
              <select
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="printing">Printing</option>
                <option value="completed">Completed</option>
              </select>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter size={16} />
                <span>Filter</span>
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Model
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.model}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${order.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.created}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold mb-4">Printer Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { id: 1, name: 'Ultimaker S5', job: 'Prototype v2', progress: 45, status: 'active' },
            { id: 2, name: 'Prusa i3 MK3S+', job: 'Medical Device', progress: 78, status: 'active' },
            { id: 3, name: 'Form 3+', job: 'Architectural Model', progress: 92, status: 'active' },
            { id: 4, name: 'Ender 3 Pro', job: 'Maintenance', progress: 0, status: 'inactive' }
          ].map((printer) => (
            <div key={printer.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{printer.name}</h3>
                <div className="flex items-center">
                  <div className={`h-2 w-2 rounded-full ${printer.status === 'active' ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                  <span className="text-sm text-gray-500">{printer.status === 'active' ? 'Active' : 'Inactive'}</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Current Job: {printer.job}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${printer.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500">{printer.progress}% Complete</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}