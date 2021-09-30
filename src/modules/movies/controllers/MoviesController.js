import BaseController from "../../BaseController";
import MoviesRepository from "../repositories/MoviesRepository";

export default class MoviesController extends BaseController {

    constructor() {
        super()
        this.repository = new MoviesRepository()
    }

    getMovies = async (req, res) =>{
        let movies = await this.repository.getMovies();
        res.json(this.success(movies))
    }


    getCharacters = async (req, res) => {
        let characters = await this.repository.getCharacters(req.query)
        res.json(this.success(characters))
    }
}
