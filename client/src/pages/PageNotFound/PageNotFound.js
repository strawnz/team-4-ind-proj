import './PageNotFound.scss';
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <>
            <main>
                <h1>Page Not Found</h1>
                <Link to="/">
                    <button>Return Home</button>
                </Link>
            </main>
        </>
    );
};

export default PageNotFound;