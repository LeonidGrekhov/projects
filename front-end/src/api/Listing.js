import jsonify from './middlewares/jsonify';
import request from './middlewares/request';

export default {
  getListInfo: bid => request(`/book/${bid}/list`, {}, 'get').then(jsonify),
  getListingInfo: (bid, lid) =>
    request(`/book/${bid}/list/${lid}`, {}, 'get').then(jsonify)
};
