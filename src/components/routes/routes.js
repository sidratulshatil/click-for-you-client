import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Blog from "../Blog/Blog";
import EditForm from "../EditForm/EditForm";

import Home from "../Home/Home";
import Main from "../layout/Main";
import Login from "../Login/Login";
import MyReviews from "../MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";
import Review from "../Review/Review";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Services from "../Services/Services";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home>, loader: () => fetch(`https://click-for-you-server.vercel.app/services3`) },
            { path: '/services', element: <Services></Services>, loader: () => fetch(`https://click-for-you-server.vercel.app/services`) },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/myreviews', element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute> },
            { path: '/addservice', element: <PrivateRoute><AddService></AddService></PrivateRoute> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/editform/:id', element: <EditForm></EditForm>, loader: ({ params }) => fetch(`https://click-for-you-server.vercel.app/review/${params.id}`) },
            { path: '/review', element: <Review></Review>, loader: () => fetch('https://click-for-you-server.vercel.app/review') },
            { path: '/services/:id', element: <ServiceDetails></ServiceDetails>, loader: ({ params }) => fetch(`https://click-for-you-server.vercel.app/services/${params.id}`) },
        ]
    }
])