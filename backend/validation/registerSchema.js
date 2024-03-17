const Joi = require('joi');

const registerSchema = Joi.object({
    userName:Joi.string().required().min(3).max(8),
    email:Joi.string().email().required(),
    password:Joi.string().required().min(6),
})

module.exports = registerSchema;

