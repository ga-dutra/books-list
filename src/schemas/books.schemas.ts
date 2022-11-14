import Joi from "joi";

export const BookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.string().required(),
  read: Joi.boolean(),
  score: Joi.number(),
  overview: Joi.string(),
});

export const MovieSchema = Joi.object({
  title: Joi.string().required(),
  platform: Joi.string().required(),
  genre: Joi.string().required(),
  watched: Joi.boolean(),
  score: Joi.number(),
  overview: Joi.string().required(),
});
