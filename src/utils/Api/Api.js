class Api {
    constructor(apiConfig, baseErrorMessage) {
      this._baseUrl = apiConfig.baseUrl;
      this._baseErrorMessage = baseErrorMessage;
    }

    _getToken() {
      const token = localStorage.getItem('jwt');
      return token;
    }
  
    _handleResponse(response) {
      if (response.ok) {
        return response.json();
      }
  
      return response.json()
        .then(data => {
          const message = data.message || this._baseErrorMessage;
  
          return Promise.reject(new Error(message));
        });
    }
  }
  
  export default Api;