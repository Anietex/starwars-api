import {Comment } from '../../../models'

export default class CommentRepository {


    createComment(data){
       return Comment.create(data)
    }

    getMovieCommentCount(episodeId){
        return Comment.count({
            where: {
                episode_id: episodeId
            }
        })
    }

    getComments(episodeId){
        return Comment.findAll({
            where: {
                episode_id: parseInt(episodeId)
            }
        })
    }
}
