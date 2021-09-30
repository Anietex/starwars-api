import express from 'express';
import MoviesController from "./controllers/MoviesController"

const router = express.Router()
const moviesController = new MoviesController()

router.get('/movies', moviesController.getMovies)
router.get('/characters', moviesController.getCharacters)

export default router
