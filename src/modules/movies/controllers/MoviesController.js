import BaseController from "../../BaseController";
import MoviesRepository from "../repositories/MoviesRepository";

export default class MoviesController extends BaseController {

    constructor() {
        super()
        this.moviesRepository = new MoviesRepository();

    }

    getMovies = async (req, res) =>{
        let movies = await this.moviesRepository.getMovies();
        res.json(this.success(movies))
    }


    getCharacters = async (req, res) => {
        let characters = await this.moviesRepository.getCharacters(req.query)
        res.json(this.success(characters))
    }
}
