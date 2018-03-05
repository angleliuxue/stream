//nodejs stream
var http = require('http');
var fs = require('fs');
var path = "./index.html";
http.createServer(handler).listen(8000);
function handler(req,res){
	var rs = fs.createReadStream(path);
	rs.pipe(res,{end:false});
	rs.on('end',function(){
		res.writeHead(200);
		res.end();
	});
}
