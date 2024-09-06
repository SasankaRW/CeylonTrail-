const Joi = require("joi");

const createVisaSchema = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  passport_no: Joi.string(),
  dob: Joi.date(),
  mobile_number: Joi.string(),
  nationality: Joi.string(),
});

const approveVisaSchema = Joi.object({
  approved_officer: Joi.string(),
});

const create = (req, res, next) => {
  const { error } = createVisaSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

const approve = (req, res, next) => {
  const { error } = approveVisaSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

module.exports = {
  create,
  approve,
};
