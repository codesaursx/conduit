import * as Joi from 'joi';

export default Joi.object({
  PORT: Joi.number().optional().default(5000)
});
