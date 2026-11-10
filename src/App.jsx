import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'
import Movies from './Components/Movies'

// *** U Vite projektu umesto process.env koristi se import.meta.env. ***

// API KEY
// const API_KEY = "b676ab91";

// https://www.omdbapi.com/?t=Terminator&apikey=b676ab91
// * https://www.omdbapi.com/?t=Terminator&apikey=b676ab91

// const apiKey = import.meta.env.VITE_OMDBAPI_KEY;
const apikey = import.meta.env.VITE_OMDBAPI_KEY
// const urlKey = import.meta.env.VITE_OMDBAPI_URL;
const apiUrl = import.meta.env.VITE_OMDBAPI_URL

// console.log(apiKey)
console.log(apikey)
// console.log(apiUrl)
console.log(apiUrl)

// * sa fetch -> pozivamo api / prvi argumen u fetch u je: url koji pozivamo(adresa) ""
fetch("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
    // u prvom then -> dobijamo samo ugrubo poatke
    // .then(response => console.log(response)) 

    // sa prvim then -> mi pretvarmo taj odgovor koji smo dobili i json
    .then(resopnse => resopnse.json()) // pretvaranje odgovora u json

    // u drugom then -> mi isisujemo odgovor jsonnu (te podatke)
    .then(jsonResponse => console.log(jsonResponse))


// * domaci: poziv preko fecha -> pretvorimo da ide preko axios

// ** GET METODA kada imamo ovako vidljive (expose)?t=Terminator&apikey=b676ab91  
// ** -> nacini na koje pozivamo api je: post, GET, put, ..

axios.get("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91")
    // dobijamo sve podatke -> response.data
    .then(resopnse => resopnse.data)
    .catch(error => console.log(error))


// axios.get("https://www.omdbapi.com/?t=Terminator&apikey=b676ab91") // dodata 7 na pocetku za error
    // dobijamo sve podatke -> response.data
    // .then(response => console.log(response.data))
    // .catch(error => console.log(error))


// * vezba: u env u imamo url: https://www.omdbapi.com/ i api key: b676ab91
// * da promenimo da se ne poziva axios ovako: https://www.omdbapi.com/, nego da on iz env povlaci te podatke, ne smemo nigde da imao kljuc od apija: b676ab91, vec koristeci env izvucemo ove podatke

axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
    .then(resopnse => resopnse.data)


console.log(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)


// console.log(import.meta.env.VITE_OMDBAPI_URL+"?t-Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)

// axios.get(import.meta.env.VITE_OMDBAPI_URL+"?t=Terminator&apikey="+import.meta.env.VITE_OMDBAPI_KEY)
//     .then(response => console.log(response.data))

function App() {

    return (
        <>
            <Movies />
        </>
    )
}

export default App
