const express = require('express')
// fs --> filesystem --> read and write file on system
// express --> filesystem --> read and write file on http server
const port = 3000
const app = express();
app.get('/',function(req, res) {    // function() == ()=>{}
  res.send('Hello World! Its great hgtdhtg')
})

app.listen(port, function()  {
  
  console.log(`Example app listening on port ${port}`)
})

// Creating the Express Application:

// An instance of the Express application is created using express(), and it's assigned to the variable app.
// Defining a Route:

// The app.get() function sets up a route for handling GET requests to the root URL '/'.
// The second argument is a callback function (req, res) => { ... }, which is executed whenever a request is made to the root URL.
// Inside this callback function, res.send() sends the string 'Hello World! Its great' as the response to the client.
// Starting the Express Server:

// The app.listen() method starts the Express server and makes it listen for incoming requests on the specified port (3000).
// The second argument is a callback function, which is executed once the server starts listening for incoming requests.
// Callback Function After Server Starts:

// Inside the callback function passed to app.listen(), the code logs a message to the console indicating that the server is listening on the specified port.
// This callback function is executed once the server starts listening for incoming requests, not specifically once it has started successfully.
// Waiting for Incoming Requests:

// After starting the server, the event loop is activated, and the server begins listening for incoming HTTP requests on port 3000.
// Handling Incoming Requests:

// When a client sends an HTTP request to the server, Express routes the request based on the defined routes.
// In this case, when a client accesses the root URL ('/') using a web browser or an HTTP client, Express triggers the callback function defined for that route.
// The callback function sends the string 'Hello World! Its great' as the response, which is then displayed in the client's browser or captured by the client application.