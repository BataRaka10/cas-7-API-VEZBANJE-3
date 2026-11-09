import { useState } from "react";
import axios from "axios";


// kada se klike na search movie refreshuje -> submitovace celu formu / zaustavimo da ne rifreshuje stranu -> type="button"

// e.currentTarget.value -> value koji mi imamo

// * onInput={ (e) => setMovieName(e.currentTarget.value -> kada sesvaki put ukuca nesto


// ** -> pretraga na osnovu movieName
// * const [movieName, setMovieName] = useState() -> napravili smo state koji ce drzati ime tog filma
const Movies = () => {

    const [movieName, setMovieName] = useState();

    const searchMovieByTitle = () => {
        // console.log("Hello World")
        // console.log(movieName)

        // axios.get(`${import.meta.env.VITE_OMDBAPI_URL}?t-${movieName}&apiKey=${import.meta.env.VITE_OMDBAPI_KEY}`)
        // .then(response => console.log(response.data))
        axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
        .then(response => console.log(response.data))

    }

    return (
        <>
            <form>
                <input type="text" onInput={ (e) => setMovieName(e.currentTarget.value)}/>
                <button type="button" onClick={searchMovieByTitle}>Search movie</button>
            </form>
        </>
    )
}

export default Movies;