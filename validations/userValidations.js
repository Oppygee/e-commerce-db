const Joi = require('joi');

const schema = Joi.object({
    first_Name: Joi.string().min(2).max(30).required(),
    other_Names: Joi.string().min(3).max(30).required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    phone: Joi.string().min(3).max(30).required(),
        
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
schema.validate(req.body)


module.exports = schema