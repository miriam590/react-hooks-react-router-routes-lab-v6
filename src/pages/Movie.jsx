import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`) // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Time: {movie.time} minutes</p>
        <div>
          Genres: {movie.genres.map((genre, index) => (
            <span key={index}>{genre}{index < movie.genres.length - 1 ? ', ' : ''}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
