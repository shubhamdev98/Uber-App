class CustomError extends Error {
  constructor(statusCode, message, details) {
    super(message)
    this.statusCode = statusCode
    this.details = details
    Error.captureStackTrace(this, this.constructor)
  }
  
  // Static methods for common error types
  static BadRequest(message = 'Bad Request', details) {
    return new CustomError(400, message, details)
  }
  
  static Unauthorized(message = 'Unauthorized', details) {
    return new CustomError(401, message, details)
  }
  
  static Forbidden(message = 'Forbidden', details) {
    return new CustomError(403, message, details)
  }
   
  static NotFound(message = 'Not Found', details) {
    return new CustomError(404, message, details)
  }
  
  static InternalServerError(message = 'Internal Server Error', details) {
    return new CustomError(500, message, details)
  }
  
  static Conflict(message = 'Conflict', details) {
    return new CustomError(409, message, details)
  }
  
  static UnprocessableEntity(message = 'Unprocessable Entity', details) {
    return new CustomError(422, message, details)
  }
  
  // New static methods for status codes 503 and 504
  static ServiceUnavailable(message = 'Service Unavailable', details) {
    return new CustomError(503, message, details)
  }

  static GatewayTimeout(message = 'Gateway Timeout', details) {
    return new CustomError(504, message, details)
  }
}

module.exports = CustomError
