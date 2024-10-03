import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home"
import Settings from "../pages/Settings/Settings"
import Support from "../pages/Support/Support"
import License from "../pages/License/License"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/settings",
        element: <Settings />
    },
    {
        path: "/support",
        element: <Support />
    },
    {
        path: "/license",
        element: <License />
    },
])