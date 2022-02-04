
<h1 align="center">
🌐 MERN Stack [Training Application]
</h1>
<p align="center">
<img src="https://img.shields.io/badge/javascript-yellow" />
    <img src="https://img.shields.io/badge/mongoDB-purple" />
    <img src="https://img.shields.io/badge/express-red" />
    <img src="https://img.shields.io/badge/react-green" />
    <img src="https://img.shields.io/badge/graphQL-yellow" />
    <img src="https://img.shields.io/badge/apollo-blue" />
</p>


[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/t-ho/mern-stack)](https://github.com/t-ho/mern-stack/blob/master/LICENSE)
 [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)[![npm version](https://badge.fury.io/js/graphql.svg)](https://badge.fury.io/js/graphql)
 <img src="https://img.shields.io/badge/CRM-ReactJS-blue?logo=react">
<img src="https://img.shields.io/badge/Backend-NodeJS-green?logo=node.js">
<img src="https://img.shields.io/badge/DataBase-MongoDB-lightgreen?logo=mongoDB">




## ⚡️ Quick start
Run `npm i` to install [npm](https://www.npmjs.com/) dependencies! 
Follow by `npm start`🎉


## 📖 Project 
```
AS AN employer
I WANT to enroll employees in training courses 
SO THAT they can satisfy on-the-job training requirements.
```

This training application is intended to serve as a full-stack Mern-stack application. The stack is made of MongoDB, Express, React, Redux, graphql and apollo.

## ⚙️ Commands & Options
To start `server`, `client`, run:

```bash
# In the root directory (mern):
npm start
# Server API is running at http://localhost:SERVER_PORT (http://localhost: by default)
# Web client is running at http://localhost:PORT (http://localhost:3001 by default)
```

### Screenshots📝

![screenshot2](https://user-images.githubusercontent.com/87583026/152462021-41e01498-b189-4053-8f96-932fce2cc152.PNG)

### `deploy`

https://crispy-gigglers.herokuapp.com/

### Backend
 - [x] Authentication system - [jasonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
    - [x] Sign up - [bcrypt](https://www.npmjs.com/package/bcrypt)
    - [x] Local login - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
    - [x] Email verification
    - [x] Password verification

### Frontend
- Directory `client`
- Created by using [create-react-app](https://www.npmjs.com/package/create-react-app)
  - [x] Redux store - [react-redux](https://www.npmjs.com/package/react-redux)
  - [x] Redux form - [redux-form](https://redux-form.com/8.3.0). NOTE: Migrate to [formik](https://jaredpalmer.com/formik) soon
  - [ ] Authentication pages
    - [x] Sign up page
    - [x] Employee Login page with email and password
    - [x] Course enrollment

### Technical Acceptance Criteria: 25%
Satisfies all of the preceding acceptance criteria plus the following:
```
✅ Application uses React for the front end.
✅Application has a GraphQL API with a Node.js and Express.js server and uses queries and mutations for retrieving, adding, updating, and deleting data.
✅ Application uses MongoDB and the Mongoose ODM for the database and protects sensitive API key information on the server.
✅ Application includes user authentication using JWT.
```

## ⭐️ Project assistance
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 


Together, we can make this project **better** every day! 😘

## ⚠️ License
This project is licensed under MIT.

[![ForTheBadge built-with-swag](http://ForTheBadge.com/images/badges/built-with-swag.svg)](https://GitHub.com/oldgraybuzzard/crispy-giggle)