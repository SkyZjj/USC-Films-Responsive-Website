const express = require('express');
const router= express.Router();
const axios = require('axios');

//url/searchs/king
router.get('/:name',function(req,res){
    let name = req.params.name;
    let url = "https://api.themoviedb.org/3/search/multi?api_key=684641b6b7fea9789754590d86d5f685&language=enUS&query="+name; 
    axios.get(url).then(posts=>{
        
        res.json(posts.data.results);
    }).catch(err=>{
        res.send(err);
    })
});

module.exports=router;
