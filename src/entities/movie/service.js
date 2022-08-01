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

export class MovieService {
  static async getMovies() {
    try {
      const url = '/movies';
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new CustomError(error, error.response);
    }
  }
  static async deleteFilm(id) {
    try {
      const url = `/movies/${id}`;
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      throw new CustomError(error, error.response);
    }
  }
}
