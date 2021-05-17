const express = require('express');
const router= express.Router();
const axios = require('axios');
const { json } = require('express');
router.get('/',function(req,res){
    let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=684641b6b7fea9789754590d86d5f685&language=en- US&page=1";
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