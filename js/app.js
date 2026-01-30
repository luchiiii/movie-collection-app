const DATA_PATH = "js/data/movies.json";
const FALLBACK_POSTER = "https://via.placeholder.com/250x350?text=No+Poster";

const movieGrid = document.querySelector(".movie-grid");

const buildMovieCard = (movie) => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.dataset.movieId = String(movie.id ?? "");

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "movie-card-img";

  const image = document.createElement("img");
  image.src = movie.poster || FALLBACK_POSTER;
  image.alt = movie.title ? `${movie.title} poster` : "Movie poster";
  image.loading = "lazy";

  imageWrapper.appendChild(image);

  const content = document.createElement("div");
  content.className = "movie-card-content";

  const title = document.createElement("h3");
  title.className = "movie-title";
  title.textContent = movie.title || "Untitled";

  const metadata = document.createElement("div");
  metadata.className = "movie-metadata";

  const year = document.createElement("span");
  year.className = "movie-year";
  year.textContent = movie.year ? String(movie.year) : "Unknown";

  const genre = document.createElement("span");
  genre.className = "movie-genre";
  genre.textContent = movie.genre ? movie.genre : "Unknown";

  metadata.appendChild(year);
  metadata.appendChild(genre);

  const description = document.createElement("p");
  description.className = "movie-description";
  description.textContent = movie.description || "No description available.";

  content.appendChild(title);
  content.appendChild(metadata);
  content.appendChild(description);

  card.appendChild(imageWrapper);
  card.appendChild(content);

  return card;
};

const renderMovies = (movies) => {
  if (!movieGrid) {
    return;
  }

  movieGrid.innerHTML = "";

  if (!Array.isArray(movies) || movies.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "movie-description";
    emptyState.textContent = "No movies available.";
    movieGrid.appendChild(emptyState);
    return;
  }

  const fragment = document.createDocumentFragment();
  movies.forEach((movie) => {
    fragment.appendChild(buildMovieCard(movie));
  });

  movieGrid.appendChild(fragment);
};

const loadMovies = async () => {
  try {
    const response = await fetch(DATA_PATH);
    if (!response.ok) {
      throw new Error(`Failed to load movies: ${response.status}`);
    }

    const data = await response.json();
    renderMovies(data.movies || []);
  } catch (error) {
    if (movieGrid) {
      movieGrid.innerHTML = "";
      const errorState = document.createElement("p");
      errorState.className = "movie-description";
      errorState.textContent = "Could not load movies. Please try again later.";
      movieGrid.appendChild(errorState);
    }
    console.error(error);
  }
};

document.addEventListener("DOMContentLoaded", loadMovies);
