# API response project for AAJTAK

Given code repo is regarding Node JS API building
In the following code, we create a server in Node JS and we can Pull and Push data by using postman API request.

## database
We use the MongoDB database for storing the database. For running the project you required [MongoDB](https://www.mongodb.com/) service enabled.

## Installation

Use the package manager [NPM](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## Installation

Use the following command to run the project

```bash
npm start
```

### use following URL in [POSTMAN](https://www.postman.com/) for pushing data
```bash
http://localhost:3000/v1/pushData/push
```
#### JSON Content for pushing data
```base
{
    "collection":"customers",
    "user_id":"125",
    "contact":"8574737272",
    "address":"Mumbai"
}
```
### use following URL for pulling data
```bash
http://localhost:3000/v1/pullData/pull
```
#### JSON Content for pulling data
```base
{
    "collection":"customers",
    "user_id":"125",
}
```
