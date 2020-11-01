Table of Contents

- [What is express](#what-is-express)
- [Prerequisites required for running express](#prerequisites-required-for-running-express)
- [Creating a simple express project](#creating-a-simple-express-project)

## What is express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Express provides a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.

Express provides a thin layer of fundamental web application features, without obscuring Node.js existing features.

Other than this many other web frameworks are build over express.

## Prerequisites required for running express

- Install nodejs, install using an msi downloaded from nodejs website.
  - To check if node is installed properly `node --version`.
- install Express app generator globally using command `npm install -g express-generator`.
  - To verify use command `express -h`.

## Creating a simple express project

Use command `express --view=hbs`, this will create a basic structure of express project which will support handlebars for exceptions and other basic things required.

> A new folder sample-app is created and following steps are performed after navigating to the same path.

- Install dependencies `npm install`.
- To start app `npm start`.
- By default application starts on port 3000. Navigate to any browser and launch `http://localhost:3000/`. You should be able to see **Welcome to express** on screen.
- To stop application ``` ctrl+c ``` and choose y.



