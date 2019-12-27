import { Movie, Login, Register } from "../views";
import { HomeLayout, UserLayout } from "../layout";
export default () => {
  return [
    {
      path: "/movie",
      component: HomeLayout,
      children: [
        { path: "/:type", component: Movie },
        { path: "/", redirect: "/movie/all" }
      ]
    },
    {
      path: "/user",
      component: UserLayout,
      children: [
        { path: "/login", component: Login },
        { path: "/register", component: Register },
        { path: "/", redirect: "/user/login" }
      ]
    }
  ];
};
