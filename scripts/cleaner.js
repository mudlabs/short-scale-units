const fs = require("fs");


module.exports.commentCleaner = function () {
  const file = "index.js";
  const filePath = "dist/index.js";
  const regex = new RegExp(/((^\/\*\*\n(\D\W.+\n)+))/, "gm");

  fs.access(filePath, fs.constants.F_OK, error => {
    if (error) return console.log("fileAccessError:", error);
    fs.open(filePath, "r+", fs.constants.O_RDWR, (error, fd) => {
      if (error) return console.log("openFileError:", error);
      fs.readFile(fd, "utf8", (error, data) => {
        if (error) return console.log("readFileError:", error);
        const commentless = data.replace(regex, "");
        fs.writeFile(filePath, commentless, error => {
          if (error) return console.log("writeFileError:", error);
          return console.log("Comments removed from " + file);
        });
      });
    });    
  });
}