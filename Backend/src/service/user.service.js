const { userModel } = require('../models/user.model')
const CustomError = require('../utils/CustomError.util')

exports.createUser = async ({ full_name, email, password }) => {
  const { first_name, last_name } = full_name 

  if (!first_name || !email || !password) {
    throw new CustomError(400, 'Validation failed: full_name.first_name, email, and password are required')
  }

  const existingUser = await userModel.findOne({ email })
  if (existingUser) {
    throw new CustomError(400, 'User with this email already exists')
  }

  const user = await userModel.create({
    full_name: {
      first_name,
      last_name
    },
    email,
    password
  })

  return user
}
