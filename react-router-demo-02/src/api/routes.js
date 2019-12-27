import {Home,Music,Movie} from '../component'
export default {
  apis: [
    {
      path:'/home',
      component:Home,
      exact:true
    },
    {
      path:'/music',
      component:Music,
      exact:true
    },
    {
      path:'/movie',
      component:Movie,
      exact:true
    }
  ]
}