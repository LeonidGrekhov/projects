import Error404Route from './Containers/Error/404/route';
import HomeRoute from './Containers/Home/route';
import AboutRoute from './Containers/About/route';
import AuthRoute from './Containers/Auth/route';
import ContactRoute from './Containers/Contact/route';

import SearchResultRoute from './Containers/SearchResult/route';
import BookRoute from './Containers/BookInfo/route';
import UserRoute from './Containers/User/route';
import ListingRoute from './Containers/Listing/route';
import TransactionRoute from './Containers/Transaction/route';

const routes = [
  ...HomeRoute,
  ...AboutRoute,
  ...AuthRoute,
  ...ContactRoute,
  ...SearchResultRoute,
  ...BookRoute,
  ...UserRoute,
  ...ListingRoute,
  ...TransactionRoute,
  // Place 404 last so that incase of no match,
  // 404 will be displayed
  ...Error404Route
];

export default routes;
