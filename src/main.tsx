import ReactDOM from 'react-dom/client'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.tsx'
import HomePage from './components/HomePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: HomePage}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
