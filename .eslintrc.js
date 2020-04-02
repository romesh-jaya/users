module.exports = {
    "extends": [
        "favoritemedium-typescript/config/react",
        "eslint:recommended",
         "plugin:prettier/recommended",
    ],
    "env": {
        "node": true,
        "es6": true
      },
      
      "rules": {
        "no-console": "off"
      },
    
      "parserOptions": {
        "sourceType": "module"
    }
};