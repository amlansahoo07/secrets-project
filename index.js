// Import necessary modules
import express from "express"; // Express is a minimal and flexible Node.js web application framework
import bodyParser from "body-parser"; // Body-parser is a middleware to parse incoming request bodies
import { dirname } from "path"; // Path module provides utilities for working with file and directory paths
import { fileURLToPath } from "url"; // URL module provides utilities for URL resolution and parsing

// Use fileURLToPath to get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create an Express application
const app = express();
const port = 3000; // Define the port number the server will listen on

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Global variable to keep track of the password check status
var passwordFlag = false;

// Middleware function to check the password
function checkPassword(req, res, next) {
    const password = req.body["password"]; // Get the password from the request body
    if (password === "ILoveProgramming") {
        passwordFlag = true; // Set passwordFlag to true if the password matches
    }
    next(); // Proceed to the next middleware or route handler
}

// Use the checkPassword middleware for all incoming requests
app.use(checkPassword);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Route handler for the root URL ("/")
app.get("/", (req, res) => {
    // Send the index.html file when the root URL is accessed
    res.sendFile(__dirname + "/public/index.html");
});

// Route handler for POST requests to "/check"
app.post("/check", (req, res) => {
    if (passwordFlag) {
        // If passwordFlag is true, send the secret.html file
        res.sendFile(__dirname + "/public/secret.html", () => {
            passwordFlag = false; // Reset passwordFlag to false after sending the file
        });
    } else {
        // If passwordFlag is false, redirect to the root URL
        res.redirect("/");
    }
});
