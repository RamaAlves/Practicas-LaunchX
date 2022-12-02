const http = require('http'); //cargando un modulo de Node.js
const url = require('url');

const rd = require('./modules/retrievedate') //cargamos un modulo propio que esta en
// ./modules/retrievedate.js
//este modulo solo devuelve la fecha y hora actual del server

http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write("La fecha y hora es: "+ rd.RetrieveDate());
    const query= url.parse(req.url, true).query;
    const text= query.year + " "+ query.month;
    res.write(text);
    res.write(req.url);
    res.end('Holaaaaaaaa Mundo!!!!!');
}).listen(8080);