const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "data", "app.txt");
const stream = fs.createReadStream(filePath, {
  encoding: "utf8",
  highWaterMark: 64 * 1024 
});
stream.on("data", (chunk) => {
  process.stdout.write(chunk);
});
stream.on("end", () => {
  console.log("\nFinished reading the file.");
});
stream.on("error", (error) => {
  console.error("Could not read the file:", error.message);
});