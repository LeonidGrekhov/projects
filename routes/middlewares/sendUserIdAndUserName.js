module.exports = (_, response) => {
  const { uid, firstname } = response.locals.user;
  return response.json({ uid, firstname });
};
