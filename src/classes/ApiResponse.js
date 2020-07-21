class ApiResponse {
  constructor(isSuccessfull, data, status, error = null) {
    this.isSuccessfull = isSuccessfull;
    this.data = data;
    this.error = error;
    this.status = status;
  }
}

export default ApiResponse;
