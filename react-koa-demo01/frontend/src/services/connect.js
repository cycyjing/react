import axios from "axios";
import store from "../store/store";
import { start, end, errorHappen } from "../store/action";
import apiConfig from "./apiConfig";
const instance = axios.create({
  baseURL: `${apiConfig.BASE_URL}:${apiConfig.PORT}`,
  timeout: 1500
});
instance.interceptors.request.use(
  config => {
    store.dispatch(start());
    return config;
  },
  err => {
    store.dispatch(errorHappen(err.message));
  }
);
instance.interceptors.response.use(
  res => {
    store.dispatch(end());
    return res;
  },
  err => {
    store.dispatch(errorHappen(err.message));
  }
);

const connect = async function(params, method) {
  try {
    //等同于new Promise().then(data=>{})
    const data = await this({ ...params, method });
    return data;
  } catch (err) {
    store.dispatch(errorHappen(err.message));
  }
}.bind(instance);

instance.connect = connect
export default instance;
