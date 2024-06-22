const fs = require("fs");
const path = require("path");

const directories = [
  path.join(__dirname, "src", "app"),
  path.join(__dirname, "src", "components"),
  path.join(__dirname, "src", "services"),
];
const commentSyntax = "//"; // Change to appropriate comment syntax for your files

function prependOrReplaceFilenameToFiles(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const fileExtension = path.extname(file);

      // Check if the file has a .tsx or .js extension
      if (fs.lstatSync(filePath).isDirectory()) {
        // Recursively process directories
        prependOrReplaceFilenameToFiles(filePath);
      } else if (fileExtension === ".tsx" || fileExtension === ".js") {
        fs.readFile(filePath, "utf8", (err, data) => {
          if (err) throw err;

          const relativeFilePath = path.relative(__dirname, filePath);
          const commentLine = `${commentSyntax} ${relativeFilePath}`;
          const lines = data.split("\n");

          // Check if the first line is a file name comment
          if (
            lines[0].startsWith(commentSyntax) &&
            lines[0].includes(path.basename(filePath))
          ) {
            lines[0] = commentLine;
          } else {
            lines.unshift(commentLine);
          }

          const updatedData = lines.join("\n");
          fs.writeFile(filePath, updatedData, "utf8", (err) => {
            if (err) throw err;
            console.log(`Updated file path in ${relativeFilePath}`);
          });
        });
      }
    });
  });
}

directories.forEach((directory) => prependOrReplaceFilenameToFiles(directory));
