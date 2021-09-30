export default (req, res, next) => {
    let errors = {};

    if(req.query.sort_by && !req.query.sort_order){
        errors.sort_order = 'Sort order is required when sort by is provided'
    }

    if(!req.query.sort_by && req.query.sort_order){
        errors.sort_by = 'Sort by is required when sort order by is provided'
    }

    if(req.query.sort_by && !['name','gender','height'].includes(req.query.sort_by)){
        errors.sort_by = 'Invalid filter value'
    }

    if(req.query.sort_order && !['desc','asc'].includes(req.query.sort_order)){
        errors.sort_order = 'Invalid sort order'
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


