const config = require('../config/general.config')
const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  const details = err.details || null 
  
  if (config.NODE_ENV === 'production') {
    res.status(statusCode).json({
      status: 'error',
      message: message,  
      details: details ? details : null 
    })
  } else {
   
    res.status(statusCode).json({ 
      status: 'error',
      message: message,
      details: details ? details : 'No additional details provided',
      stack: err.stack 
    })
  }
}
  
module.exports = errorMiddleware
  