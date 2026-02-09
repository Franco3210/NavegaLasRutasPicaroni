import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Error</p>

            <Link to="/">
                Volver al inicio
            </Link>
        </div>
    );
};

export default Error;