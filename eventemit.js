var sukien = require('events');
var hamchinh = require('util');

var Person = function(name){
    this.name = name;
}

hamchinh.inherits(Person, sukien.EventEmitter);

var skyalbert = new Person('toan');
var blackfox  = new Person('hai');
var dealfox  = new Person('trung');

var people = [skyalbert, blackfox, dealfox];

people.forEach(function(person){
    person.on('talk',function(msg){
        console.log(person.name + ' said that: '+ msg);
    })
})

blackfox.emit('talk','hello guy');
skyalbert.emit('talk','hello guy');
dealfox.emit('talk','hello guy');
// var test = new sukien.EventEmitter();
// test.on('something',function(msg){
//     console.log(msg);
// })
// test.emit('something','Helo guy, How are you');



