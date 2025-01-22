import React, { useState, useEffect } from 'react';
import { Package, Clock, Printer } from 'lucide-react';

export const OrderForm = () => {
  const [orderDetails, setOrderDetails] = useState({
    modelName: '',
    material: '',
    quality: 'standard',
    quantity: 1,
    size: 'medium', // small, medium, large
    notes: '',
  });

  const [pricing, setPricing] = useState({
    printTime: 0,
    materialCost: 0,
    serviceFee: 0,
    total: 0
  });

  // Calculate pricing based on parameters
  useEffect(() => {
    const calculatePricing = () => {
      // Base prices
      const baseMaterialCosts = {
        pla: 20,
        abs: 25,
        petg: 30,
        resin: 45
      };

      const qualityMultipliers = {
        draft: 0.8,
        standard: 1,
        high: 1.5
      };

      const sizeMultipliers = {
        small: 0.7,
        medium: 1,
        large: 1.8
      };

      if (!orderDetails.material) return;

      const baseMaterialCost = baseMaterialCosts[orderDetails.material as keyof typeof baseMaterialCosts];
      const qualityMultiplier = qualityMultipliers[orderDetails.quality as keyof typeof qualityMultipliers];
      const sizeMultiplier = sizeMultipliers[orderDetails.size as keyof typeof sizeMultipliers];

      const materialCost = baseMaterialCost * qualityMultiplier * sizeMultiplier * orderDetails.quantity;
      const printTime = 2 * qualityMultiplier * sizeMultiplier * orderDetails.quantity; // hours
      const serviceFee = materialCost * 0.15; // 15% service fee

      setPricing({
        printTime,
        materialCost,
        serviceFee,
        total: materialCost + serviceFee
      });
    };

    calculatePricing();
  }, [orderDetails]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">Order Details</h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Model Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={orderDetails.modelName}
              onChange={(e) => setOrderDetails({ ...orderDetails, modelName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Material
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={orderDetails.material}
              onChange={(e) => setOrderDetails({ ...orderDetails, material: e.target.value })}
            >
              <option value="">Select material</option>
              <option value="pla">PLA - Standard Durability</option>
              <option value="abs">ABS - High Durability</option>
              <option value="petg">PETG - Weather Resistant</option>
              <option value="resin">Resin - High Detail</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Print Quality
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {['draft', 'standard', 'high'].map((quality) => (
              <button
                key={quality}
                type="button"
                className={`px-4 py-3 text-sm font-medium rounded-md flex flex-col items-center ${
                  orderDetails.quality === quality
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
                onClick={() => setOrderDetails({ ...orderDetails, quality })}
              >
                <span>{quality.charAt(0).toUpperCase() + quality.slice(1)}</span>
                <span className="text-xs mt-1">
                  {quality === 'draft' && '0.3mm layers'}
                  {quality === 'standard' && '0.2mm layers'}
                  {quality === 'high' && '0.1mm layers'}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Model Size
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {['small', 'medium', 'large'].map((size) => (
              <button
                key={size}
                type="button"
                className={`px-4 py-3 text-sm font-medium rounded-md ${
                  orderDetails.size === size
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
                onClick={() => setOrderDetails({ ...orderDetails, size })}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={orderDetails.quantity}
              onChange={(e) => setOrderDetails({ ...orderDetails, quantity: parseInt(e.target.value) || 1 })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Additional Notes
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={4}
            value={orderDetails.notes}
            onChange={(e) => setOrderDetails({ ...orderDetails, notes: e.target.value })}
            placeholder="Any specific requirements or details about your order..."
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400 mr-2" />
                <span>Estimated Print Time</span>
              </div>
              <span>~{pricing.printTime.toFixed(1)} hours</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Package className="h-5 w-5 text-gray-400 mr-2" />
                <span>Material Cost</span>
              </div>
              <span>${pricing.materialCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Service Fee</span>
              <span>${pricing.serviceFee.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${pricing.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center space-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Package size={20} />
          <span>Place Order</span>
        </button>
      </form>
    </div>
  );
}