import SearchResult from './SearchResult';

export default [
  {
    path: '/search/:query/page/:page',
    exact: true,
    component: SearchResult
  }
];
