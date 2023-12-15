import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './pages/Store';
import App from './App';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Store />
      },
      {
        path: "page/:pageNumber",
        element: <Store />
      },
      {
        path: "category/:category",
        element: <Store />
      },
      {
        path: "/product/:productId",
        element: <Product />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);