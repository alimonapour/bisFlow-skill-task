# React Typescript Bisflow Task
The Bisflow Task app was built with React, Typescript, and TailwindCSS as a single-page application that shows products list, product names, and prices, adds to cart, removes from cart, and shows cart items.

## Demo
https://bis-flow-skill-task.vercel.app
 
## Features
- Shows all products
- Adding items to the cart
- Removing items from the cart
- Listing all added items on the cart
- A decent UI/UX

## Built With
- React - A JavaScript library for building user interfaces.
- TypeScript - A strict syntactical superset of JavaScript.
- Tailwind CSS - A utility-first CSS framework.
- Headless UI - A set of completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
  
## App Structure
- src/hooks/useCartItems.ts: A custom hook that creates separated logic from UI and sets and gets data to/from local storage.
- src/hooks/useCombinedItems.ts: A custom hook that combines products.
- src/types/types.ts: Interfaces used in the app.
- bsrc/App.tsx: Main file for rendering the app.
- src/components/home/Home.tsx: Component for rendering the list of products.
- src/components/cart/Cart.tsx: Component for display cart items.


## Conclusion
The Bisflow Task app was built with React, Typescript, and TailwindCSS as a single-page application that shows products list, product names, and prices, adds to cart, removes from cart, and shows cart items.

## Getting Started with Vite
Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner
