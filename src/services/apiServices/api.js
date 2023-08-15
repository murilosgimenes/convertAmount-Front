import apiService from './apiService'
export const api = {
  post: {
    convertAmount: (payload) => apiService.post(
      `api/v1/currency_converter/convert`, payload)
  }
};
