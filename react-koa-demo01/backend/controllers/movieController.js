exports.getMovies = async (ctx, next) => {
  console.log('type', ctx.params.type)
  if (ctx.query.error) {
    const body = {
      message: "fail",
      success: false,
      statusCode: 200
    };
    ctx.send(JSON.stringify(body));
  } else {
    //电影信息
    const movies = [
      {
        title: "我是好人",
        info: "我是好人我是好人我是好人我是好人我是好人我是好人",
        pics: "我是好人我是好人我是好人我是好人",
        score: "5",
        type: "爱情动作",
        releaseDate: Date.UTC(),
        length: "120"
      },
      {
        title: "我是好人",
        info: "我是好人我是好人我是好人我是好人我是好人我是好人",
        pics: "我是好人我是好人我是好人我是好人",
        score: "5",
        type: "爱情动作",
        releaseDate: Date.UTC(),
        length: "120"
      },
      {
        title: "我是好人",
        info: "我是好人我是好人我是好人我是好人我是好人我是好人",
        pics: "我是好人我是好人我是好人我是好人",
        score: "5",
        type: "爱情动作",
        releaseDate: Date.UTC(),
        length: "120"
      },
      {
        title: "我是好人",
        info: "我是好人我是好人我是好人我是好人我是好人我是好人",
        pics: "我是好人我是好人我是好人我是好人",
        score: "5",
        type: "爱情动作",
        releaseDate: Date.UTC(),
        length: "120"
      },
      {
        title: "我是好人",
        info: "我是好人我是好人我是好人我是好人我是好人我是好人",
        pics: "我是好人我是好人我是好人我是好人",
        score: "5",
        type: "爱情动作",
        releaseDate: Date.UTC(),
        length: "120"
      },
      {
        title: "我是好人",
        info: "我是好人我是好人我是好人我是好人我是好人我是好人",
        pics: "我是好人我是好人我是好人我是好人",
        score: "5",
        type: "爱情动作",
        releaseDate: Date.UTC(),
        length: "120"
      }
    ];
    const body = {
      message: "success",
      success: true,
      statusCode: 200,
      data: movies
    };
    console.log('object', JSON.stringify(body))
    ctx.send(JSON.stringify(body));
  }
};
