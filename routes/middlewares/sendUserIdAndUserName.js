module.exports = (_, response) => {
  const { id, firstname } = response.locals.user;
  return response.json({ id, firstname });
};
