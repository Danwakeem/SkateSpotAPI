require('dotenv').config()
const fs = require('fs');
const actionToRun = process.argv[2];

let params = JSON.parse(fs.readFileSync('dev.config.json'));
for(var i=3;i<process.argv.length;i++) {
  if(/--/gi.test(process.argv[i])) {
    let name = process.argv[i+1]
    let value = process.argv[i+2]
    try {
      params[name] = JSON.parse(value)
    } catch (e) {
      params[name] = value;
    }
  }
}

const action = require(actionToRun).main;

let result = action(params);
Promise.resolve(result)
.then(result => console.log(result))
.catch(error => console.error(error));