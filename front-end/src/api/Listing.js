import jsonify from './middlewares/jsonify';
import request from './middlewares/request';

export default {
  getBookInfo: bid => request(`book/${bid}`, {}, 'get').then(jsonify),
  getListInfo: bid => request(`/book/${bid}/list`, {}, 'get').then(jsonify),
  getListingInfo: (bid, lid) =>
    request(`/book/${bid}/list/${lid}`).then(jsonify)
};
