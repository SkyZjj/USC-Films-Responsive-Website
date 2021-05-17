var  express = require('express');
const path = require('path');
const cors = require('cors');
var app = express();
var posts = require('./routes/posts');
var searchs = require('./routes/searchs');
var currentPlayMovies=require('./routes/currentPlayMovies')
var popularMovies=require('./routes/popularMovies')
var topRatedMovies=require('./routes/topRatedMovies')
var trendingMovies=require('./routes/trendingMovies')
var popularTVShows=require('./routes/popularTVShows')
var topRatedTVShows=require('./routes/topRatedTVShows')
var trendingTVShows=require('./routes/trendingTVShows')
var recommended=require('./routes/recommended')
var similar=require('./routes/similar')
var video=require('./routes/video')
var details=require('./routes/details')
var reviews=require('./routes/reviews')
var cast=require('./routes/cast')
var castDetails=require('./routes/castDetails')
var castExternalIds=require('./routes/castExternalIds')
app.use(cors());
app.use(express.static(path.join(__dirname,'dist/Frontend')))
// app.get('/', (req, res) => res.send('Hello World!'));
app.use('/apis/posts',posts);
app.use('/apis/searchs',searchs);
app.use('/apis/currentPlayMovies',currentPlayMovies);
app.use('/apis/popularMovies',popularMovies);
app.use('/apis/topRatedMovies',topRatedMovies);
app.use('/apis/trendingMovies',trendingMovies);
app.use('/apis/popularTVShows',popularTVShows);
app.use('/apis/topRatedTVShows',topRatedTVShows);
app.use('/apis/trendingTVShows',trendingTVShows);
app.use('/apis/recommended',recommended);
app.use('/apis/similar',similar);
app.use('/apis/video',video);
app.use('/apis/details',details);
app.use('/apis/reviews',reviews);
app.use('/apis/cast',cast);
app.use('/apis/castDetails',castDetails);
app.use('/apis/castExternalIds',castExternalIds);
app.use('/*',function(req,res){
    res.sendFile(path.join(__dirname,'/dist/Frontend/index.html'));
})
app.listen(8080, () => console.log(`Example app listening on port port!`));
module.exports=app;