let https = require('http')
let fs = require('fs')
//let str = 'http://localhost:8080/VODA.html'
//let url = require('url')
https.createServer(function(req, res){
	fs.readFile('SafeBook.html', function(e, data){
		if (e){
			res.writeHead(404, {'Content-Type': 'text/html'})
			res.write('404 Error File Not Found!')
			return res.end()
		}else{
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.write(data)
		return res.end()
	}})
}).listen(8080)