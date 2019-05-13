import jsonify from './middlewares/jsonify';
import request from './middlewares/request';

export default {
  getListInfo: bid => request(`/book/${bid}/list`, {}, 'get').then(jsonify),
  getListingInfo: (bid, lid) =>
    request(`/book/${bid}/list/${lid}`, {}, 'get').then(jsonify),
  postListingInfo: (userDescription, userPrice, listData, bookCondition) =>
    request('/user/:uid/listing/:lid', {
      userDescription,
      userPrice,
      listData,
      bookCondition
    }),
  putListing: (uid, bid, price, condition) =>
    request(`/user/${uid}/listing`, { bid, price, condition }, 'put').then(
      jsonify
    )
};
