import MovieCard from './MovieCard';

const App = () => {
  // 1. Our mock database of movies (Array of Objects)
  const movies = [
    {id: 1, title: "The Matrix", price: 15, genre: "Sci-Fi"},
    {id: 2, title: "Inception", price: 12, genre: "Action"},
    {id: 3, title: "Interstellar", price: 18, genre: "Sci-Fi"}
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Currently Playing</h1>
      {/* 2. Using .map() to loop over the array and return a component for each one */}
      {movies.map((movie) => {
        return (
          <MovieCard 
            key={movie.id} // React needs a unique 'key' when looping
            title={movie.title} 
            price={movie.price} 
            genre={movie.genre} 
          />
        );
      })}
    </div>
  );
};

export default App;