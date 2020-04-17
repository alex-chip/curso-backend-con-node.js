const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
  async getMovies() {
    const routes = await Promise.resolve(moviesMock);
    return routes || [];
  }

  async getMovie() {
    const routes = await Promise.resolve(moviesMock[0]);
    return routes || [];
  }

  async createMovie() {
    const createMovieId = await Promise.resolve(moviesMock[0].id);
    return createMovieId;
  }

  async deleteMovie() {
    const deleteMovieId = await Promise.resolve(moviesMock[0].id);
    return deleteMovieId;
  }

  async updateMovie() {
    const updateMovieId = await Promise.resolve(moviesMock[0].id);
    return updateMovieId;
  }

  async patchMovie() {
    const patchMovieId = await Promise.resolve(moviesMock[0].id);
    return patchMovieId;
  }
}

module.exports = MoviesService;