const env = process.env === 'production'
export default {
  BASE_URL: env ? '' : 'http://localhost',
  PORT: 4000,
  GET_MOVIES: '/movie',
  LOGIN: '/user/login',
  REGISTER: '/user/register'
} 