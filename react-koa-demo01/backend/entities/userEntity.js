const pbkdf2 = require("crypto").pbkdf2;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    validate: function (arg, err) {
      if (arg.length < 6 || arg.length > 20) {
        err.name = "usernameError";
        err.message = "username length error";
        return false;
      }
    }
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: "__default.png"
  },
  email: {
    type: String,
    required: true,
    validate: function (arg, err) {
      var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (pattern.test(arg.value)) {
        err.name = "emailError";
        err.message = "Please input email";
        return false;
      }
    }
  }
});
UserSchema.pre("save", async (next, doc) => {
  //spent more time，use async
  doc.password = await pbkdf2(doc.password, "123456789");
});
UserSchema.pre("find", (next, doc) => {
  doc.password = await pbkdf2(doc.password, "123456789");
});
//static methods
UserSchema.static.login = async ({ username, password }) => {
  const user = await User.find({ username, password }).exec()
  if (!user || user.length === 0) {
    //TODO
  }
  return user[0]
}
UserSchema.static.register = async (user) => {
  const newUser = new User(user)
  const userEntity = await newUser.save()
  if (!userEntity) {
    //TODO
  }
  return userEntity
}

const User = mongoose.model('User', UserSchema);
module.exports = User;
