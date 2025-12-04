import { createBrowserRouter } from "react-router";

import App from '../App.tsx'
import HomePage from '../pages/HomePage.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: HomePage}
    ]
  }
])