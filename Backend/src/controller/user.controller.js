const { userModel } = require('../models/user.model')
const userService = require('../service/user.service') 
const CustomError = require('../utils/CustomError.util')

// register controller function
exports.registration = async (req, res, next) => {
  try {
    console.log('Request Body:', req.body) 
    
    const { full_name, email, password } = req.body
    console.log('Full Name:', full_name)  

    if (!full_name || !full_name.first_name) {
      throw new CustomError(400, 'Full name or first name is missing')
    }

    const isUserAlready = await userModel.findOne({ email })

    if (isUserAlready) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await userModel.hashPassword(password)

    const user = await userService.createUser({
      full_name: {
        first_name: full_name.first_name,
        last_name: full_name.last_name
      },
      email,
      password: hashedPassword
    })

    const token = user.generateAuthToken()

    res.status(201).json({ token, user })
    
  } catch (error) {
    console.log(error, 'Error during registration')
    next(error) 
  }
}