class ApiError extends Error {
  constructor(message, data) {
    super(message);
    this.data = data;
    this.name = this.constructor.name;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
