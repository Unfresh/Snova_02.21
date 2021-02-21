"use strict"; // строгий режим

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while ( numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {};

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;

function detectPersonalLevel () {
    if (personalMovieDB.count < 10 ) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы КИНОМАН');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel ();

function remeberMyFilms () {
    for (let i = 0; i < 2; i++) {

        let questionOne = prompt('Один из последних просмотренных фильмов?', ''),
            questionTwo = +prompt('На сколько оцените его?', '');
        
        if( questionOne === null || questionTwo == null || questionOne == ' ' ||questionOne == '' || questionTwo == '' || questionOne.length > 50  ) {
            alert('Введите корректные данные');
            i--;
        } else {
            personalMovieDB.movies[questionOne] = questionTwo;
            console.log('прошла');
        }
    }
}

remeberMyFilms ();

// let number = 0;

// while (number < 2) {

//     let questionOne = prompt('Один из последних просмотренных фильмов?', ''),
//         questionTwo = +prompt('На сколько оцените его?', '');
    
//     if( questionOne === null || questionTwo == null || questionOne == ' ' ||questionOne == '' || questionTwo == '' || questionOne.length > 50  ) {
//         alert('Введите корректные данные');
//         number--;
//     } else {
//         personalMovieDB.movies[questionOne] = questionTwo;
//         console.log('прошла');
//     }
//     number++;
// };

// let number = 0;

// do {
//     let questionOne = prompt('Один из последних просмотренных фильмов?', ''),
//         questionTwo = +prompt('На сколько оцените его?', '');
    
//     if( questionOne === null || questionTwo == null || questionOne == ' ' ||questionOne == '' || questionTwo == '' || questionOne.length > 50  ) {
//         alert('Введите корректные данные');
//         number--;
//     } else {
//         personalMovieDB.movies[questionOne] = questionTwo;
//         console.log('прошла');
//     }
//     number++;
// }
// while (number < 2);

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB (personalMovieDB.privat);

function writeYourGenres () {
    for(let i = 0; i < 3; i++) {
        // let genre = prompt (`Ваш любимый жанр под номером ${i + 1}`, '');
        // personalMovieDB.genres[i] = genre;
        // personalMovieDB.genres.push(questGenre);
        personalMovieDB.genres[i] = prompt (`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}

writeYourGenres ();