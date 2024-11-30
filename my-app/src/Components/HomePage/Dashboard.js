import React, { useEffect, useState } from "react";

const PaymentDashboard = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const response = await fetch("http://localhost:8000/payments");
      const data = await response.json();
      setPayments(data);
    };

    fetchPayments();
  }, []);

  return (
    <div>
      <h1>Payment Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Order ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.paymentId}>
              <td>{payment.paymentId}</td>
              <td>{payment.orderId}</td>
              <td>₹{payment.amount / 100}</td>
              <td>{payment.status}</td>
              <td>{new Date(payment.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentDashboard;
