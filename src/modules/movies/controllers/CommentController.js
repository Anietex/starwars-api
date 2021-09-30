import BaseController from "../../BaseController";
import CommentRepository from "../repositories/CommentRepository";

 export default class CommentController extends BaseController {

    constructor() {
        super();
        this.repository = new CommentRepository()
    }

    createComment = async (req, res) => {
        try{
            let data = {
                comment: req.body.comment,
                episode_id: req.body.episode_id,
                ip_address: req.socket.remoteAddress
            }

            let comment = await  this.repository.createComment(data);
            res.json(this.success(comment, 'Comment added successfully'));

        }catch (e){
            this.logError(e)
            res.status(500).json(this.error('Unable to create comment at the moment'))
        }
    }

    getComments =  async (req, res) => {
        try{
            const comments =  await this.repository.getComments(req.params.id);
             res.json(this.success(comments))
        }catch (e){
            this.logError(e)
            res.status(500).json(this.error('Unable to get comments at the moment'))
        }
    }
}
