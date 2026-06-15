const MovieCard = ({ title, price, genre }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
            <h2>{title}</h2>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Price:</strong> ${price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default MovieCard;