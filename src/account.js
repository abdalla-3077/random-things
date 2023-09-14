const Password = require("./token")
function RndAccount(options = {}) {
    const {
      domain = 'example.com',
      usernameLength = 10,
      includeSpecialChars = false,
      passwordLength = 12
    } = options;
  
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789' +
      (includeSpecialChars ? '!@#$%^&*()_-+=[]{}|;:,.<>?/' : '');
  
    let randomPart = '';
    for (let i = 0; i < usernameLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomPart += characters[randomIndex];
    }
  
    const email = randomPart + '@' + domain;
  
 return {
    username : randomPart,
    email : email,
    password : Password(passwordLength)
 }
  }
  
  module.exports = RndAccount;
  