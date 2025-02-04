import { useEffect, useState } from "react";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/actors") // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <>
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
