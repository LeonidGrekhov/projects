import request from './request';

export default {
  getSearchByAuthor: (author, page) =>
    request(`/search/author/${author}/page/${page}`),
  getSearchByIsbn: (isbn, page) => request(`/search/isbn/${isbn}/page/${page}`),
  getSearchByTitle: (title, page) =>
    request(`/search/title/${title}/page/${page}`)
};
