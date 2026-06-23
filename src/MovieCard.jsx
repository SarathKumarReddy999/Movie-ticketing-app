import { useState } from "react";

const MovieCard = ({ title, price, genre, onAddToCart }) => {

    const [tickets, setTickets] = useState(0);

    const handleAddToCart = () => {
        setTickets(tickets+1);
        onAddToCart();
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
            <h2>{title}</h2>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Price:</strong> ${price}</p>
            {/* 4. Display the current state value */}
            <p style={{ color: 'blue' }}>Tickets in cart: {tickets}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default MovieCard;