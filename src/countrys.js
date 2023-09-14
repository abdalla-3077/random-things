function RanCountry() {
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


  const Country = randomCountry
  return Country
}

module.exports = RanCountry;