const jwt = require("jsonwebtoken");
exports.login = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    ctx.send({
      message: "fail",
      success: false,
      statusCode: 200
    });
  }
  const payload = {
    exp: Date.now() + 2 * 60 * 60 * 1000,
    iat: Date.now(),
    username
  };
  const privateKey = "jklsfkjlsdfkjs";
  const token = jwt.sign(payload, privateKey);
  const payloadDecode = jwt.verify(token, privateKey);
  console.log("decode", payloadDecode);
  ctx.send({
    message: "success",
    success: true,
    statusCode: 200,
    token
  });
  // const a = ctx.request.body
  // if (a.error) {
  //   const body = {
  //     message: 'fail',
  //     success: false,
  //     statusCode: 200
  //   }
  //   ctx.send(body)
  // } else {
  //   const body = {
  //     message: 'success',
  //     success: true,
  //     statusCode: 200,
  //     data: a
  //   }
  //   ctx.send(body)
  // }
};
exports.register = async (ctx, next) => {
  const a = ctx.request.body;
  if (a.error) {
    const body = {
      message: "fail",
      success: false,
      statusCode: 200
    };
    ctx.send(body);
  } else {
    const body = {
      message: "success",
      success: true,
      statusCode: 200,
      data: a
    };
    ctx.send(body);
  }
};
