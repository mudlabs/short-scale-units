import * as fs from "fs";

function clean () {
  try {
    const filePath = "dist/index.js";

    fs.accessSync(filePath, fs.constants.F_OK);

    const regex = new RegExp(/((^\/\*\*\n(\D\W.+\n)*))/, "gm");
    const file = fs.openSync(filePath, "r+", fs.constants.O_RDWR);
    const data = fs.readFileSync(file, "utf8");
    const nocomments = data.replace(regex, "");

    fs.writeFileSync(filePath, nocomments);
    
    return "Comments Removed";
  
  } catch (error) {
  
    return error;
  
  }
}

clean();