import React, { useState } from 'react';
import { Star, Shield, Heart, Car, Home, Plane, Check } from 'lucide-react';

const InsuranceDetails = () => {
  const [activeTab, setActiveTab] = useState('health');

  const insuranceTypes = {
    health: {
      title: 'Health Insurance',
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      description: 'Comprehensive health insurance provides financial protection against medical expenses, ensuring you receive quality healthcare without financial stress.',
      color: {
        primary: 'blue',
        gradient: 'from-blue-400 to-blue-600'
      },
      benefits: [
        'Covers hospitalization expenses',
        'Cashless treatment at network hospitals',
        'Pre and post-hospitalization coverage',
        'Annual health check-ups',
        'No-claim bonus'
      ],
      plans: [
        {
          name: 'Basic Health Cover',
          coverage: '₹3,00,000',
          premium: '₹299/month',
          features: ['OPD expenses', 'Preventive care']
        },
        {
          name: 'Comprehensive Health Plan',
          coverage: '₹10,00,000',
          premium: '₹599/month',
          features: ['Extensive hospital network', 'Critical illness cover']
        },
        {
          name: 'Family Floater Plan',
          coverage: '₹15,00,000',
          premium: '₹899/month',
          features: ['Covers entire family', 'Maternity benefits']
        }
      ],
      reviews: [
        { name: 'Rajesh Kumar', rating: 4.5, comment: 'Excellent service and quick claim settlement' },
        { name: 'Priya Sharma', rating: 4.7, comment: 'Comprehensive coverage with affordable premium' }
      ]
    },
    motor: {
      title: 'Motor Insurance',
      icon: <Car className="w-12 h-12 text-green-600" />,
      description: 'Protect your vehicle against accidents, theft, and damages with comprehensive motor insurance that provides complete peace of mind.',
      color: {
        primary: 'green',
        gradient: 'from-green-400 to-green-600'
      },
      benefits: [
        'Covers vehicle damage',
        'Third-party liability protection',
        'Roadside assistance',
        'Zero depreciation cover',
        'Personal accident cover'
      ],
      plans: [
        {
          name: 'Basic Motor Cover',
          coverage: '₹5,00,000',
          premium: '₹299/month',
          features: ['Third-party protection', 'Basic damage cover']
        },
        {
          name: 'Comprehensive Motor Plan',
          coverage: '₹10,00,000',
          premium: '₹599/month',
          features: ['Extensive damage cover', 'Roadside assistance']
        },
        {
          name: 'Premium Motor Protection',
          coverage: '₹15,00,000',
          premium: '₹899/month',
          features: ['Zero depreciation', 'Personal accident cover']
        }
      ],
      reviews: [
        { name: 'Amit Patel', rating: 4.6, comment: 'Smooth claim process and great support' },
        { name: 'Neha Gupta', rating: 4.8, comment: 'Comprehensive coverage saved me during an accident' }
      ]
    },
    home: {
      title: 'Home Insurance',
      icon: <Home className="w-12 h-12 text-yellow-600" />,
      description: 'Safeguard your most valuable asset with comprehensive home insurance that protects against natural disasters, theft, and unexpected damages.',
      color: {
        primary: 'yellow',
        gradient: 'from-yellow-400 to-yellow-600'
      },
      benefits: [
        'Coverage for building structure',
        'Protection for household contents',
        'Natural disaster protection',
        'Theft and burglary cover',
        'Personal liability protection'
      ],
      plans: [
        {
          name: 'Basic Home Cover',
          coverage: '₹20,00,000',
          premium: '₹499/year',
          features: ['Building structure protection', 'Basic content cover']
        },
        {
          name: 'Comprehensive Home Plan',
          coverage: '₹50,00,000',
          premium: '₹999/year',
          features: ['Extensive content protection', 'Natural disaster cover']
        },
        {
          name: 'Premium Home Protection',
          coverage: '₹1,00,00,000',
          premium: '₹1,499/year',
          features: ['Full rebuilding cost', 'Personal liability']
        }
      ],
      reviews: [
        { name: 'Sanjay Reddy', rating: 4.7, comment: 'Excellent coverage during flood damage' },
        { name: 'Meera Krishnan', rating: 4.5, comment: 'Comprehensive and affordable protection' }
      ]
    },
    travel: {
      title: 'Travel Insurance',
      icon: <Plane className="w-12 h-12 text-red-600" />,
      description: 'Comprehensive travel insurance that ensures you\'re protected against unexpected events, medical emergencies, and travel disruptions.',
      color: {
        primary: 'red',
        gradient: 'from-red-400 to-red-600'
      },
      benefits: [
        'Medical expense coverage',
        'Trip cancellation protection',
        'Lost baggage assistance',
        'Emergency medical evacuation',
        'Personal accident cover'
      ],
      plans: [
        {
          name: 'Domestic Travel Cover',
          coverage: '₹2,00,000',
          premium: '₹99/trip',
          features: ['Domestic travel protection', 'Basic medical cover']
        },
        {
          name: 'International Travel Plan',
          coverage: '₹10,00,000',
          premium: '₹299/trip',
          features: ['Worldwide coverage', 'Comprehensive medical protection']
        },
        {
          name: 'Premium Global Protection',
          coverage: '₹25,00,000',
          premium: '₹499/trip',
          features: ['Extended medical cover', 'High-value trip protection']
        }
      ],
      reviews: [
        { name: 'Rohit Sharma', rating: 4.6, comment: 'Lifesaver during unexpected medical emergency' },
        { name: 'Anjali Desai', rating: 4.8, comment: 'Comprehensive and hassle-free travel protection' }
      ]
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
        fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
      />
    ));
  };

  const InsurancePage = ({ type }) => {
    const insurance = insuranceTypes[type];

    return (
      <div className={`bg-gradient-to-br ${insurance.color.gradient} min-h-screen p-8`}>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className={`bg-${insurance.color.primary}-100 p-6 flex items-center`}>
            {insurance.icon}
            <div className="ml-4">
              <h1 className={`text-3xl font-bold text-${insurance.color.primary}-900`}>
                {insurance.title} Plans
              </h1>
              <p className={`text-${insurance.color.primary}-700 mt-2`}>
                {insurance.description}
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="p-6">
            <h2 className={`text-2xl font-semibold mb-4 text-${insurance.color.primary}-900`}>
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {insurance.benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`
                    flex items-center 
                    bg-${insurance.color.primary}-50 
                    p-3 
                    rounded-lg
                  `}
                >
                  <Check className={`w-5 h-5 mr-3 text-${insurance.color.primary}-600`} />
                  <span className={`text-${insurance.color.primary}-800`}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Plans Section */}
          <div className="p-6 bg-gray-50">
            <h2 className={`text-2xl font-semibold mb-6 text-${insurance.color.primary}-900`}>
              Available Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {insurance.plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`
                    bg-white 
                    border 
                    border-${insurance.color.primary}-200 
                    rounded-2xl 
                    p-6 
                    shadow-md 
                    hover:shadow-xl 
                    transition-all 
                    duration-300
                  `}
                >
                  <h3 className={`text-xl font-bold mb-4 text-${insurance.color.primary}-900`}>
                    {plan.name}
                  </h3>
                  <div className="space-y-2">
                    <p className={`text-${insurance.color.primary}-700`}>
                      <strong>Coverage:</strong> {plan.coverage}
                    </p>
                    <p className={`text-${insurance.color.primary}-700`}>
                      <strong>Premium:</strong> {plan.premium}
                    </p>
                  </div>
                  <div className="mt-4">
                    <h4 className={`text-lg font-semibold mb-2 text-${insurance.color.primary}-800`}>
                      Features
                    </h4>
                    <ul className={`list-disc pl-5 text-${insurance.color.primary}-700`}>
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button className={`
                    w-full 
                    mt-4 
                    bg-${insurance.color.primary}-600 
                    text-white 
                    py-2 
                    rounded-lg 
                    hover:bg-${insurance.color.primary}-700 
                    transition-colors
                  `}>
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="p-6">
            <h2 className={`text-2xl font-semibold mb-6 text-${insurance.color.primary}-900`}>
              Customer Reviews
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {insurance.reviews.map((review, index) => (
                <div 
                  key={index} 
                  className={`
                    bg-${insurance.color.primary}-50 
                    p-6 
                    rounded-2xl 
                    border 
                    border-${insurance.color.primary}-100
                  `}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className={`text-lg font-semibold text-${insurance.color.primary}-900`}>
                      {review.name}
                    </h3>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className={`text-${insurance.color.primary}-700`}>
                    "{review.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex space-x-4 p-4">
          {Object.keys(insuranceTypes).map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`
                px-4 py-2 rounded-lg flex items-center space-x-2
                ${activeTab === type 
                  ? `bg-${insuranceTypes[type].color.primary}-600 text-white` 
                  : 'bg-gray-200 text-gray-700'}
              `}
            >
              {insuranceTypes[type].icon}
              <span>{insuranceTypes[type].title}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="pt-20">
        <InsurancePage type={activeTab} />
      </div>
    </div>
  );
};

export default InsuranceDetails;