import { Link } from "react-router-dom";
//import MainNavi from "../components/main-navi";

function ProductsPage() {
    return <>
        {/* <MainNavi /> */}
        <h1>The Product Page</h1>
        <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
        </ul>
        <p>To the <Link to="/">Home Page</Link></p>
    </>
};
export default ProductsPage;