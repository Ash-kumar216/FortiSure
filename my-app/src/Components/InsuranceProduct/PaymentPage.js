import React, { useState } from "react";

const PaymentPage = ({ amount, onSuccess }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Step 1: Create an order by calling your backend
      const response = await fetch("http://localhost:8000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const order = await response.json();

      if (!order.id) {
        throw new Error("Failed to create order. Please try again.");
      }

      // Step 2: Initialize Razorpay payment
      const options = {
        key: "your_key_id", // Replace with your Razorpay Key ID
        amount: order.amount, // Amount in paisa
        currency: "INR",
        name: "Insurance Payment",
        description: "Purchase your insurance plan securely",
        order_id: order.id, // Razorpay order ID from backend
        handler: async (response) => {
          // Step 3: Verify payment on backend
          try {
            const verifyResponse = await fetch("http://localhost:8000/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                amount: amount,
              }),
            });

            const result = await verifyResponse.json();

            if (result.message === "Payment verified and saved successfully") {
              onSuccess(result);
            } else {
              setErrorMessage("Payment verification failed. Please contact support.");
            }
          } catch (err) {
            console.error("Verification error:", err);
            setErrorMessage("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#528FF0",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Secure Payment</h2>
          <p className="text-gray-600 mt-2">Proceed to pay using Razorpay</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Amount to pay</span>
            <span className="text-2xl font-bold text-gray-800">₹{amount}</span>
          </div>
          <div className="h-px bg-gray-200" />
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium 
                   hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                   focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors duration-200"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin h-5 w-5 text-white" />
              Processing...
            </span>
          ) : (
            `Pay ₹${amount}`
          )}
        </button>

        {errorMessage && (
          <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-600">{errorMessage}</p>
          </div>
        )}

        <div className="mt-8 flex items-center justify-center space-x-4">
          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm text-gray-500">Payments are secure and encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
