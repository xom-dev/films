import { instance as axios } from '../../api/axios';

class CustomError extends Error {
  constructor(message, errorExtraParams) {
    super(message);
    this._errorExtraParams = errorExtraParams;
  }

  get errorExtraParams() {
    return this._errorExtraParams;
  }
}

export class LoginService {
  static async postUser(body) {
    try {
      const url = '/users';
      const response = await axios.post(url, body);
      return response.data;
    } catch (error) {
      throw new CustomError(error, error.response);
    }
  }

  static async postSession(body) {
    try {
      const url = '/sessions';
      const response = await axios.post(url, body);
      return response.data;
    } catch (error) {
      throw new CustomError(error, error.response);
    }
  }

  static async postFile(body) {
    try {
      const url = '/movies/import';
      const response = await axios.post(url, body);
      return response.data;
    } catch (error) {
      throw new CustomError(error, error.response);
    }
  }
}
