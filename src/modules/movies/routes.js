import express from 'express';
import MoviesController from "./controllers/MoviesController"
import validateListCharacters from './request-validators/list-characters'

const router = express.Router()
const moviesController = new MoviesController()

router.get('/movies', moviesController.getMovies)
router.get('/characters',validateListCharacters, moviesController.getCharacters)

export default router
