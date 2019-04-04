import Error404Route from "./Containers/Error/404/route";
import HomeRoute from "./Containers/Home/route";
import AboutRoute from "./Containers/About/route";
import AuthRoute from './Containers/Auth/route';
import BookRoute from "./Containers/BookInfo/route";

const routes = [
  ...HomeRoute,
  ...AboutRoute,
  ...AuthRoute,
  ...BookRoute,
  // Place 404 last so that incase of no match,
  // 404 will be displayed
  ...Error404Route
];

export default routes;
