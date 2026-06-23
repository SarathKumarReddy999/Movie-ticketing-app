// src/Checkout.jsx
import { Link } from 'react-router-dom';

const Checkout = ({ cartTotal }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Checkout Page</h1>
      <h2 style={{ color: 'green' }}>You are buying {cartTotal} tickets.</h2>
      <button>Proceed to Payment</button>
      
      <br /><br />
      {/* Notice we use <Link> instead of an <a> tag! */}
      <Link to="/">⬅ Back to Movies</Link>
    </div>
  );
};

export default Checkout;