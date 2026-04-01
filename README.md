<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# E-Commerce React App

A modern, fully responsive e-commerce web application built using React, Tailwind CSS, and Redux Toolkit. This project simulates a real-world online shopping experience and highlights practical frontend development skills.

---

## About the Project

This project is a frontend e-commerce application where users can browse products, view detailed information, and manage a shopping cart.

The main goal of this project is to demonstrate:

- Component-based architecture in React  
- State management using Redux Toolkit  
- Routing using React Router  
- Responsive UI design using Tailwind CSS  

This project reflects practical development experience and is suitable for interviews and real-world applications.

---

## Features

- Home Page with Hero Slider  
- Product Listing Page (Grid Layout)  
- Product Details Page (Dynamic Routing)  
- Product Sorting (Price Low → High / High → Low)  
- Add to Cart functionality  
- Increase / Decrease Quantity  
- Remove Items from Cart  
- Order Summary with Total Calculation  
- Login & Register UI  
- Fully Responsive Design  

---

## Tech Stack

- React (Vite)  
- Tailwind CSS  
- React Router DOM  
- Redux Toolkit  
- React Redux  
- React Icons  

---

## Project Architecture

src/
│
├── assets/ # Images (products, slider, categories)
├── components/ # Reusable UI components (Navbar, Slider, ProductCard)
├── pages/ # Application pages (Home, Cart, ProductList, ProductDetails)
├── redux/ # Global state management (cartSlice, store)
├── data/ # Static product data
├── App.jsx # Routing setup
├── main.jsx # App entry point
└── index.css # Tailwind styles


---

## Application Flow

1. User visits the Home Page  
2. Views products from Product Listing page  
3. Clicks on a product → navigates to Product Details page  
4. Adds product to Cart  
5. Manages quantity or removes items  
6. Views total price in Cart Summary  

---

## Cart Functionality

- Add products to cart  
- Increase / decrease quantity  
- Remove items from cart  
- Automatic total price calculation  

---

## Routing Structure

- `/` → Home Page  
- `/products` → Product Listing Page  
- `/product/:id` → Product Details Page  
- `/cart` → Cart Page  
- `/login` → Login Page  
- `/register` → Register Page  

---

## Responsive Design

- Mobile-first design  
- Optimized for tablet and desktop  
- Built using Tailwind CSS utility classes  

---

## Why This Project?

This project demonstrates:

- Real-world UI design  
- Clean code structure  
- State management using Redux Toolkit  
- Dynamic routing in React  

It is suitable for:

- Portfolio projects  
- Internship applications  
- Frontend developer interviews  

---

## Future Improvements

- Functional search  
- Checkout page  
- Payment integration  
- Wishlist feature  
- Backend authentication  

---

## Author

Siddhi Sisodiya


>>>>>>> dbab52653db5a5c620c69e266d5942f622ebb450
