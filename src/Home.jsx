// src/Home.jsx
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const Home = ({ movies, isLoading, totalCartItems, onAddToCart }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Currently Playing</h1>
      <h2 style={{ color: 'green' }}>🛒 Total Cart Items: {totalCartItems}</h2>
      
      {/* A link to navigate to the checkout page */}
      <Link to="/checkout">
        <button style={{ marginBottom: '20px', background: 'blue', color: 'white' }}>
          Go to Checkout ➡
        </button>
      </Link>

      {isLoading ? (
        <h3>Loading movies from the server... Please wait.</h3>
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id}
              title={movie.title} 
              price={movie.price} 
              genre={movie.genre}
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;