import { Link } from "react-router-dom";

    const Navbar = () => {
    return (
        <div className="link-css">
        <Link to="/">Home</Link>

        <Link to="/repositories">Repositories</Link>
        </div>
    );
    };

    export default Navbar;
