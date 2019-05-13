import jsonify from './middlewares/jsonify';
import request from './middlewares/request';

export default {
  getBookInfo: bid => request(`/book/${bid}`, {}, 'get').then(jsonify)
};
