# B41_41_WEB_011_Code-Creators


## Introduction:

Quick Cart is a basic e-commerce website inspired by Amazon. The project aims to simulate a simple online shopping experience, allowing users to sign up, sign in, browse products, and manage a cart. It also includes an admin panel where administrators can control products (though no functionality is added yet). The system authenticates both users and admins using secure login mechanisms stored in local storage. This project serves as an introduction to building e-commerce websites, focusing on essential features like user authentication, cart management, and basic admin controls.

## Purpose:
The goal is to create a simple e-commerce website to understand how online shopping platforms work.

### Core Functionality:
**Home Page:**

 Displays all products by horizontal scrolling.

**Admin Panel:**

 Lets admins control products (no functionality added yet).

 **User Authentication:** 

Users can sign up, sign in, and create accounts.
**Admin Authentication:** 

Admins can sign up and log in separatly.

**Cart Page:** 

Allows users to view items for purchase.



## Project Type
Frontend.

## Deplolyed App
Frontend: https://web205quickcart.netlify.app/

Database: Local storage.


## Video Walkthrough of the project
Attach a very short video walkthough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features
### Features of Quick Cart:

**Home Page:**

Displays the main sections of the website, including a navbar, hero section, body, and footer, added horizontal scrolling of products.

### User Authentication:

**Sign Up:**

 Users can create a new account by providing a username and password.

**Sign In:** 

Users can log into their existing accounts using their credentials.

**Admin Authentication:**

*Admin Sign Up:* Admins can create an account with a username and password.

*Admin Sign In:* Admins can log into the admin panel with their credentials.

**Local Storage Authentication:**

User and admin login information is securely stored in local storage, ensuring that users remain logged in until they log out.
This set of features provides the basic foundation of an e-commerce website, with room for further expansion.

**Admin Panel (No functionality yet):**

Designed to allow admins to manage products, though it currently lacks interactive features.

**Cart Page:**

Users can view and manage the items they’ve added to their cart, though checkout functionality is not implemented yet.



## design decisions or assumptions

### Design Decisions:

**Separate User and Admin Authentication:**

 Different sign-up/sign-in pages for users and admins.
Local Storage for Authentication: Using local storage to keep users logged in.

**Home Page Layout:**

 Simple structure with navbar, hero section, and footer with functionality.

**Admin Panel Placeholder:**

 Admin panel created without functionality for future development.
Core Features Focus: Focused on basic features like authentication and cart management.

### Assumptions:

**Local Storage is Enough:**

 Assuming local storage is sufficient for demo-level authentication.

**Minimal Admin Security:**

 Admin panel security is basic for now.

**Cart Functionality Not Fully Implemented:***

 Full cart features like checkout will be added later.

***Single-Page Structure:***

 The website is designed as a simple single-page application.
These decisions and assumptions shape the project's structure and future direction.

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

```bash
git clone https://github.com/ranajit001/B41_41_WEB_011_Code-Creators.git
cd B41_41_WEB_011_Code-Creators
npm install
npm start
```


## User Features:

**Sign Up:** 

Create an account on the Sign Up page.

**Sign In:**

 Log in with your credentials on the Sign In page.

**Browse Products:** 

View products on the Home Page, scroll left/right to see more.

### Admin Features:

***Admin Sign Up/Sign In:**

 Create an admin account and log in to access the Admin Panel (no functionality yet).

**Local Storage:**

 Credentials are stored in local storage to keep users logged in.

**Product Scrolling:**

 Use left/right arrows to scroll through the product row.





## Credentials
Provide user credentials for autheticated pages.


## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Node.js.
- Local Storage.
- html.
- css.
