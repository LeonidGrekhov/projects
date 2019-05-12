import UserListingAPI from './UserListing';

export default [
  {
    path: '/user/:uid/listing/:lid',
    exact: true,
    component: UserListingAPI
  }
];
