import request from './middlewares/request';

export default {
  getSearchByAuthor: (author, page) =>
    request(`/search/author/${author}/page/${page}`, {}, 'get'),
  getSearchByIsbn: (isbn, page) =>
    request(`/search/isbn/${isbn}/page/${page}`, {}, 'get'),
  getSearchByTitle: (title, page) =>
    request(`/search/title/${title}/page/${page}`, {}, 'get')
};
