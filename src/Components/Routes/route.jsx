import Event from '../../Pages/Event'
import Friends from '../../Pages/Friends'
import Layout from '../../Pages/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Route = () => {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Friends />
                },
                {
                    path: "event",
                    element: <Event />
                }
            ]
        }
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Route;