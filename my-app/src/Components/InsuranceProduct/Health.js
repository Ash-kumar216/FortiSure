import React, { useState } from 'react';
import PaymentPage from './PaymentPage';
import { 
  Heart, 
  Plus, 
  Stethoscope, 
  CheckCircle, 
  Star, 
  PlusCircle, 
  ShieldCheck, 
  Users 
} from 'lucide-react';
 // Ensure correct import path

const HealthInsurancePage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlanAmount, setSelectedPlanAmount] = useState(0);

  const healthInsurancePlans = [
    {
      name: 'Individual Basic',
      price: '$49.99/month',
      coverage: '$50,000',
      benefits: [
        'Hospitalization Expenses',
        'Outpatient Treatment',
        'Preventive Health Checkups',
        'Emergency Medical Services'
      ],
      description: 'Essential health coverage for individuals seeking comprehensive basic protection.',
      idealFor: ['Young Professionals', 'Solo Individuals']
    },
    {
      name: 'Family Protect',
      price: '$129.99/month',
      coverage: '$200,000',
      benefits: [
        'All Individual Basic Benefits',
        'Family Coverage',
        'Maternity Expenses',
        'Children\'s Vaccination',
        'Pre and Post Hospitalization',
        'Critical Illness Cover'
      ],
      description: 'Comprehensive health protection designed for families with extensive medical needs.',
      idealFor: ['Family of 4', 'Young Families']
    },
    {
      name: 'Premium Wellness',
      price: '$249.99/month',
      coverage: '$500,000',
      benefits: [
        'All Family Protect Benefits',
        'International Medical Coverage',
        'Advanced Diagnostic Tests',
        'Mental Health Support',
        'Alternative Medicine Coverage',
        'Personalized Wellness Program',
        'No-Claim Bonus'
      ],
      description: 'Ultimate health and wellness package with global coverage and holistic care.',
      idealFor: ['High-Income Families', 'Comprehensive Health Seekers']
    }
  ];

  const userFeedbacks = [
    {
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Incredible support during my mother\'s critical illness. The claims process was seamless!',
      age: 35
    },
    {
      name: 'Rajesh Kumar',
      rating: 4,
      comment: 'Comprehensive coverage that gives my family peace of mind. Highly recommended!',
      age: 42
    },
    {
      name: 'Lisa Wong',
      rating: 5,
      comment: 'The wellness program is a game-changer. Proactive healthcare at its best!',
      age: 29
    }
  ];

  const comparisonData = [
    {
      feature: 'Coverage Limit',
      ourCompany: '✓ Up to $500,000',
      competitor1: '✓ Up to $250,000',
      competitor2: '✓ Up to $100,000'
    },
    {
      feature: 'Pre-existing Conditions',
      ourCompany: '✓ Covered After Waiting Period',
      competitor1: '✓ Limited Coverage',
      competitor2: '✗ Not Covered'
    },
    {
      feature: 'Wellness Programs',
      ourCompany: '✓ Comprehensive',
      competitor1: '✓ Basic',
      competitor2: '✗ Not Offered'
    }
  ];

  const specialFeatures = [
    {
      icon: Stethoscope,
      title: 'Comprehensive Medical Network',
      description: '1000+ Verified Healthcare Providers',
      color: 'text-blue-600'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Paperwork Claims',
      description: 'Digital Processing & Quick Settlements',
      color: 'text-green-600'
    },
    {
      icon: PlusCircle,
      title: 'Holistic Wellness Approach',
      description: 'Preventive Care & Lifestyle Management',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 flex justify-center items-center">
        <Heart className="mr-4 text-red-600" size={48} />
        Health Insurance Plans
      </h1>
      
      {/* Show Payment if selected */}
      {showPayment ? (
        <PaymentPage
          amount={selectedPlanAmount}
          onSuccess={(paymentIntent) => {
            alert(`Payment Successful! Transaction ID: ${paymentIntent.id}`);
            setShowPayment(false); // Reset and show plans
          }}
        />
      ) : (
        <>
          {/* Plans Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {healthInsurancePlans.map((plan) => (
              <div 
                key={plan.name} 
                className={`
                  border rounded-lg p-6 transition-all duration-300 
                  ${selectedPlan === plan.name 
                    ? 'border-red-500 shadow-xl' 
                    : 'border-gray-200 hover:shadow-md'
                  }
                `}
                onClick={() => setSelectedPlan(plan.name)}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{plan.name}</h2>
                  <span className="text-xl font-semibold text-red-600">{plan.price}</span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center text-gray-700">
                    <Plus className="mr-3 text-red-500" size={20} />
                    <span className="font-semibold">Coverage: {plan.coverage}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-4">
                  <div className="flex items-center text-gray-700">
                    <Users className="mr-3 text-blue-500" size={20} />
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
                  className="w-full mt-6 py-3 bg-red-600 text-white 
                  rounded-md hover:bg-red-700 transition-colors
                  focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => {
                    setSelectedPlanAmount(parseFloat(plan.price.slice(1))); // Extract numeric price
                    setShowPayment(true);
                  }}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Special Features Section */}
      <div className="bg-gray-50 rounded-lg py-12 px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Why Our Health Insurance?
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

      {/* User Feedback Section */}
      <div className="bg-white rounded-lg shadow-md py-12 px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          What Our Customers Are Saying
        </h2>
        <div className="space-y-6">
          {userFeedbacks.map((feedback) => (
            <div key={feedback.name} className="border-b pb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h3 className="font-semibold text-lg">{feedback.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    {Array.from({ length: feedback.rating }, (_, index) => (
                      <Star key={index} size={16} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{feedback.comment}</p>
              <span className="text-sm text-gray-500">{feedback.age} years old</span>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance Comparison Section */}
      <div className="bg-gray-100 rounded-lg py-12 px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Compare Our Plans
        </h2>
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gray-600">Feature</th>
              <th className="px-4 py-2 text-gray-600">Our Company</th>
              <th className="px-4 py-2 text-gray-600">Competitor 1</th>
              <th className="px-4 py-2 text-gray-600">Competitor 2</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((data) => (
              <tr key={data.feature}>
                <td className="border px-4 py-2">{data.feature}</td>
                <td className="border px-4 py-2">{data.ourCompany}</td>
                <td className="border px-4 py-2">{data.competitor1}</td>
                <td className="border px-4 py-2">{data.competitor2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthInsurancePage;
