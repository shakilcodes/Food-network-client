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
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import ErorrPage from './Components/ErrorPage/ErorrPage.jsx';
import ChefRecipes from './Components/Home/ChefRecipes/ChefRecipes.jsx';
import PrivetRoute from './Components/PrivetRoutes/PrivetRoutes.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5005/datas')
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
      },
      {
        path: '*',
        element: <ErorrPage></ErorrPage>
      },
      {
        path: '/recipes/:id',
        element: <PrivetRoute><ChefRecipes></ChefRecipes></PrivetRoute>,
        loader: ({params})=> fetch(`http://localhost:5005/recipes/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router} /></AuthProvider>
   </React.StrictMode>,
)
