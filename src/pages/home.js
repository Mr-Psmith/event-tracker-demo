import { Link } from "react-router-dom";
import MainNavi from "../components/main-navi";


function HomePage() {
    return  <>
        {/* <MainNavi /> */}
        <h1>The Home Page</h1>
        <p>To the list of <Link to="/products">Products</Link></p>
    </>
};

export default HomePage;