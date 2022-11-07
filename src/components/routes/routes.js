import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Services from "../Services/Services";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Services></Services> },
            { path: '/services', element: <Services></Services> },
        ]
    }
])