# Test task - Delivery App

## Briefly about the application

The Food Delivery web application is a user-friendly platform created to make ordering food for delivery easy. It consists of two main pages: the shops page and the shopping cart page. An application focuses on being simple and convenient, allowing users to explore different food options, add items to their cart, and complete their orders seamlessly. The goal is to provide customers with a hassle-free way to satisfy their food cravings from the comfort of their own homes.

### Functionality

Shops Page:

1. Users can browse through a selection of shops and choose their desired shop.
2. The page displays the available goods, which are retrieved from a database.
3. Users can add items to their shopping cart.
4. Users can only order products from a single shop. Once a shop is selected, other shops are disabled.

Shopping Cart Page:

1. Users can view all the products they have added to their cart.
2. They can remove items from the cart or adjust the quantity of each item.
3. Users are required to provide their email, phone number, and delivery address through input fields.
4. When the user clicks the "submit" button, the order details are saved in the database.
5. The cart is saved in the local storage, allowing users to retain their cart's contents across sessions.

Orders History Page:

1. Users can access a dedicated page to view their order history.
2. They can search for their orders using their email and phone number.

## Instructions to run the project

1. Install the project's base dependencies with the `npm install` command.
2. Start development mode by running the `npm start` command.
3. Go to [http://localhost:3000](http://localhost:3000) in your browser. This page
will automatically reload after saving changes to the project files.
