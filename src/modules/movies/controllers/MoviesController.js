import BaseController from "../../BaseController";
import MoviesRepository from "../repositories/MoviesRepository";

export default class MoviesController extends BaseController {

    constructor() {
        super()
        this.moviesRepository = new MoviesRepository();
    }

    getMovies = async (req, res) =>{
        try{
            let movies = await this.moviesRepository.getMovies();
            res.json(this.success(movies))
        }catch (e){
            this.logError(e)
            res.status(500).json(this.error('Unable to get movies'))
        }
    }


    getCharacters = async (req, res) => {

        try{
            let characters = await this.moviesRepository.getCharacters(req.query)
            res.json(this.success(characters))
        }catch (e){
            this.logError(e)
            res.status(500).json(this.error('Unable to get characters'))
        }



    }
}
