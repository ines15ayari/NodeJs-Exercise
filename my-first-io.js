var fs = require("fs");

var buf=fs.readFileSync(process.argv[2]);

var str = buf.toString().split('\n').length - 1;
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;

console.log(str);