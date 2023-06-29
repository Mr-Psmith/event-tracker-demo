import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  //Route
} from "react-router-dom";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import RootLayout from "./pages/root";
import ProductDetailPage from "./pages/product-detail";

/* const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>  
  ); 
const routerConst = createRoutesFromElements(routeDefinitions); */

const routerConst = createBrowserRouter([//Array of route definition objs
  { path: "/", element: <RootLayout />, errorElement: <ErrorPage />, children: [ //with this speshul rootlayout we wrap the whole stuff so this Rout is the parent rout
    { path: "/", element: <HomePage /> }, //every obj represents one rout, and we add some properties to define routs
    { path: "/products", element: <ProductsPage /> }, //and these are the children routs
    { path: "products/:productId" , element: <ProductDetailPage /> }
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