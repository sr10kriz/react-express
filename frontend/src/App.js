import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import EventsList from "./components/EventsList";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import AddEvents from "./components/AddEvents";

function App() {
  const [movies, setMovies] = useState([]);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEventsLoading, setIsEventsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  const fetchEventsHandler = () => {
    setIsEventsLoading(true);
    try {
      setTimeout(async () => {
        const response = await axios.get("http://localhost:3030/view");
        console.log("responseGET--", response);
        const getEventsList = response.data.responseData.map((resData) => {
          return {
            id: resData.id,
            eventName: resData.event_name,
            eventDesc: resData.event_desc,
            eventDate: resData.event_date,
          };
        });
        setEvents(getEventsList);
        setIsEventsLoading(false);
        if (response.data.status === 500 || undefined) {
          throw new Error("Something went wrong");
        }
      }, 1000);
    } catch (err) {
      console.log("Errrrr", err);
    }
  };

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie) {
    console.log(movie);
  }
  async function addEventHandler(event) {
    const response = await axios.post("http://localhost:3030/create", event);
    console.log("responsePOST--", response);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  let eventsList = <p>No events are available at the moment...</p>;

  if (events.length > 0) {
    eventsList = <EventsList events={events} />;
  }

  if (isEventsLoading) {
    eventsList = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
      <section>
        <AddEvents onAddEvent={addEventHandler} />
      </section>
      <section>
        <button onClick={fetchEventsHandler}>Fetch Events</button>
      </section>
      <section>{eventsList}</section>
    </React.Fragment>
  );
}

export default App;
