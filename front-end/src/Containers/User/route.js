import UserChat from './Chat';
import UserConfiguration from './Configuration';
import UserProfile from './Profile';

export default [
  {
    path: '/user/:uid',
    exact: true,
    component: UserProfile
  }, {
    path: '/user/:uid/chat',
    exact: true,
    component: UserChat
  }, {
    path: '/user/:uid/configuration',
    exact: true,
    component: UserConfiguration
  }
];
