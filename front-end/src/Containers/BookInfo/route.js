import BookId from "./BookId";

export default [
  {
    path: "/book/:bid",
    exact: true,
    component: BookId
  }
];
