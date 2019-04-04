const router = require('express').Router();
const { Search } = require('../database/api');

router.get(
    '/api/search/title/:titleString',
    (request,response) => {
        console.log(request.params.titleString);
        response.send('The search route is fine')
    }
)



module.exports = router;