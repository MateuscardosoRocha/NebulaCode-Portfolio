import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home'
import About from "./pages/About/About";
import Works from "./pages/Works/Works"
import Contact from './pages/Contact/Contact'
import Projects from './pages/Projects/Projects'

const router = createBrowserRouter([
    {
        path: "/", element: <Home/>
    },
    {
        path: "/about", element: <About/>
    },
    {
        path: "/works", element: <Works/>
    },
    {
        path: "/contact", element: <Contact/>
    },
    {
        path: "/projects", element: <Projects/>
    }
])



export default router