'use strict'

function onInit() {
    getGenres(renderGenresCards)
    clearCashEvery(60)
}

function renderGenresCards(genres) {
    let elGenreContainer = document.querySelector('.genre-container')
    
    genres.genres.forEach(genre => {

        elGenreContainer.innerHTML += `
                <article id="${genre.id}"
                class="genre-card"
                onclick="onGenreClick(${genre.id})">${genre.name}</article>
            `
    });

}

function renderMoviesCards({ results }) {
    let elMoviesContainer = document.querySelector('.movies-container')
    elMoviesContainer.innerHTML = ''

    results.forEach(movie => {

        elMoviesContainer.innerHTML += `
            <article class="movie-card">
            <h2>${movie.title}</h2>
            <img class="img poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
            <p>${movie.overview}</p>
            </article>
        `
    })
}

function onGenreClick(id) {
    getMoviesByGenreId(renderMoviesCards, id)
}

