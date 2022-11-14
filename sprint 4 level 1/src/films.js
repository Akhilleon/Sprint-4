const movies = require("./data");

  // Exercise 1: Get the movies of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movies => movies.director);
  //console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter(movies => movies.director == director)
  //console.log("EXERCISE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let directorsArr = movies.filter(movies => movies.director == director);
  //console.log("EXERCISE 3 ->", result);
  return moviesAverage(directorsArr);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let result = movies.map(movies => movies.title).sort().slice(0, 20);
  //console.log("EXERCISE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let result = movies.map(movies => movies).sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  //console.log("EXERCISE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let genreArr = movies.filter(movies => movies.genre == genre);
  //console.log("EXERCISE 6 ->", genreArr);
  return moviesAverage(genreArr);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let movieArr = movies.map((x) => {return {...x}})
  movieArr = movieArr.map((movie) => {
    let resultMovie = movie;
    let splitArr = movie.duration.split(" ");
    let duration = splitArr.map((y) => {
      if (y.includes("h")) {
       return y.replace("h", "") * 60;
      } else {
       return y.replace("min", "") * 1;
      }
    })
    
    // let hoursToNum = splitArr[0]?.replace("h", "") * 60;
    
    // let minutesToNum = splitArr[1]?.replace("min", "") * 1;

  //   if (splitArr[1]) {
  //   resultMovie.duration = hoursToNum + minutesToNum;
  //   } else {
  //     resultMovie.duration = hoursToNum;
  //   }
    resultMovie.duration = duration.reduce((partialSum, a) => partialSum + a, 0);
  console.log("EXERCISE 7 ->", resultMovie);
    return resultMovie;
  }
  );
  //console.log(movies);
  return movieArr;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}

function moviesAverage(movies) {
   let totalScores = movies.filter(movies => movies.score != "").map(movies => movies.score);
   let avgScore = totalScores.reduce((a, b) => a + b, 0) / totalScores.length;
   let result = Math.round(avgScore * 100) / 100;
   //console.log(result)
    return result;  
  }

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
