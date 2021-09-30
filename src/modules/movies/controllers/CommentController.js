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
            res.status(500).json(this.error('Unable to create comment at the moment'))
        }


    }
}
