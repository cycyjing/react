import React, { Component } from 'react';
import Loadable from 'react-loadable'
export const Home = Loadable({
  loader: () => import('./home'),
  loading: () => <h3>........</h3>
})
export const Music = Loadable({
  loader: () => import('./music'),
  loading:() => <h3>........</h3>
})
export const Movie = Loadable({ 
  loader: () => import('./movie'),
  loading:() => <h3>........</h3>
})

// export { default as Home } from './home'
// export { default as Music } from './music'
// export { default as Movie } from './movie'