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

    getCharacters = async (query) => {
        let characters = await this.starWarAPI.getCharacters();
        if(query.sort_by){
            const sortBy = query.sort_by;
            const sortOrder = query.sort_order;
            characters = characters.sort((a, b) => {
                if(['name','gender'].includes(sortBy)){
                    return sortOrder === 'asc'? a[sortBy].localeCompare(b[sortBy]) : b[sortBy].localeCompare(a[sortBy])
                }
                if(sortBy === 'height'){
                    return sortOrder === 'asc' ? a.height - b.height : b.height - a.height
                }
            })
        }
        if(query.filter_by_gender){
            characters = characters.filter(({gender}) => gender === query.filter_by_gender)
        }
        return  {
            meta: this.__getCharactersMeta(characters),
            characters: characters
        }
    }

    __getCharactersMeta = (characters)=> {
        let totalHeight = 0;
        characters.forEach((character) => {
             totalHeight+=parseInt(character.height)
        })
        const meta = {
            total_characters: characters.length,
            total_height: {
                feet: 0,
                cm: 0

            }
        }
        meta.total_height.cm = totalHeight;
        let heightInFeet = (totalHeight/30.48).toFixed(0);
        let inches = ((totalHeight%30.48)/2.54).toFixed(0)
        meta.total_height.feet = `${heightInFeet}/${inches}`
        return meta

    }
}
