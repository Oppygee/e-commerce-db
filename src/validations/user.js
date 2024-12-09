const joi = require('joi')
const createUser = Joi.object({
    surname: Joi.string().min(2).max(20).required(),      
    othernames: Joi.string().min(2).max(50).required(), 
    email: Joi.string().email({ minDomainSegments: 2 }).required(),     
    phone: Joi.string().max(14).required(),      
    password: Joi.string().alphanum().min(8).max(30).required(),      
    address: Joi.string().required(),      
    city: Joi.string().required(),      
    country: Joi.string().required(),

}
)

module.exports = {
    createUser
}