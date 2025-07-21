# 1AngularCheese

A simple application to manage a list of cheeses, built with Angular.

## Description

This project is a web application that allows users to browse, view, add, and update a list of cheeses. It is built with Angular and uses a local `db.json` file as a database.

## Features

* View a list of cheeses
* Filter cheeses by name or country of origin
* View the details of a specific cheese
* Add a new cheese to the list
* Update an existing cheese

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/1-angular-cheese.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:4200/`.

## Project Structure

The project is organized as follows:

* `src/app/components`: Contains reusable components.
* `src/app/formatges`: Contains the main components for managing cheeses, including the list, detail, add, and update pages.
* `src/app/models`: Contains the `Formatge` interface.
* `src/app/pages`: Contains the main pages of the application, such as the home page and the about page.
* `src/app/services`: Contains the `FormatgeService`, which is responsible for fetching and managing the cheese data.

## Available Pages

* **Home**: Displays a list of all cheeses. You can filter the list by name or country of origin.
* **Formatges**: Same as the home page.
* **Formatges/:id**: Displays the details of a specific cheese.
* **Formatges/add**: Allows you to add a new cheese to the list.
* **Formatges/update/:id**: Allows you to update an existing cheese.
* **About**: Displays information about the application.
