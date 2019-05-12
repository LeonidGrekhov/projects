import jsonify from './middlewares/jsonify';
import request from './middlewares/request';

export default {
  getBookInfo: bid => request(`book/${bid}`, {}, 'get').then(jsonify),
  getListInfo: bid => request(`/book/${bid}/list`, {}, 'get').then(jsonify),
  getListingInfo: (bid, lid) =>
    request(`/book/${bid}/list/${lid}`, {}, 'get').then(jsonify),
  postListingInfo: (userDescription, userPrice, listData, bookCondition) =>
    request('/user/:uid/listing/:lid', {
      userDescription,
      userPrice,
      listData,
      bookCondition
    })
};

/*
userDescription: '',
      userPrice: null,
      listData: null,
      bookCondition: null,
*/
