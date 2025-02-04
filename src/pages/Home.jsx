import { useEffect, useState } from "react";

function Home() {
  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        <MovieCard title="Doctor Strange" />
        <MovieCard title="Inception" />
        <MovieCard title="Interstellar" />
      </main>
    </>
  );
};

export default Home;
