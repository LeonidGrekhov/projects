module.exports = (_, response) => {
  const { id, name } = response.locals.user;
  return response.json({ id, firstname });
};
