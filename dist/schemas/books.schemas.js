import Joi from "joi";
export var BookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    read: Joi.boolean(),
    score: Joi.number(),
    overview: Joi.string()
});
