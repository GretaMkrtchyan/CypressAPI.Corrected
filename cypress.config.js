const { defineConfig } = require("cypress");

module.exports = defineConfig({
 env: {
    token: 'Bearer 9c84b42d1dc6b0f3d0e29d85bdbc121c875d36a94d6e24ad0b673cf0b24bfc0c'
       //implement node event listeners here
    },
    e2e:{
      baseUrl:'https://gorest.co.in/public/v2'
    }
  });
