# Readable Project

This project is part of Udacitys course React Nanodegree.


## Project description
In this project user is able to add posts and comments to those posts. The project also includes
functionality to edit and delete posts. Each post can also have a category but there currently is
no way to add categories. The project has four views: main, post details, post form and category. 

Note: Each post has a author put there is no authentication or any identified user functionality in the project beyond this. The forms are at the moment also missing proper validations for input.

* Main view lists all posts and categories. User can always get back to main view by clicking on the
Readable App header on top of each page.

* Category view lists all posts for a selected category. User can get to the category view by
clicking a category on the main view.

* Post Details view lists all details of the selected post as well as all of its comments. The comments also have the add, delete and edit functionalities.

* Post form can be used to create a new post or edit existing one. It is accesible from the create new post and edit buttons.

* User can now up vote and down vote both posts and comments.

## Running the project

To run the project you need to install all the dependencies for the API server and the client-readable projects. Open two terminal windows. With one of them navigate to `api-server` folder and run commands:

* `npm install`
* `npm start`

You now have the API server running in `localhost:3001`. To start the client-readable with the other
terminal navigate to `client-readable` folder and run the commands:

* `npm install`
* `npm start`

You now have the client readable server running in `localhost:3000`. With your browser navigate to url `http://localhost:3000/`.


## Developing

First you need to be able to start the project. Look instructions from the `Running the project` section.

### Project structure

The project is structured on the top level to `api-server` and `client-readable` projects. The API server is the backend provided by Udacity. It is implemented using NodeJs. The `client-readable` is the frontend project implemented with ReactJs and Redux.

The `client-readable` project has the `public` folder which contains the template html. The actual implementation can be found under `src` folder.

The initialization of React application and Redux is in `src/index.js`. The createtion of the Redux store is in its own file `src/store.js`. The Redux actions are in `src/actions/index.js` and the reducers are under `src/reducers`.

The React Components can be found under `src/components`. The `stc/components/App.js` contains the Routes for the project. Under `src/components/views` are the container components for all the four views of the project. They are the only components connected to Redux. The other components are organized to folders by the feature they are related to.

The API to the API server is implemented in `src/utils/api.js`. Also in the utils folder there is `uuid.js` which is used to generate ids for the posts and comments which are created by the user.

#### Styles

The project uses bootsrap which is included via link in `public/index.html`. The project also has one own css file which is `src/index.css`.

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

These are the endpoints of the server API provided by Udacity. Implementations can be found in `api-server/server.js`.

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

