var http = require('http');
var file = require('fs');


var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var docluong = file.createReadStream(__dirname + '/readMe.txt', {encoding: 'utf8'});
    docluong.pipe(res);
  //  res.end('Chạy xong rồi ahihi!');
});

server.listen(3333, '127.0.0.1');
console.log('Server running on port 3333')

// var file = require('fs');

// //đọc luồng
// var docluong = file.createReadStream(__dirname + '/readMe.txt', {encoding: 'utf8'});
// var ghiluong = file.createWriteStream(__dirname + '/writeMe.txt');

// docluong.on('data', function(chunk){
//     console.log('Ghi luong nao: ');
//     ghiluong.write(chunk);
// })

