const koaRouter = require('koa-router')
const { login, register } = require('../controllers/userController')
module.exports = () => {
  const router = new koaRouter()
  router
    .post('/login', login)
    .post('/register', register)
  return router
}