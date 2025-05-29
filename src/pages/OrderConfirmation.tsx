
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Order Details</h2>
          <div className="text-left space-y-2">
            <p><strong>Order Number:</strong> #{orderNumber}</p>
            <p><strong>Order Date:</strong> {new Date().toLocaleDateString()}</p>
            <p><strong>Estimated Delivery:</strong> {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <Mail className="h-8 w-8 text-coral-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Confirmation Email</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sent to your email address</p>
          </div>
          
          <div className="text-center">
            <Package className="h-8 w-8 text-coral-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Order Processing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">We'll prepare your items</p>
          </div>
          
          <div className="text-center">
            <Truck className="h-8 w-8 text-coral-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Fast Delivery</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Free shipping on orders over $50</p>
          </div>
        </div>

        <div className="space-y-4">
          <Button onClick={() => navigate('/')} className="w-full md:w-auto">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
