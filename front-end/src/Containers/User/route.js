import UserChat from './Chat';
import UserConfiguration from './Configuration';
import UserProfile from './Profile';
import UserReport from './Report';
import UserReportForm from './ReportForm';

export default [
  {
    path: '/user/:uid',
    exact: true,
    component: UserProfile
  },
  {
    path: '/user/:uid/chat/:cid',
    exact: true,
    component: UserChat
  },
  {
    path: '/user/:uid/configuration',
    exact: true,
    component: UserConfiguration
  },
  {
    path: '/user/:uid/report',
    exact: true,
    component: UserReportForm
  },
  {
    path: '/user/:uid/report/:rid',
    exact: true,
    component: UserReport
  }
];
