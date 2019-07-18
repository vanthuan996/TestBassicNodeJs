var http = require('http');
var file = require('fs');


var server = http.createServer(function (req, res) {
  //điều hướng link
  console.log('nguoi dung yeu cau link: ' + req.url);
  if (req.url === '/home' || req.url === '/') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      file.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    }
    else if(req.url === '/login'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      file.createReadStream(__dirname + '/login.html', 'utf8').pipe(res);
    }
    else if(req.url === '/api/register'){
        var register = [{name: 'sky albert'}, {age: '21', username: 'admin'}, {password: '123456'}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(register));
    }
    else if(req.url === '/404'){
      res.writeHead(404, {'Content-Type': 'text/html'});
      file.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
    }

  // lấy Json
  //  res.writeHead(200, {'Content-Type': 'application/json'});
  //  var doituong= {
  //     ten: 'Thuan',
  //     nghenghiep: 'Developer',
  //     age: '21',
  //     que: 'Gia Lai' 
  //  };
  //  res.end(JSON.stringify(doituong));

  // lấy html
  //res.writeHead(200, {'Content-Type': 'text/html'}); 
  // var docluong = file.createReadStream(__dirname + '/index.html', {encoding: 'utf8'});
  // lấy txt
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //var docluong = file.createReadStream(__dirname + '/readMe.txt', {encoding: 'utf8'});

  // docluong.pipe(res); // đọc chừng nào ghi ra chừng đấy
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

