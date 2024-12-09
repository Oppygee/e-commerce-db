const validationMiddleware = (schema)=>{
    return (req, res, next)=>{
        const {error} = schema.validate(req.body)
        const valid = error == null
        if (valid) {
            next()
        } else {
            const {details} = error
            const message = details.map(i => i.message).join(',')
            res.status(402).json({
                status: "error",
                message: message
            })
            
        }

    }
}

module.exports = {
    validationMiddleware
}
