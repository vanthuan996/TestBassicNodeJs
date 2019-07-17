var file = require('fs');

console.log('Bat dau:');
// var readFile = docfile.readFileSync('test.txt','utf8');
// console.log('Thuc hien: ' + readFile);
// console.log('Ket thuc:');

var readFileNot = file.readFile('test.txt','utf8',function(err,data){
    if(true) console.log('dung ' + data);
    else return 'sai';
})

console.log('Ket thuc:');
// var writeFile = docfile.writeFileSync('testwrite.txt', readFile)