import { Link } from "react-router-dom";
//import MainNavi from "../components/main-navi";

const PRODUCTS = [ //this is hardxcoded, we would get it from a server
    {id: "p1", title: "Product1"},
    {id: "p2", title: "Product2"},
    {id: "p3", title: "Product3"}
];

function ProductsPage() {
    return <>
        {/* <MainNavi /> */}
        <h1>The Product Page</h1>
        <ul>
            {PRODUCTS.map((prod) => (
                <li key={prod.id}><Link to={prod.id} relative="">{prod.title}</Link></li> //so with the data from the "server" we can maake a dynamic link stuff //<Link to={`/products/${prod.id}`}> => this was the original with absolute path, but with relative path ist is easyer
            ))}
            
        </ul>
        <p>To the <Link to="/">Home Page</Link></p>
    </>
};
export default ProductsPage;