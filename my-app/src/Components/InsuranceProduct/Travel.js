import React, { useState } from 'react';
import { 
  Plane, 
  Globe, 
  Map, 
  Shield, 
  CheckCircle, 
  Star, 
  Umbrella, 
  Cloud, 
  Compass 
} from 'lucide-react';

const TravelInsurancePage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const travelInsurancePlans = [
    {
      name: 'Single Trip',
      price: '$29.99/trip',
      coverage: '$50,000',
      benefits: [
        'Medical Emergency Coverage',
        'Trip Cancellation Protection',
        'Lost Luggage Compensation',
        'Emergency Medical Evacuation',
        'Personal Accident Cover'
      ],
      description: 'Perfect for occasional travelers seeking comprehensive protection for a single journey.',
      idealFor: ['Solo Travelers', 'Weekend Getaways']
    },
    {
      name: 'Annual Multi-Trip',
      price: '$149.99/year',
      coverage: '$250,000',
      benefits: [
        'All Single Trip Benefits',
        'Multiple Trip Coverage',
        'Extended Medical Protection',
        'Emergency Cash Assistance',
        'Flight Delay Compensation',
        'Worldwide Hospital Network',
        'Adventure Sports Coverage'
      ],
      description: 'Comprehensive protection for frequent travelers with unlimited trips in a year.',
      idealFor: ['Business Travelers', 'Frequent Explorers']
    },
    {
      name: 'Premium Global',
      price: '$299.99/year',
      coverage: '$500,000',
      benefits: [
        'All Annual Multi-Trip Benefits',
        'High-Value Coverage',
        'Cancel For Any Reason',
        'Comprehensive COVID-19 Protection',
        'Luxury Travel Assistance',
        'Family Coverage',
        'Kidnap & Ransom Protection',
        'Concierge Services'
      ],
      description: 'Ultimate global protection with premium benefits for the most discerning travelers.',
      idealFor: ['Luxury Travelers', 'International Explorers']
    }
  ];

  const userFeedbacks = [
    {
      name: 'Emma Johnson',
      rating: 5,
      comment: 'Lifesaver during my medical emergency in Europe. Quick response and full support!',
      destination: 'France'
    },
    {
      name: 'Michael Chen',
      rating: 4,
      comment: 'Comprehensive coverage that gave me peace of mind during my business trips.',
      destination: 'Multiple Countries'
    },
    {
      name: 'Sarah Rodriguez',
      rating: 5,
      comment: 'The COVID-19 coverage was incredibly helpful during uncertain travel times.',
      destination: 'Southeast Asia'
    }
  ];

  const comparisonData = [
    {
      feature: 'Medical Coverage',
      ourCompany: '✓ Up to $500,000',
      competitor1: '✓ Up to $250,000',
      competitor2: '✓ Up to $100,000'
    },
    {
      feature: 'COVID-19 Protection',
      ourCompany: '✓ Comprehensive',
      competitor1: '✓ Limited',
      competitor2: '✗ Not Covered'
    },
    {
      feature: 'Trip Cancellation',
      ourCompany: '✓ Cancel for Any Reason',
      competitor1: '✓ Limited Reasons',
      competitor2: '✗ Basic Coverage'
    }
  ];

  const specialFeatures = [
    {
      icon: Globe,
      title: 'Global Coverage',
      description: '190+ Countries Supported',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: '24/7 Emergency Support',
      description: 'Instant Assistance Worldwide',
      color: 'text-green-600'
    },
    {
      icon: Compass,
      title: 'Flexible Claims',
      description: 'Easy Digital Claims Process',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 flex justify-center items-center">
        <Plane className="mr-4 text-blue-600" size={48} />
        Travel Insurance Plans
      </h1>
      
      {/* Plans Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {travelInsurancePlans.map((plan) => (
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
            <div className="mb-4">
              <div className="flex items-center text-gray-700">
                <Shield className="mr-3 text-blue-500" size={20} />
                <span className="font-semibold">Coverage: {plan.coverage}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="mb-4">
              <div className="flex items-center text-gray-700">
                <Compass className="mr-3 text-green-500" size={20} />
                <span className="font-semibold">Ideal For:</span>
              </div>
              <div className="pl-6 text-gray-600">
                {plan.idealFor.map((type) => (
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
              Get Travel Protection
            </button>
          </div>
        ))}
      </div>

      {/* Special Features Section */}
      <div className="bg-gray-50 rounded-lg py-12 px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Why Our Travel Insurance?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {specialFeatures.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <feature.icon 
                className={`mx-auto mb-4 ${feature.color}`} 
                size={48} 
              />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Coverage Section */}
      <div className="bg-white rounded-lg shadow-md py-12 px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Destination Coverage
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Map className="mx-auto mb-4 text-green-600" size={48} />
            <h3 className="text-xl font-bold mb-3">Worldwide Protection</h3>
            <p className="text-gray-600">Coverage in 190+ Countries</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Umbrella className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-bold mb-3">Comprehensive Risks</h3>
            <p className="text-gray-600">Protection Against Multiple Travel Risks</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Cloud className="mx-auto mb-4 text-purple-600" size={48} />
            <h3 className="text-xl font-bold mb-3">COVID-19 Ready</h3>
            <p className="text-gray-600">Advanced Pandemic Coverage</p>
          </div>
        </div>
      </div>

      {/* User Feedback Section */}
      <div className="bg-white rounded-lg shadow-md py-12 px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Traveler Experiences
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
                - {feedback.name}, Traveled to {feedback.destination}
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

export default TravelInsurancePage;