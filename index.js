var Event = require('events').EventEmitter;
var emt = new Event();
var date = new Date()
var name = 'Sergey'
emt.on('someAction',function() {

	console.log (date + name + 'Вошел в чат')
})
emt.on('logout',function() {

	console.log (date + name + 'Вышел из чата')
})
emt.emit('someAction')
emt.emit('logout')



/*var http = require('http');
http.createServer(function (req, res) {
	if(req.url === '/about') {
		console.log(req.methode);
		console.log(req.headers);
		console.log(req.url);
		res.write('<h1>Запросы</h1>');
		res.end();
	} else if(req.url ==='/stop') {
		res.write('<h1>Стоп запрос</h1>');
		res.end();
	}

}).listen(8080);
*/

/*
	var request = require('request');
		request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3',function(err,res,body) {
		var valuta = JSON.parse(res.body)
		console.log(valuta)
		});
*/