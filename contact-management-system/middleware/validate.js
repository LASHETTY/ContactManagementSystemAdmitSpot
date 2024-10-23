import Joi from 'joi';

export const validateContact = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phoneNumber: Joi.string().optional(),
        address: Joi.string().optional(),
        timezone: Joi.string().optional(),
    });
    return schema.validate(data);
};
