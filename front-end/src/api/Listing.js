import jsonify from './middlewares/jsonify';
import request from './middlewares/request';

export default {
  deleteList: lid => request(`/list/${lid}`, {}, 'delete'),
  getList: lid => request(`/list/${lid}`, {}, 'get').then(jsonify),
  putListCreate: (uid, bid, price, condition, pics) =>
    request(`/list`, { uid, bid, price, condition, pics }, 'put').then(jsonify),
  putListUpdate: (lid, price, condition, pics) =>
    request(`/list/${lid}`, { price, condition, pics }, 'put').then(jsonify)
};
