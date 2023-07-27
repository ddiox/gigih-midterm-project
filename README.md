# Mid Term Project (Backend Only)

This repository contains the backend of the Tokopedia Play Clone App for Medium-Term Project (Backend Only) from the Generasi Gigih 3.0 program.

## Database Structure

Database Structure using ERD diagram
![alt text](https://github.com/ddiox/gigih-midterm-project/blob/main/docs/database%20structure.png?raw=true)  
we can see that there are 3 collections in the database:

- videos
- products
- comments

## Project Structure

![alt text](https://github.com/ddiox/gigih-midterm-project/blob/main/docs/project%20structure.png?raw=true)

- /db is used to set up and establish a connection to the database in a Node.js application using MongoDB.
- /models would contain all the schema files.
- /controllers would contain all the functions for the APIs.
- /routes would contain all the routes using Express Router.
- index.js would basically be the entry point of the Express application and should be as minimal as possible.
- .env is used to store environment variables in a Node.js application.

## Video Endpoint

- video object

```
{
    "_id": ObjectId,
    "title": String,
    "description": String,
    "thumbnailUrl": String
}
```

## **GET /videos**

Returns all videos thumbnails.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```
[
    {
        "_id": ObjectId,
        "title": String,
        "description": String,
        "thumbnailUrl": String
    },
]
```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## Product Endpoint

- product object

```
{
    "_id": ObjectId,
    "videoID": ObjectId,
    "title": String,
    "description": String,
    "imageUrl": String,
    "link": String,
    "price": Float
}
```

## **GET /videos/:videoID/products**

Returns all products with specified videoID.

- **URL Params**  
  videoID (ObjectId)
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```
[
    {
        "_id": ObjectId,
        "title": String,
        "description": String,
        "imageUrl": String,
        "link": String,
        "price": Float
    },
]
```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## Comment Endpoint

- comment object

```
{
    "_id": ObjectId,
    "videoID": ObjectId,
    "username": String,
    "comment": String,
    "timestamp": Date
}
```

## **GET /videos/:videoID/comments**

Returns all comments with specified videoID.

- **URL Params**  
  videoID (ObjectId)
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```
[
    {
        "_id": ObjectId,
        "username": String,
        "comment": String,
        "timestamp": Date
    },
]
```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **POST /submit-content**

Create a new comment with specified videoID.

- **URL Params**  
  None
- **Data Params**  
  username,
  comment,
  videoID
- **Headers**  
  None
- **Success Response:**
  - Code: 201
  - Content:

```
{
    "success": true
}
```

- **Error Response:**
  - Code: 500
  - Content:

```
{
    "message": "Server Error",
    "success": false
}
```

## How to run in local

1. Clone this repository

```
git clone https://github.com/ddiox/gigih-midterm-project.git
```

2. Install dependencies

```
npm install
```

3. Copy .env.example to .env

```
cp .env.example .env // Linux User
copy .env.example .env // Windows User
```

4. Open .env file and put your database connection url:

```
DB_URL = mongodb://127.0.0.1:27017/put_your_database_name_here
```

5. Run the server

```
npm start
or
node index.js
```

6. Server is running on port 3000

```
http://localhost:3000
```

## Notes

Don't forget to insert data into the videos, products, and comments collections manually via MongoShell or MongoDB Compass before testing the API.
