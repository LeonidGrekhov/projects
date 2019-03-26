var address = 'http://www.litlister.com';

if (process.env.REACT_APP_LOCAL_SERVER) {
  address = 'http://localhost:3000';
}

module.exports = address;
