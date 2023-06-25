import {createBrowserRouter} from "react-router-dom";

import {HomePage} from "src/pages/HomePage/HomePage.tsx";
import {CoursePage} from "src/pages/CoursePage/CoursePage.tsx";
import App from "src/app/App.tsx";
import {ErrorPage} from "src/pages/ErrorPage/ErrorPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <HomePage />},
            {
                path: "course",
                element: <CoursePage/>
            }
        ]
    }
])



