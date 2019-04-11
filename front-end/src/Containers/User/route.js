import UserProfile from './Profile';

export default [
  {
    path: '/user/:uid',
    exact: true,
    component: UserProfile
  }
];
