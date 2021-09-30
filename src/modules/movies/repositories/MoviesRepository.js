import StarWarAPI from "../../../app/services/StarWarAPI";

export  default class MoviesRepository {

    constructor() {
        this.starWarAPI = new StarWarAPI();
    }

    getMovies = async () => {
        let movies = await this.starWarAPI.getMovies();
        movies = movies.sort((a, b) => {
            return (new Date(a.release_date)) - (new Date(b.release_date))
        }).map(({title, opening_crawl, release_date, episode_id}) => {
                return {
                    episode_id,
                    title,
                    opening_crawl,
                    release_date,
                    comment_count: 0,
                }
            }
        )


        return movies
    }

    getCharacters = async () => {
        let characters = await this.starWarAPI.getCharacters();

        return characters;
    }
}
