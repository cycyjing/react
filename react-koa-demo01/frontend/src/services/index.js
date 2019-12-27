import instance from "./connect";
import apiConfig from "./apiConfig";
export const getMovies = type => {
  // return instance.get(`${apiConfig.GET_MOVIES}/${type}`)
  return instance.connect({ url: `${apiConfig.GET_MOVIES}/${type}` }, "get");
};
export const login = user => {
  return instance.post(`${apiConfig.LOGIN}`, user);
};
export const register = user => {
  return instance.post(`${apiConfig.REGISTER}`, user);
};
