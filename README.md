# Readable Project

This project is part of Udacitys course React Nanodegree.


## Project description


## Running the project

To run the project you need to install all the dependencies for the API server and the client-readable projects. Open two terminal windows. With one of them navigate to `api-server` folder and run commands:

* `npm install`
* `npm start`

You now have the API server running in `localhost:3001`. To start the client-readable with the other
terminal navigate to `client-readable` folder and run the commands:

* `npm install`
* `npm start`

You now have the client readable server running in `localhost:3000`. With your browser navigate url `http://localhost:3000/`.


## Developing

First you need to be able to start the project. Look instructions from the `Running the project` section.


## API Server

The API server was provided by Udacity for the project. Its implementation can be found in
`api-server`. In order to install the servers dependencies run `npm install` inside the `api-server`
folder. To run the server run `npm start` inside the `api-server` folder.

### Using The Server

#### Include An Authorization Header

All requests should use an **Authorization header**. It at the moment doesn't matter what this
header contains but it must be present in each request. The implementation for sending request
can be found in `client-readable/src/utils/api.js`

#### API Endpoint

These are the endpoints of the server API provided by Udacity:

| Endpoints       | Usage          | Params         |
|-----------------|----------------|----------------|
| `GET /categories` | Get all of the categories available for the app. List is found in `categories.js`. Feel free to extend this list as you desire. |  |
| `GET /:category/posts` | Get all of the posts for a particular category. |  |
| `GET /posts` | Get all of the posts. Useful for the main page when no category is selected. |  |
| `POST /posts` | Add a new post. | **id** - UUID should be fine, but any unique id will work <br> **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> **title** - [String] <br> **body** - [String] <br> **author** - [String] <br> **category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. |
| `GET /posts/:id` | Get the details of a single post. | |
| `POST /posts/:id` | Used for voting on a post. | **option** - [String]: Either `"upVote"` or `"downVote"`. |
| `PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
| `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br> Sets the parentDeleted flag for all child comments to 'true'. | |
| `GET /posts/:id/comments` | Get all the comments for a single post. | |
| `POST /comments` | Add a comment to a post. | **id** - Any unique ID. As with posts, UUID is probably the best here. <br> **timestamp** - [Timestamp] Get this however you want. <br> **body** - [String] <br> **author** - [String] <br> **parentId** - Should match a post id in the database. |
| `GET /comments/:id` | Get the details for a single comment. | |
| `POST /comments/:id` | Used for voting on a comment. | |
| `PUT /comments/:id` | Edit the details of an existing comment. | **timestamp** - timestamp. Get this however you want. <br> **body** - [String] |
| `DELETE /comments/:id` | Sets a comment's deleted flag to `true`. | &nbsp; |

