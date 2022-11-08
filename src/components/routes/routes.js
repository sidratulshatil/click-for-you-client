import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Blog from "../Blog/Blog";
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
            { path: '/', element: <Home></Home>, loader: () => fetch(`http://localhost:5000/services3`) },
            { path: '/services', element: <Services></Services>, loader: () => fetch(`http://localhost:5000/services`) },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/myreviews', element: <MyReviews></MyReviews> },
            { path: '/addservice', element: <PrivateRoute><AddService></AddService></PrivateRoute> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/review', element: <Review></Review>, loader: () => fetch('http://localhost:5000/review') },
            { path: '/services/:id', element: <ServiceDetails></ServiceDetails>, loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`) },
        ]
    }
])