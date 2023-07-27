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
[
    {
        "Message": "Server Error"
    },
]
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
[
    {
        "Message": "Server Error"
    },
]
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
[
    {
        "Message": "Server Error"
    },
]
```
