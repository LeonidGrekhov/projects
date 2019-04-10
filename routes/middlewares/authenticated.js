module.exports = (request, response, next) => {
    if (request.isAuthenticated()) {
      response.locals.user = request.user;
      next();
    } else {
      console.log("*** DEBUG ***\n");
      console.log("Request is not authenticated");
      response.sendStatus(404);
    }
  };
  