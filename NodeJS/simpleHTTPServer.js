var sys = require("sys"),
my_http = require("http");
my_http.createServer(function(request,response){
	sys.puts("I got kicked");
	response.writeHeader(200, {"Content-Type": "text/plain"});
	response.write("Hello world");
	response.end();
}).listen(8080);
sys.puts("Server running on 8080");
