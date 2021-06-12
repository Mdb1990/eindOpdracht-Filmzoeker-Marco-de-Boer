/** @format */

// Functie voor het toevoegen van de <ul><li><a><img></a></li></ul> - Voor alle ingevoerde arrays (films)
const addMovies = (Movies) => {
  // eerst de lijst weer leeg maken
  const Ulist = document.getElementById("ulMovies");
  Ulist.innerHTML = "";
  // alle elementen en attributen maken voor elke film met forEach loop
  Movies.forEach((movie) => {
    const Ulist = document.getElementById("ulMovies");
    const li = document.createElement("li");
    const movieImage = document.createElement("img");
    const movieLink = document.createElement("a");
    const movieTitle = document.createElement("div");
    const movieYear = document.createElement("div");
    movieTitle.classList.add("movieTitle");
    movieYear.classList.add("movieYear");
    movieLink.setAttribute("href", "https://www.imdb.com/title/" + movie.imdbID);
    movieLink.setAttribute("target", "_blank");
    movieImage.setAttribute("src", movie.Poster);
    movieTitle.appendChild(document.createTextNode(movie.Title));
    movieYear.appendChild(document.createTextNode(movie.Year));
    li.appendChild(movieLink);
    Ulist.appendChild(li);
    li.appendChild(movieTitle);
    li.appendChild(movieYear);
    movieLink.appendChild(movieImage);
  });
};

// Hier worden eerst alle films toegevoegd als standaard.
addMovies(movies);

// Eventlistener voor alle radio buttons en een switch er aan vast voor de verschillende filters.
const inputM = document.getElementsByName("filter_input");
inputM.forEach((radioB) => {
  radioB.addEventListener("change", (event) => {
    switch (event.target.value) {
      case "allefilms":
        addMovies(movies);
        break;
      case "nieuwste":
        filterNieuwsteMovies();
        break;
      case "xmen":
        filterFilms("X-Men");
        break;
      case "princess":
        filterFilms("Princess");
        break;
      case "batman":
        filterFilms("Batman");
        break;
      case "avengers":
        filterFilms("Avengers");
        break;
    }
  });
});

// met deze functie worden de films allemaal gefiltered op de juiste case.!
const filterFilms = (filterMovie) => {
  const filtered = movies.filter((movie) => movie.Title.includes(filterMovie));
  addMovies(filtered);
};

// met deze functie worden de films gefiltered op de nieuwste films >= 2014
const filterNieuwsteMovies = () => {
  const filteredNiewste = movies.filter((movie) => movie.Year >= 2014);
  addMovies(filteredNiewste);
};

// zoekveld aanroepen en in variabele zetten
const searchField = document.getElementById("searchInput");

// functie/eventlistener voor het zoeken en input naar lowercase.
searchField.addEventListener("keyup", (e) => {
  const inputField = e.target.value.toLowerCase();
  const movieSearch = movies.filter((movie) => {
    return movie.Title.toLowerCase().includes(inputField);
  });
  addMovies(movieSearch);
});
