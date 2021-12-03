
const express = require('express')
const router=express.Router();
const filmsController =require('../controllers.js/filmsController')


router.get("favoris/:id", filmsController.getFilms);

router.get(':id',filmsController.findFilmById);

router.post('',filmsController.createFilm );

router.delete(':id',filmsController.deleteFilm)

router.put(':id',filmsController.updateFilm)

module.exports =router;

