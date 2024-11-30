import React, { useState } from 'react';
import { Home, Shield, CheckCircle, Star, FileText, Umbrella } from 'lucide-react';

const HomeInsurancePage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const homeInsurancePlans = [
    {
      name: 'Basic Protection',
      price: '$39.99/month',
      benefits: [
        'Fire Damage Coverage',
        'Basic Theft Protection',
        'Structural Damage Protection',
        'Limited Personal Property Cover'
      ],
      description: 'Essential protection for your home with fundamental coverage.',
      homeTypes: ['Apartments', 'Small Homes', 'Condos']
    },
    {
      name: 'Comprehensive Shield',
      price: '$89.99/month',
      benefits: [
        'All Basic Protection Benefits',
        'Natural Disaster Coverage',
        'Extensive Personal Property Protection',
        'Liability Insurance',
        'Additional Living Expenses',
        'Emergency Home Repairs'
      ],
      description: 'Comprehensive coverage for complete home security.',
      homeTypes: ['Family Homes', 'Suburban Houses', 'Townhouses']
    },
    {
      name: 'Premium Guardian',
      price: '$149.99/month',
      benefits: [
        'All Comprehensive Shield Benefits',
        'High-Value Item Protection',
        'Flood and Earthquake Coverage',
        'Full Replacement Cost',
        'Identity Theft Protection',
        'Smart Home Security Upgrade',
        'Worldwide Personal Liability'
      ],
      description: 'Ultimate home protection with maximum coverage and premium services.',
      homeTypes: ['Luxury Homes', 'Large Estates', 'High-End Properties']
    }
  ];

  const userFeedbacks = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Incredible support during my home renovation claim. Absolutely reliable!',
      homeType: 'Suburban Home'
    },
    {
      name: 'Michael Chen',
      rating: 4,
      comment: 'Comprehensive coverage gave me peace of mind during unexpected repairs.',
      homeType: 'Apartment'
    },
    {
      name: 'Olivia Martinez',
      rating: 5,
      comment: 'Quick claim process and outstanding customer service.',
      homeType: 'Townhouse'
    }
  ];

  const comparisonData = [
    {
      feature: 'Claim Settlement',
      ourCompany: '✓ 24-Hour Quick Settlement',
      competitor1: '✓ 48-72 Hour Settlement',
      competitor2: '✗ Slow Process'
    },
    {
      feature: 'Coverage Scope',
      ourCompany: '✓ Comprehensive Worldwide',
      competitor1: '✓ Limited National',
      competitor2: '✗ Local Only'
    },
    {
      feature: 'Property Protection',
      ourCompany: '✓ Full Replacement Cost',
      competitor1: '✓ Partial Replacement',
      competitor2: '✓ Depreciated Value'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 flex justify-center items-center">
        <Home className="mr-4 text-blue-600" size={48} />
        Home Insurance Plans
      </h1>
      
      {/* Plans Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {homeInsurancePlans.map((plan) => (
          <div 
            key={plan.name} 
            className={`
              border rounded-lg p-6 transition-all duration-300 
              ${selectedPlan === plan.name 
                ? 'border-blue-500 shadow-xl' 
                : 'border-gray-200 hover:shadow-md'
              }
            `}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{plan.name}</h2>
              <span className="text-xl font-semibold text-blue-600">{plan.price}</span>
            </div>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="mb-4">
              <div className="flex items-center text-gray-700">
                <Shield className="mr-3 text-blue-500" size={20} />
                <span className="font-semibold">Home Types:</span>
              </div>
              <div className="pl-6 text-gray-600">
                {plan.homeTypes.map((type) => (
                  <div key={type} className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" size={16} />
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {plan.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center text-gray-700">
                  <CheckCircle className="mr-3 text-green-500" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <button 
              className="
                w-full mt-6 py-3 bg-blue-600 text-white 
                rounded-md hover:bg-blue-700 transition-colors
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>

      {/* Additional Features Section */}
      <div className="bg-gray-50 rounded-lg py-12 px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Why Choose Our Home Insurance?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Umbrella className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-bold mb-3">Comprehensive Protection</h3>
            <p className="text-gray-600">Wide-ranging coverage for diverse home types</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FileText className="mx-auto mb-4 text-green-600" size={48} />
            <h3 className="text-xl font-bold mb-3">Instant Documentation</h3>
            <p className="text-gray-600">Paperless claims and quick processing</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Shield className="mx-auto mb-4 text-red-600" size={48} />
            <h3 className="text-xl font-bold mb-3">Flexible Coverage</h3>
            <p className="text-gray-600">Customizable plans for unique home needs</p>
          </div>
        </div>
      </div>

      {/* User Feedback Section */}
      <div className="bg-white rounded-lg shadow-md py-12 px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Customer Experiences
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {userFeedbacks.map((feedback) => (
            <div 
              key={feedback.name} 
              className="bg-gray-50 rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(feedback.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="text-yellow-400" 
                    fill="currentColor" 
                    size={24} 
                  />
                ))}
              </div>
              <p className="italic text-gray-700 mb-4">
                "{feedback.comment}"
              </p>
              <p className="font-semibold text-gray-800">
                - {feedback.name} ({feedback.homeType} Owner)
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-gray-100 border-b">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Comparative Advantages
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Features
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Our Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Competitor 1
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Competitor 2
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {comparisonData.map((row) => (
                <tr key={row.feature}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-600">
                    {row.ourCompany}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {row.competitor1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {row.competitor2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeInsurancePage;