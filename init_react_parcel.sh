#!/bin/bash


# colors
# Regular Colors
Black='\033[0;30m'        # Black
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Yellow='\033[0;33m'       # Yellow
Blue='\033[0;34m'         # Blue
Purple='\033[0;35m'       # Purple
Cyan='\033[0;36m'         # Cyan
White='\033[0;37m'        # White

echo -e "$Blue ________________ creating react app with parcel ________________ $White"
echo -e "$Yello for more configurations you can  edit these files:$White (package.json , .eslinrc.json, .gitignore)"
echo -e "$Purple generating config files ...$White"
echo '{
    "env": {
        "es6": true,
        "node":true ,
        "browser": true,
        "es2021": true
    },
    "settings":
    {
        "react":{
            "version":"detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended"
    ],

    "rules":{
        "react/prop-types":0,
        "react/reatc-in-jsx-scope":0
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y",
        "react-hooks"
    ]
}' > .eslinrc.json

echo -e "$White modify $Red .eslinrc.json $White for more eslint configs"

echo -e "$Purple Building project structure $White"
mkdir  components public utils src && cd src && touch index.html app.js && cd ..

cd public && mkdir assets && cd assets && touch styles.css && cd ../..

echo -e "$Green Initializing git repo$White"
git init
echo -e "$Yellow generating package.json$White"

echo '{
  "name": "DEFAULT",
  "version": "1.0.0",
  "description": "",
  "main": "./src/app.js",
  "scripts": {
    "dev": "parcel ./src/index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "eslint": "^8.18.0",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-react": "^7.28.0",
    "eslint-plugin-react-hooks": "^4.3.0",
    "parcel": "^2.6.1",
    "process": "^0.11.10"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.1.1",
    "@fortawesome/free-solid-svg-icons": "^6.1.1",
    "@fortawesome/react-fontawesome": "^0.1.18",
    "interweave": "^13.0.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "browserslist": [
    "last 2 chrome versions"
  ]
}
' > package.json

echo -e "$White you can change name of the project and other configs by modifying package.json"

echo -e "$Yellow generating .gitignore file $White"

echo "node_modules
.parcel-cache/
dist/
.env
.DS_Store
coverage/
.vscode/" > .gitignore
echo -e "$Yellow generating index.html$White"

cd src && echo "<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/assets/styles.css"> 
    <title>Document</title>
</head>
<body>
    <div id="root"></div>

    
    <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
    <script src="./app.js" type="module"></script>
</body>
</html>" > index.html && cd ..

echo -e "$White install modules by executing command : $Green npm install"

