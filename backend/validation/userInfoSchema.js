const Joi = require('joi');

const userAdditionalSchemaJoi = Joi.object({
    fullName: Joi.string().required().label('Full Name'),
    about: Joi.string().allow('').optional().label('About'),
    image: Joi.string().allow('').optional().label('Image'),
    phoneNumber: Joi.string().allow('').optional().label('Phone Number'),
    gender: Joi.string().valid('male', 'female', 'other').required().label('Gender'),
    className: Joi.string().required().label('Class Name')
});

module.exports = userAdditionalSchemaJoi;