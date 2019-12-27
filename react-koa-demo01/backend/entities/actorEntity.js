const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ActorSchema = new Schema({
  avatars:
  {
    small: { type: String },
    large: { type: String },
    medium: { type: String }
  },
  name_en: { type: String },
  name: { type: String },
  alt: { type: String },
})
const Actor = mongoose.model('Actor', ActorSchema)
module.exports = Actor 