"use strict"; // строгий режим

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {};

let questionOne = prompt('Один из последних просмотренных фильмов?', ''),
    questionTwo = +prompt('На сколько оцениет его?', ''),
    questionThree = prompt('Один из последних просмотренных фильмов?', ''),
    questionFour = +prompt('На сколько оцениет его?', '');

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;

personalMovieDB.movies[questionOne] = questionTwo;
personalMovieDB.movies[questionThree] = questionFour;


console.log(personalMovieDB);