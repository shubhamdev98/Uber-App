const Joi = require('joi')
const CustomError = require('../utils/CustomError.util')  // Assuming you have the CustomError class in util/errorHandler

const userValidationSchema = Joi.object({
  full_name: Joi.object({
    first_name: Joi.string().min(3).required().messages({
      'string.min': 'First name must be at least 3 characters long.',
      'any.required': 'First name is required.'
    }),
    last_name: Joi.string().min(3).allow(null, '').messages({
      'string.min': 'Last name must be at least 3 characters long.'
    })
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address.',
    'any.required': 'Email is required.'
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long.',
    'any.required': 'Password is required.'
  }),
  socket_id: Joi.string().optional()
})

// Middleware function
const validateUser = (req, res, next) => {
  const { error } = userValidationSchema.validate(req.body, { abortEarly: false })

  if (error) {
    const validationMessages = error.details[0].message
    console.log(validationMessages, 'error message')
    throw CustomError.BadRequest('Validation failed', validationMessages) 
  } 

  next()  
}

module.exports = validateUser
