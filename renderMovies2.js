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