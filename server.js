const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', function(req, res){
  const about = {
    avatar_url: 'https://avatars1.githubusercontent.com/u/25770699?s=460&u=f2be1fa6c77cc501a1adecc2123fa359d75ce68a&v=4',
    name: 'Vitor Navarro',
    role: 'Analista - Gulf',
    description: 'Programador full-stack.',
    links: [
      {name: 'Github', url: 'https://github.com/navarroaraujo'},
      {name: 'LinkedIn', url: 'https://www.linkedin.com/in/navarroaraujo/'}
    ]
  }

  return res.render('about', {about});
});

server.get('/portfolio', function(req, res){
  return res.render('portfolio', {itens: videos});
});

server.listen(5000, function(){
  console.log('server is running');
})
