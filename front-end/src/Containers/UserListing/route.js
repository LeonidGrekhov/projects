import CreateUserListing from './UserListing';

export default [
  {
    path: '/user/:uid/listing',
    exact: true,
    component: CreateUserListing
  }
];
