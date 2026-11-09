import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'
import Movies from './Components/Movies'

// *** U Vite projektu umesto process.env koristi se import.meta.env. ***

// API KEY
// * const API_KREY = b676ab91;

// https://www.omdbapi.com/?t=Terminator&apikey=b676ab91
// * https://www.omdbapi.com/?t=Terminator&apikey=b676ab91

// const apiKey = import.meta.env.VITE_OMDBAPI_KEY;
const apiKey = import.meta.env.VITE_OMDBAPI_KEY;
// const urlKey = import.meta.env.VITE_OMDBAPI_URL;
const urlKey = import.meta.env.VITE_OMDBAPI_URL;

console.log(apiKey)
console.log(urlKey)

// * sa fetch -> pozivamo api
fetch("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
    // sa prvi then -> hvatamo response ili ti odgovor koji dobija nazad -> u prvovim than console.log(response) ->  dobijamo ugrubo podatke !
    .then(response => response.json()) // da poretvorimo odgovor u JSON
    // sa drugim then -> mi sa drugim tham samo ispisujemo odgovor (te podatke) JSON
    .then(jsonRespopnse => console.log(jsonRespopnse))


// fetch("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
    // sa prvi then -> hvatamo response ili ti odgovor koji dobija nazad -> u prvovim than console.log(response) ->  dobijamo ugrubo podatke !
//     .then(response => response.json()) // da poretvorimo odgovor u JSON

    // sa drugim then -> mi sa drugim tham samo ispisujemo odgovor (te podatke) JSON
//     .then(jsonResponse => console.log(jsonResponse))

// * domaci: poziv preko fecha -> pretvorimo da ide preko axios

// ** GET METODA kada imamo ovako vidljive (expose)?t=Terminator&apikey=b676ab91
// nacini na koje pozivamo aii je: post, GET, put, ..

axios.get("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91") // 7 na pocetku
    .then(response => console.log(response.data))
    // .catch(error => console.log(error))


// axios.get("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91") // dodata 7 na pocetku za error
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))


// vezba: u env u imamo url: https://www.omdbapi.com/ i api key: b676ab91
// da promenimo da se ne poziva axios ovako: https://www.omdbapi.com/, nego da on iz env povlaci te podatke, ne smemo nigde da imao kljuc od apija: b676ab91, vec koristeci env izvucemo ove podatke

axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
    .then(response => console.log(response.data))

// axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
//     .then(response => console.log(response.data))
    // .catch(error => console.log(error))


function App() {

    return (
        <>
            <Movies />
        </>
    )
}

export default App
