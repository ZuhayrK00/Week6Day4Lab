const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = (films) => {
  const titles = [];

  films.forEach((film) => {
    titles.push(film.title);
  });

  return titles;
};
Cinema.prototype.getFilmByTitle = function (title) {
  const result = this.films.filter((film) => {
    return film.title === title;
  });
  return result[0];
};

Cinema.prototype.filterByGenres = function (genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre;
  });
  return result;
};

Cinema.prototype.totalRuntime = function (films) {
  const total = films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return total;
};

Cinema.prototype.filmPlayingFromYear = function (year) {
  let result = this.films.filter((film) => {
    return film.year === year;
  });
  if (result.length >= 1) {
    return true;
  } else {
    return false;
  }
};
module.exports = Cinema;
