const userEntity = require("../entities/userEntity");
class User {
  constructor() {
    this.user = userEntity;
  }
  async login({ username, password }) {
    user.login({ username, password });
  }
  async register(userObj) {
    user.register(userObj);
  }
}
module.exports = exports = new User();
