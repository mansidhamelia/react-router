import {
  createBrowserRouter,
  // Route,
  RouterProvider,
  // createRoutesFromElements
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import RootLayout from "./pages/Root";

// const routeDefinition = createRoutesFromElements(
//   // with jsx code
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Product />} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinition)

// object based approach
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Product /> }
    ]
  },

])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
