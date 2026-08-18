const fs = require("fs");

// Synchronous — blocks the event loop until done
const dataSync = fs.readFileSync("file.txt", "utf-8");
console.log(dataSync);

// Asynchronous (callback-based) — non-blocking
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});

console.log("This logs before the async file read finishes!");

fs.writeFile("output.txt", "Hello, file!", (err) => {
  if (err) throw err;
  console.log("File written.");
});
