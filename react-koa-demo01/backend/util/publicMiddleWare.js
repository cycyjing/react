exports.send=async (ctx, next) => {
  ctx.send = function (data) {
    this.set('Content-Type', 'application/json;charset=utf-8')
    this.body = data
  }.bind(ctx)
  await next()
}