const express = require('express');
const router= express.Router();
const axios = require('axios');
const { json } = require('express');
router.get('/',function(req,res){
    let url = "http://api.themoviedb.org/3/movie/top_rated?api_key=684641b6b7fea9789754590d86d5f685&language=en-US&page=1";
    axios.get(url).then(posts=>{
    res.json(posts.data.results);
        
    }).catch(err=>{
        res.send(err);
    })
});



module.exports=router;