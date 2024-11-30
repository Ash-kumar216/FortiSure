import React, { useState } from "react";

const Claim = () => {
  const [activeCard, setActiveCard] = useState(null);

  const insurancePlans = [
    {
      category: "Health Insurance",
      name: "Comprehensive Health Insurance",
      coverage: "₹10,00,000",
      premium: "₹499/month",
      benefits: [
        "Cashless hospitalization",
        "Free annual health check-ups",
        "No-claim bonus",
        "Wide hospital network",
      ],
      claims: {
        process: "Easy online claim filing with 24x7 support",
        time: "Claim settled within 7 working days",
      },
    },
    {
      category: "Motor Insurance",
      name: "Comprehensive Motor Insurance",
      coverage: "₹5,00,000",
      premium: "₹299/month",
      benefits: [
        "Zero depreciation cover",
        "Roadside assistance",
        "Cashless repairs",
        "Quick claim process",
      ],
      claims: {
        process: "Paperless claim filing with instant updates",
        time: "Claim settled within 3 working days",
      },
    },
    {
      category: "Home Insurance",
      name: "Comprehensive Home Insurance",
      coverage: "₹50,00,000",
      premium: "₹999/year",
      benefits: [
        "Coverage for natural disasters",
        "Protection for valuables",
        "Fire and theft coverage",
        "Worldwide liability protection",
      ],
      claims: {
        process: "Hassle-free online claim submission",
        time: "Claim settled within 10 working days",
      },
    },
    {
      category: "Travel Insurance",
      name: "Comprehensive Travel Insurance",
      coverage: "₹1,00,000",
      premium: "₹99/trip",
      benefits: [
        "Emergency medical expenses",
        "Trip cancellation coverage",
        "Lost baggage assistance",
        "Flight delay compensation",
      ],
      claims: {
        process: "24x7 global support for claims",
        time: "Claim settled within 5 working days",
      },
    },
  ];

  return (
    <div className="bg-indigo-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-indigo-900 text-center mb-12 tracking-tight">
          Insurance Claim Plans
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insurancePlans.map((plan, index) => (
            <div 
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className={`
                transition-all duration-300 
                bg-white 
                rounded-2xl 
                p-6 
                shadow-lg 
                hover:shadow-2xl
                transform 
                ${activeCard === index ? 'scale-105' : 'scale-100'}
                border-2 border-transparent
                hover:border-indigo-500
                relative
                overflow-hidden
              `}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500"></div>
              
              <h2 className="text-2xl font-bold mb-4 text-indigo-900 tracking-tight">
                {plan.name}
              </h2>
              
              <div className="space-y-3 mb-6 text-gray-700">
                <p>
                  <span className="font-semibold text-indigo-700">Category:</span> {plan.category}
                </p>
                <p>
                  <span className="font-semibold text-indigo-700">Coverage:</span> {plan.coverage}
                </p>
                <p>
                  <span className="font-semibold text-indigo-700">Premium:</span> {plan.premium}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-indigo-900">Key Benefits:</h3>
                <ul className="space-y-1 pl-4 list-disc text-gray-700">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm">{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-indigo-900">Claim Information:</h3>
                <p className="text-sm mb-1 text-gray-700">
                  <span className="font-semibold text-indigo-700">Process:</span> {plan.claims.process}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-indigo-700">Time:</span> {plan.claims.time}
                </p>
              </div>

              <div className="flex space-x-4">
                <button className="
                  w-full 
                  py-3 
                  bg-indigo-500 
                  text-white 
                  rounded-lg 
                  font-semibold
                  hover:bg-indigo-600
                  transition duration-300
                  shadow-md
                  hover:shadow-lg
                ">
                  Buy {plan.category}
                </button>
                <button className="
                  w-full 
                  py-3 
                  bg-green-500 
                  text-white 
                  rounded-lg 
                  font-semibold
                  hover:bg-green-600
                  transition duration-300
                  shadow-md
                  hover:shadow-lg
                ">
                  Claim {plan.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Claim;
