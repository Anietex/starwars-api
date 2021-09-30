import axios from 'axios'

export default class StarWarAPI {


    constructor() {
        this._http = axios.create({
            baseURL: process.env.STARWARS_API_BASE_URL
        })
    }

    async getMovies(){
        let {data: {results: movies}} = await this._http.get('/films')
        return movies
    }

    async getMovie(id){
        let {data : movie } =  this._http.get(`/films/${id}`)
        return movie
    }

    async getCharacters(){
        let { data: {results: people} } = await this._http.get('/people')

        return people
    }


}
