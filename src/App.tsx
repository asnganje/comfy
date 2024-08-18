import { Button } from "./components/ui/button"
import { RootState } from "./store";
import { useAppSelector } from "./hooks";
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
    element: <Landing />
  },
  {
    path: '/cart',
    element: <Cart />
  },
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App