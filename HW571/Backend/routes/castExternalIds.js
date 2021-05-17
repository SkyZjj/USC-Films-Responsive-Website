const express = require('express');
const router= express.Router();
const axios = require('axios');

router.get('/:id',function(req,res){
    let id = req.params.id;
    let url = "https://api.themoviedb.org/3/person/"+id+"/external_ids?api_key=684641b6b7fea9789754590d86d5f685&la nguage=en-US&page=1"; 
    axios.get(url).then(posts=>{
        res.json(posts.data);
    }).catch(err=>{
        res.send(err);
    })
});


module.exports=router;
