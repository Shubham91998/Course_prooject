import React, { useState } from 'react';

const PaymentDemo = () => {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setStatus('Processing...');
    setTimeout(() => {
      setStatus('Payment successful! (Demo)');
    }, 1500);
  };

  return (
    <div className="payment-demo">
      <h2>Demo Payment Integration</h2>
      <form onSubmit={handlePayment}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Pay Now</button>
      </form>
      {status && <div className="status">{status}</div>}
    </div>
  );
};

export default PaymentDemo;
