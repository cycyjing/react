const koaRouter = require("koa-router");
const userRouter = require("./user")();
const movieRouter = require("./movie")();
module.exports = () => {
  const router = new koaRouter();
  router.use("/user", userRouter.routes(), userRouter.allowedMethods());
  router.use("/movie", movieRouter.routes(), movieRouter.allowedMethods());
  return router;
};
