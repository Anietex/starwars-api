import {Comment } from '../../../models'
import {Op, where} from 'sequelize'

export default class CommentRepository {


    createComment(data){
       return Comment.create(data)
    }

    getMovieCommentCount(id){
        return Comment.count({
            where: {
                episode_id: {
                    [Op.eq]: id
                }
            }
        })
    }
}
