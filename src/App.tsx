import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { 
        HomeLayout, 
        Landing, 
        Error,
        Checkout,
        Products,
        SingleProduct,
        Orders,
        Cart,
        About,
        Login,
        Register
      } from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'orders',
        element: <Orders />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App