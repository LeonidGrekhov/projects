import Transaction from './Transaction';

export default [
  {
    path: '/transaction/:tid',
    exact: true,
    component: Transaction
  }
];
