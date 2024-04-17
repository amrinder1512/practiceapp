import { Link } from "react-router-dom";
const NotFound = () => {

    return ( 
        <div className="notfound">
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to="/">Go to Home</Link>
        </div>
     );
}
 
export default NotFound;