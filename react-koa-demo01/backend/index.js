/**
 * package
 */
const koa = require('koa')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const koaRouter = require('koa-router')

const app = new koa()
const router = new koaRouter()

const serverConfig = require('./config/serverConfig')
const databaseConfig = require('./config/databaseConfig')
const {send}=require('./util/publicMiddleWare')
const routers = require('./routers')()
app.use(async (ctx,next)=>{
  ctx.set(
    'Access-Control-Allow-Origin',"*",
  )
  ctx.set(
    'Access-Control-Allow-Methods',"GET,PUT,POST,DELETE,OPTIONS",
  )
  ctx.set(
    'Access-Control-Allow-Headers',"x-requested-with,accept,origin,content-type",
  )
 await next()

})
app.use(send)

app.use(bodyParser())
app.use(routers.routes())
app.use(router.allowedMethods())

mongoose.connect(`${databaseConfig.url}:${databaseConfig.port}/${databaseConfig.databaseName}`,
  databaseConfig.options, (err) => {
    if (err) {
      process.exit(0)
      return
    }
    console.log(`DATABASE CONNECT ON ${databaseConfig.port}, OPEN ${databaseConfig.databaseName}`)
  })
app.listen(serverConfig.port, (err) => {
  if (err) {
    process.exit(0)
    return
  }
  console.log(`SERVER LISTEN ${serverConfig.port}`)
})