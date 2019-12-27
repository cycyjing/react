const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MovieSchema = new Schema({
  //schema
  rating: {
    //分数
    type: Number,
    required: true
  },
  genres: [
    {
      type: String
    }
  ],
  durations: {
    type: String
  },
  pubdate: {
    //上映日期
    type: Date,
    required: true
  },
  title: {
    // 中文名
    type: String,
    required: true
  },
  wish: Number, //期待值
  original_title: {
    //名称
    type: String
  },
  collection: String,
  stars: {
    // 评分
    type: Number
  },
  images: {
    //图片
    large: {
      type: String
    },
    small: { type: String },
    medium: { type: String }
  },
  casts: [
    { //说明存的时一个ID 连接 ，类型三个Actor这个类型
      type: Schema.Types.ObjectId,
      refs: 'Actor'
    }
  ],
  directors: [
    { //说明存的时一个ID 连接 ，类型三个Actor这个类型
      type: Schema.Types.ObjectId,
      refs: 'Actor'
    }
  ]
})
MovieSchema.query.findByType = async (type, limit) => {
  return Movie.find({ genres: type }, null, { $limit: limit }).sort('-pubdate')
}
MovieSchema.query.findByActor = async (name, limit) => {
  return Movie.find({ $in: ({ 'casts.name': name }, { 'casts.name': name }) }, null, { $limit: limit })
}
const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie
