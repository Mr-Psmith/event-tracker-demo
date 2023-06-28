import { Link } from "react-router-dom";
//import MainNavi from "../components/main-navi";

function ProductsPage() {
    return <>
        {/* <MainNavi /> */}
        <h1>The Product Page</h1>
        <p>To the <Link to="/">Home Page</Link></p>
    </>
};
export default ProductsPage;