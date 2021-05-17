const express = require('express');
const router= express.Router();
const axios = require('axios');

router.get('/',function(req,res){
    let url = "http://api.themoviedb.org/3/trending/movie/day?api_key=684641b6b7fea9789754590d86d5f685";
    axios.get(url).then(posts=>{
        

        
        // alert(result);
        // console.log(test[0]);
        res.json(posts.data.results);
        // res.json();
    }).catch(err=>{
        res.send(err);
    })
});
//url/posts?id=123
//url/posts/123


module.exports=router;