var fs = require("fs");

var file = process.argv[2];
fs.readFile(file, function (err, buf) {
  if(err){
    console.log("error")
  }
  else {
    var str = buf.toString().split("\n").length - 1;
    console.log(str);
  }
})