const router = require('express').Router();
const { Search } = require('../database/api');

router.get(
    '/api/search/title/:titleString',
    (request,response) => {
        console.log(request.params.titleString);
        var searchTerm = request.params.titleString;
        Search.findBookByTitle(searchTerm)
        .then((data)=>{
            response.json({data})
        })
        .catch((error)=>{
            console.log(error)
            response.json({error})
        })
    }
)

router.get(
    '/api/search/author/:authorString',
    (request,response) => {
        console.log(request.params.authorString);
        var searchTerm = request.params.authorString;
        Search.findBookByAuthor(searchTerm)
        .then((data)=>{
            response.json({data})
        })
        .catch((error)=>{
            console.log(error)
            response.json({error})
        })
    }
)



module.exports = router;