import { Link, useNavigate } from "react-router-dom";
//import MainNavi from "../components/main-navi";


function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/products");
    };

    return  <>
        {/* <MainNavi /> */}
        <h1>The Home Page</h1>
        <p>To the list of <Link to="/products">Products</Link></p>
        <p>
            <button onClick={navigateHandler} >To Product by button</button>
        </p>
    </>
};

export default HomePage;