import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  //Route
} from "react-router-dom";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import RootLayout from "./pages/root";

/* const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>  
  ); 
const routerConst = createRoutesFromElements(routeDefinitions); */

const routerConst = createBrowserRouter([//Array of route definition objs
  { path: "/", element: <RootLayout />, children: [ //with this speshul rootlayout we wrap the whole stuff so this Rout is the parent rout
    { path: "/", element: <HomePage /> }, //every obj represents one rout, and we add some properties to define routs
    { path: "/products", element: <ProductsPage /> }, //and these are the children routs
  ]}
]);

/*Without warepper alayout: 
  const routerConst = createBrowserRouter([//Array of route definition objs
  { path: "/", element: <HomePage /> }, //every obj represents one rout, and we add some properties to define routs
  { path: "/products", element: <ProductsPage /> },
]);
 */
function App() {
  return <RouterProvider router={routerConst}></RouterProvider>;
}

export default App;
