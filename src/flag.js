function RanFlag() {
    const fs = require("fs");
    const path = require("path");
  
    const jsonFilePath = path.resolve(
      __dirname,
      "../Json/countries.json"
    );
  
  
    const fileData = fs.readFileSync(jsonFilePath, "utf-8");
    const countries = JSON.parse(fileData);
  
    const randomCountry =
      countries[Math.floor(Math.random() * countries.length)];
  
  
    return {
        flag : randomCountry.flags,
        names : randomCountry.translations
    }
  }
  
  module.exports = RanFlag;