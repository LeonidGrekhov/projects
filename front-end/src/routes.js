import Error404Route from './Containers/Error/404/route';
import HomeRoute from './Containers/Home/route';
import AboutRoute from './Containers/About/route';
import AuthRoute from './Containers/Auth/route';
import SearchResultRoute from './Containers/SearchResult/route';
import BookRoute from './Containers/BookInfo/route';
import UserRoute from './Containers/User/route';
import ListingRoute from './Containers/Listing/route';
import AdminRoute from './Containers/Admin/route';

const routes = [
  ...HomeRoute,
  ...AboutRoute,
  ...AuthRoute,
  ...SearchResultRoute,
  ...BookRoute,
  ...UserRoute,
  ...ListingRoute,
  ...AdminRoute,
  // Place 404 last so that incase of no match,
  // 404 will be displayed
  ...Error404Route
];

export default routes;
