var file = require('fs');


//file.unlink('testwrite.txt'); // xóa file txt
// file.mkdirSync('foldertest'); //tạo file foder
// file.rmdirSync('foldertest'); //xóa file foder

file.rmdir('public',function(){
    file.readFile('test.txt','utf8', function(err,data){
        file.writeFileSync('./public/results.txt', data);
    })
})