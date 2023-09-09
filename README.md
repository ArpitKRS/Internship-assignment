# User Management App

This is a simple web application for managing a list of users. It allows you to add new users, delete existing users, search for users by their names, and implements pagination for the user list.

## Table of Contents

- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Debugging Approach](#debugging-approach)
- [Technical Details](#technical-details)

## Features

### 1. Add User

You can add new users to the list by entering their names in the provided form and clicking the "Add" button. The user will be added to the list with a unique ID.

### 2. Delete User

Each user displayed in the list has a "Delete" button next to their name. Clicking the "Delete" button will remove that user from the list.

### 3. Search User

You can search for users by typing their names in the search bar. The user list will dynamically update to show only the users whose names match the search query.

### 4. Pagination

The user list is paginated, with a specified number of users displayed per page. You can navigate through the user list using pagination buttons.

## Setup Instructions

To set up the User Management App, follow these instructions:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/user-management-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd user-management-app
   ```

3. Open the `hello.html` file in your preferred web browser.

## Usage

### 1. Adding a User:

In the "Add User" section, enter the name of the user you want to add.
Click the "Add" button. The user will be added to the list.

### 2. Deleting a User:

Next to each user's name in the list, there is a "Delete" button.
Click the "Delete" button next to the user you want to remove from the list.

### 3. Searching for Users:

In the "Search User" section, type the name of the user you want to find.
The list will update in real-time to display matching users.

### 4. Pagination:

At the bottom of the user list, you'll find pagination buttons.
Click on the page numbers to navigate through the user list.

## Debugging Approach

During the development of this app, the following debugging approach was used:

### 1. Syntax Errors

Reviewed the code for any syntax errors.
Corrected identified syntax errors.

### 2. Logical Errors

Examined the code for logical errors.
Identified and corrected logical errors, such as incorrect function names and typos.

### 3. Data Fetching Errors

Reviewed the data fetching function.
Reduced the delay in data fetching to facilitate debugging.

### 4. Additional Debugging

Inspected the code for additional issues.
Corrected issues, such as typos in variable names and incorrect property assignments.
Used `console.log` statements to debug and verify changes incrementally.

## Technical Details

-> This project uses vanilla JavaScript for all functionality.

-> User data is stored in memory and does not persist between page reloads.

-> Pagination is implemented to display a manageable number of users per page.
