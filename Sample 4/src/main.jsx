import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutUs from './AboutUs.jsx'
import Contact from './Contact.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Error.jsx'
import Body from './Body.jsx'
import RestaurantMenu from './RestaurantMenu.jsx'
import RateUs from './RateUs.jsx'
// import AppLayout from './App.jsx'



const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <App/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path: "/about",
                element : <AboutUs/>
                },
                {
                    path :"/contact",
                    element : <Contact/>
                },
                {
                    path :"/RateUS",
                    element : <RateUs/>
                },
                {
                    path :"/restaurants/:resId",
                    element : <RestaurantMenu/>
                },
                
        ],
        errorElement: <Error />
    },
    
])



createRoot(document.getElementById('root')).render(
 
    <StrictMode>
        <RouterProvider router={appRouter}/>
    </StrictMode>
)
