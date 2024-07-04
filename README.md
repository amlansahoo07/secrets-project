# Secrets

A simple Node.js and Express web application that serves password-protected content. This project demonstrates basic use of middleware for request handling and password checking.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Introduction

This project is a basic web application built with Node.js and Express. It includes a simple password protection mechanism for accessing a page with secret content. The application uses middleware to handle password checking and serve content based on the password verification.

## Features

- Simple password protection
- Middleware for request handling
- Serves static HTML content
- Demonstrates use of `express`, `body-parser`, and `path` modules

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/amlansahoo07/secrets-project.git
   cd secrets-project
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the server:**

   ```sh
   node index.js
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Access the application:**
   Open your web browser and go to `http://localhost:3000`.

2. **Enter the password:**
   On the homepage, enter the password `ILoveProgramming` and click "Submit".

3. **View the secrets:**
   If the correct password is entered, you will be redirected to the secret page showing a list of secrets.

## File Structure

```
.
├── public
│   ├── index.html
│   └── secret.html
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

- **public/**: Contains the static HTML files.
  - **index.html**: The homepage with a form to enter the password.
  - **secret.html**: The secret page that displays the secrets if the correct password is entered.
- **index.js**: The main server file that sets up the Express application, handles routes, and implements password checking middleware.
- **package.json**: Lists the project dependencies and scripts.
- **package-lock.json**: Locks the dependency versions.

## Acknowledgements

This project is inspired and developed as part of [Angela Yu's Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)'s on Udemy.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
