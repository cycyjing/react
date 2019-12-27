const koaRouter = require('koa-router')
const { getMovies } = require('../controllers/movieController')
module.exports = () => {
  const router = new koaRouter()
  router
    .get('/:type', getMovies)
  return router
}