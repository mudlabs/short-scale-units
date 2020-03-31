const fs = require("fs");


module.exports.clean = function () {
  try {
    let file, data, nocomments;
    const filePath = "dist/index.js";
    const regex = new RegExp(/((^\/\*\*\n(\D\W.+\n)+))/, "gm");
    
    fs.accessSync(filePath, fs.constants.F_OK);

    file = fs.openSync(filePath, "r+", fs.constants.O_RDWR);
    data = fs.readFileSync(file, "utf8");
    nocomments = data.replace(regex, "");
    
    fs.writeFileSync(filePath, nocomments);
    return "Comments Removed";
  } catch (error) {
    return error;
  }
}