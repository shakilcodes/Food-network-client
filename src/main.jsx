import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import LogIn from '../../../../MIlstone 10/Assignment-10-practice/name-of-your-project/assignmentTenPractice/src/Component/LogIn/LogIn.jsx';
import Login from './Components/UserInformation/Login.jsx';
import Registration from './Components/UserInformation/Registration.jsx';
import Root from './Components/Root/Root.jsx';
import Blog from './Components/Blog/Blog.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
