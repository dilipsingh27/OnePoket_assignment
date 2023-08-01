const fs = require("fs");

const wordsCounterInFile = (file, callback) => {
  //if file does not exist
  if (!fs.existsSync(file)) {
    callback(new Error(`file ${file} does not exist`), null);
    return;
  }
  
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    const wordLists = data.trim().split(/\s+/);
    // console.log(wordLists);
    const wordCount = wordLists.length;
    callback(null, wordCount);
  });
};

const file = "data.txt";
wordsCounterInFile(file, (err, wordCount) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(`total number of words in the file ${file}: ${wordCount}`);
  }
});
