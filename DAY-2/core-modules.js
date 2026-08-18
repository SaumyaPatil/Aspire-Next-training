// The node:os module provides operating system-related utility methods and properties.
// can check - platform, CPU architecture, total/free memory, and uptime.
const os = require("os");
console.log(os.platform(), os.freemem(), os.cpus().length);

// __dirname provides absolute path to the current directory
const path = require("path");
console.log(path.join(__dirname, "data", "file.txt"));

// returns extension of the path
console.log(path.extname("report.pdf")); // .pdf

const events = require("events");
class MyEmitter extends events.EventEmitter {}
const emitter = new MyEmitter();
emitter.on("greet", (name) => console.log(`Hello, ${name}`));
emitter.emit("greet", "Class");
