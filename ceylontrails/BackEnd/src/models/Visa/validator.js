const Joi = require("joi");
const { VALIDATION_ERROR } = require("../../helper");

const destinationSchema = Joi.object({
  name: Joi.string().required().trim(),
  description: Joi.string().required().trim(),
  image: Joi.string().required().trim(),
  address: Joi.string().required().trim(),
  category_tags: Joi.array().items(Joi.string()).default([]),
});

const create = async (req, res, next) => {
  try {
    await destinationSchema.validateAsync(req.body);
    next();
  } catch (error) {
    VALIDATION_ERROR(res, error);
  }
};

const updateSchema = Joi.object({
  name: Joi.string().trim(),
  description: Joi.string().trim(),
  image: Joi.string().trim(),
  address: Joi.string().trim(),
  category_tags: Joi.array().items(Joi.string()),
});

const update = async (req, res, next) => {
  try {
    await updateSchema.validateAsync(req.body);
    next();
  } catch (error) {
    VALIDATION_ERROR(res, error);
  }
};

module.exports = {
  create,
  update,
};
