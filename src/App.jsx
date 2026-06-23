// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Router tools
import Home from './Home';
import Checkout from './Checkout';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchMoviesFromDatabase = async () => {
  await delay(1000); 
  return [
    {id: 1, title: "The Matrix", price: 15, genre: "Sci-Fi"},
    {id: 2, title: "Inception", price: 12, genre: "Action"},
    {id: 3, title: "Interstellar", price: 18, genre: "Sci-Fi"}
  ];
};

const App = () => {
  // STATE LIVES HERE: So it survives when we switch pages!
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [movies, setMovies] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMoviesFromDatabase();
      setMovies(data);
      setIsLoading(false);
    };
    loadMovies();
  }, []);

  const handleGlobalAddToCart = () => {
    setTotalCartItems(totalCartItems + 1);
  };

  // THE ROUTER
  return (
    <BrowserRouter>
      {/* Anything OUTSIDE the <Routes> tag will show on EVERY page 
        (Perfect for a constant top Navigation Bar!)
      */}
      <nav style={{ background: '#333', padding: '10px', color: 'white' }}>
        <strong>🎬 Cinema App</strong>
      </nav>

      {/* The Routes determine which component swaps into the middle of the screen */}
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              movies={movies} 
              isLoading={isLoading} 
              totalCartItems={totalCartItems} 
              onAddToCart={handleGlobalAddToCart} 
            />
          } 
        />
        <Route 
          path="/checkout" 
          element={<Checkout cartTotal={totalCartItems} />} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;