export default (req, res, next) => {
    let errors = {};

    if(!req.body.episode_id){
        errors.episode_id = 'Episode id required'
    }
    if(!req.body.comment){
        errors.comment = 'Comment id required'
    }

    if(req.body.comment && req.body.comment.length > 500){
        errors.episode_id = 'Comment should not be more than 500 characters'
    }

    if(Object.keys(errors).length){
        res.status(422).json({
            status: "error",
            data: errors
        })
    }else {
        next()
    }
}
