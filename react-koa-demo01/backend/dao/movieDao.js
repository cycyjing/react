const movieEntity = require("../entities/movieEntity");
class Movie {
  constructor() {
    this.movie = movieEntity;
  }
  async findByType(type, limit) {
    return movie.findByType(type, limit)
  }
  async findByActor(name, limit) {
    return movie.findByActor(name, limit)
  }
}
module.exports = exports = new Movie();
