import MainNavi from "../components/main-navi";

function ErrorPage() {
    return (
        <>
            <MainNavi />
                <main>
                    <h1>An error occured.</h1>
                    <p>Could not find this page.</p>
                </main>
            </>
    );
}

export default ErrorPage;