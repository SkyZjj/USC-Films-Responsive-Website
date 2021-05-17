const express = require('express');
const router= express.Router();
const axios = require('axios');

router.get('/:media_type/:id',function(req,res){
    let id = req.params.id;
    let media_type = req.params.media_type; 
    let url = "https://api.themoviedb.org/3/"+media_type+"/"+id+"/recommendations?api_key=684641b6b7fea9789754590d86d5f685&language=en-US&page=1"; 
    axios.get(url).then(posts=>{
        res.json(posts.data);
    }).catch(err=>{
        res.send(err);
    })
});

module.exports=router;
