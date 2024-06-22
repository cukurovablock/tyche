const fs = require("fs");
const path = require("path");

const directories = [
  path.join(__dirname, "src", "app"),
  path.join(__dirname, "src", "components"),
  path.join(__dirname, "src", "services"),
];
const commentSyntax = "//"; // Change to appropriate comment syntax for your files

function prependFilenameToFiles(directory) {
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
        prependFilenameToFiles(filePath);
      } else if (fileExtension === ".tsx" || fileExtension === ".js") {
        fs.readFile(filePath, "utf8", (err, data) => {
          if (err) throw err;

          const fileName = path.basename(filePath);
          const commentLine = `${commentSyntax} ${fileName}\n`;

          // Check if the file already has the comment
          if (!data.startsWith(commentLine)) {
            const updatedData = commentLine + data;
            fs.writeFile(filePath, updatedData, "utf8", (err) => {
              if (err) throw err;
              console.log(`Prepended file name to ${fileName}`);
            });
          }
        });
      }
    });
  });
}

directories.forEach((directory) => prependFilenameToFiles(directory));
