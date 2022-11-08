import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layout/Main";
import Login from "../Login/Login";
import MyReviews from "../MyReviews/MyReviews";
import Register from "../Register/Register";
import Services from "../Services/Services";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home>, loader: () => fetch(`http://localhost:5000/services3`) },
            { path: '/services', element: <Services></Services> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/myreviews', element: <MyReviews></MyReviews> },
        ]
    }
])