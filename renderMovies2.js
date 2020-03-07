/*
function renderMovie(movie) {
    return `
    <div class='content' data-id='${movie.id}'>
        <h1>${movie.year}</h1>
        <span>${movie.IMDB}</span>
        <b>${movie.tomato}</b> 
    </div>
    `
}


function movies(){
    var movieContent = document.getElementById('content');
var movie = [{
    id: "The Dark Knight",
    year: 2008,
    IMDB: "IMDB 9/10",
    tomato: "Rotten Tomatoes 94%"
}]

movieContent.innerHTML = renderMovie(movie); 

}
*/

/*
var movieContainer = document.getElementById('content');
var movie = {
    id: "The Dark Knight",
    year: 2008,
    IMDB: "IMDB 9/10",
    tomato: "Rotten Tomatoes 94%"
};

movieContainer.innerHTML = renderMovie(movie); 
*/

/*
function renderMovies(movies) {
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(movies)}</code>
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);
}
*/

function renderMovies(movies) {
    var movie = [];
    for (var i = 0; i < movies.length; i++) {
        var poster = `
        <div class="text-center mt-5">
            <div>${movies[i]}</div>
            <div>${movies[i].title}</div>
            <div>${movies[i].year}</div>
            <div>${movies[i].imdbID}</div>
            <div>${movies[i].poster}</div>
            <div>${movies[i].imdbRating}</div>
            <div>${movies[i].rottenTomatoesRating}</div>
        </div>
    `
    movie.push(poster); 

    }

    return movie.join(""); 
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}