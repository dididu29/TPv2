import { createDiv } from "./assets/js/components/div";
import { createImage } from "./assets/js/components/img";
import { createTitle } from "./assets/js/components/title";
import { createButton } from "./assets/js/components/button";
import { headerPage } from "./assets/js/pages/headerPage";
import "./assets/css/style.css";

const movieLists = createDiv("image-film-container");
const titleH2 = createTitle(2, "Movie lists");
document.body.appendChild(titleH2);

let page = 1;

const next = () => {
  page++;
  movieApi();
};

const prev = () => {
  if (page > 1) {
    page--;
    movieApi();
  }
};

const divButton = createDiv("buttonPrevNext");

const buttonPrev = createButton("Prev");
buttonPrev.classList.add("button", "button-prev");
divButton.appendChild(buttonPrev);
buttonPrev.addEventListener("click", function () {
  prev();
});

const buttonNext = createButton("Next");
buttonNext.classList.add("button", "button-next");
divButton.appendChild(buttonNext);
buttonNext.addEventListener("click", function () {
  next();
});

document.body.appendChild(divButton);

const movieApi = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzc5NWFlMTk3Y2YyMzExN2U2OGU4MzNjZGZlY2E0OCIsInN1YiI6IjY1MzhkODMyN2ZjYWIzMDE0ZTM2ZTkyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8gS-iNxMzqgSUtn_9Q9XxAcrUqR1ydbxr4ZrbumwX7M",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      movieLists.innerHTML = "";
      const movies = data.results;

      movies.map((movie) => {
        const { poster_path, title, overview, vote_average } = movie;
        const newMovie = { ...movie };
        const url = poster_path;
        const imageUrl = `https://image.tmdb.org/t/p/w200${url}`;
        const imageAlt = title;

        const movieDiv = createDiv("movie");

        const movieImage = createImage(imageUrl, imageAlt);
        movieDiv.appendChild(movieImage);

        const movieInfo = createDiv("movie-info");

        const movieTitle = createDiv("movie-title");
        movieTitle.textContent = title;
        movieInfo.appendChild(movieTitle);

        const movieSummary = createDiv("movie-summary");
        movieSummary.textContent = overview;
        movieInfo.appendChild(movieSummary);

        const movieRating = createDiv("movie-rating");
        movieRating.textContent = `Note : ${vote_average}`;
        movieInfo.appendChild(movieRating);

        movieDiv.appendChild(movieInfo);

        movieLists.appendChild(movieDiv);
      });

      document.body.appendChild(movieLists);
    })
    .catch((err) => console.error(err));
};

movieApi();
headerPage();
