import { Outlet } from "react-router-dom";
import MainNavi from "../components/main-navi";

//import classes from "./root.module.css"; keeping this here, but copyed the content of the css file to the index.cc under main, so this way all <main> gets it no need for this css file anymore

function RootLayout () {
    return (
    <>
        <MainNavi />
        <main>
            <Outlet /> {/* This is the marker, the place where the child routs should be rendered to */}
        </main>
    </>
    );}

export default RootLayout;