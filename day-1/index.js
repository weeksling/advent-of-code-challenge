const fs = require("fs");
const fuelRequired = require("./1-fuelRequired");
const fuelWithWeight = require('./2-calcFuelWithWeight')

var lineReader = require("readline").createInterface({
  input: fs.ReadStream("data.csv")
});

// let total = 0;
// lineReader.on("line", function(line) {
//     total += calculateFuelRequired(Number.parseInt(line));
//     console.log(`+ ${line} = ${total}`);
// });

let total = 0;
lineReader.on("line", function(line) {
    total += fuelWithWeight(Number.parseInt(line));
    console.log(`+ ${line} = ${total}`);
})
