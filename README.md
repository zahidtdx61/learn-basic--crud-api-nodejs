# Basic CRUD operations

A basic CRUD learning project using Express and MongoDB.

## Description

This project is designed to help you learn how to perform CRUD (Create, Read, Update, Delete) operations using Express.js and MongoDB. It provides various routes for each CRUD operation, allowing you to practice and understand the fundamentals of working with a database.

## Features

- `Create`: Add new data to the database.
- `Read`: Retrieve data from the database.
- `Update`: Modify existing data in the database.
- `Delete`: Remove data from the database.

## Routes

This project provides the following routes for performing CRUD operations:

- `POST /add`: Creates a new user in the database.

  - User details must be provided in `request body` as `json` data.

    ```json
      {
        "email": "user_email",
        "name": "user_name",
        "age": "user_age",
        "favFood": "favourite food"
      }
    ```

- `GET /find-all`: Retrieves all user data from the database.
- `GET /find`: Retrieves a specific user data by its `email`.

  - Email must be provided in `request body` as `json` data

    ```json
    {
      "email": "user_email"
    }
    ```

- `PUT /update`: Updates a specific user data by email.

  - Email and rest of field which will be modified must be provided in `request body` as `json` data.

    ```json
      {
        "email": "previous_email",
        "name": "user_name",
        "age": "user_age",
        "favFood": "favourite food"
      }
    ```

- `DELETE /delete`: Deletes a specific user data by `email`.

  - Email must be provided in `request body` as `json` data

    ```json
    {
      "email": "user_email"
    }
    ```

You can use these routes to interact with the database and practice CRUD operations.

## Usage

To use this project, follow these steps:

1. Clone the repository: `git clone https://github.com/zahidtdx61/learn-basic--crud-api-nodejs.git`
2. Install dependencies: `npm install`

3. Create a `.env` file and and add the following env variables

```bash
PORT=<port number of your choice>
MONGO_URL=<url of your MongoDB database>
```

4. Start the server: `npm run dev`

5. Open your browser and navigate to `http://localhost:<PORT>`
6. Use the provided routes to perform CRUD operations.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
