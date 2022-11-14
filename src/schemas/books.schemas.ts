import Joi from "joi";

export const BookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  genre: Joi.string().required(),
});

export const BookAvaliationSchema = Joi.object({
  score: Joi.number().min(0).max(10),
  overview: Joi.string(),
});
