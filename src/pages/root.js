import { Outlet } from "react-router-dom";
import MainNavi from "../components/main-navi";

import classes from "./root.module.css";

function RootLayout () {
    return (
    <>
        <MainNavi />
        <main className={classes.content}>
            <Outlet /> {/* This is the marker, the place where the child routs should be rendered to */}
        </main>
    </>
    );}

export default RootLayout;