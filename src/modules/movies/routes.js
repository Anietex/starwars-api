import express from 'express';
import MoviesController from "./controllers/MoviesController"
import CommentController from "./controllers/CommentController";

import validateListCharacters from './request-validators/list-characters'
import validateCreateComment from './request-validators/create-comment'

const router = express.Router()
const moviesController = new MoviesController()
const commentController = new CommentController()

router.get('/movies', moviesController.getMovies)
router.get('/characters',validateListCharacters, moviesController.getCharacters);

router.post('/comment', validateCreateComment, commentController.createComment);


export default router
