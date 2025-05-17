'use strict'

const API_GENRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key=f941529b1e84a75511a23e71c5be0621'
const API_KEY = 'f941529b1e84a75511a23e71c5be0621'


function getGenres(onSuccess) {
    const genres = loadFromLocalStorage('ganres')

    if (genres) {
        console.log('from cash');
        
        onSuccess(genres)
        return
    }

    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            console.log('ans is: ', ans)

            saveToLocalStorage('ganres',ans)
            onSuccess(ans)
            
        }
    }
    xhr.open('GET',API_GENRES , true)
    xhr.send() 

}

function getMoviesByGenreId(onSuccess,genreId) {
    const movies = loadFromLocalStorage(genreId)
    
    if (movies) {
        console.log('from cash');
        
        onSuccess(movies)
        return
    }

    const moviesAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    console.log('genres id:',genreId);
    

    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            console.log('movies is: ', ans)

            saveToLocalStorage(genreId,ans)
            onSuccess(ans)
            
        }
    }
    xhr.open('GET',moviesAPI , true)
    xhr.send() 
}



