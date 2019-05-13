import jsonify from './middlewares/jsonify';
import request from './middlewares/request';

export default {
  deleteListingInfo: (uid, lid) =>
    request(`/user/${uid}/listing/${lid}`, {}, 'delete'),
  getListInfo: bid => request(`/book/${bid}/list`, {}, 'get').then(jsonify),
  getListingInfo: (bid, lid) =>
    request(`/book/${bid}/list/${lid}`, {}, 'get').then(jsonify),
  putListingInfo: (uid, bid, price, condition, lid) =>
    request(
      `/user/${uid}/listing`,
      { bid, price, condition, updateLid: lid },
      'put'
    ).then(jsonify)
};
