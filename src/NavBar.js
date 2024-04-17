import { Link} from 'react-router-dom';


const NavBar = () => {
    return ( 
<nav className="navbar">
    <div className="link">
        <Link to="" style={{  textDecoration: 'none',backgroundColor:'rgb(177, 174, 174)', padding:20}}>Home</Link>
        <Link to="/Create" style={{  textDecoration: 'none',backgroundColor:'rgb(177, 174, 174)', padding:20}}>Create New Page</Link>
        <Link to="" style={{  textDecoration: 'none', backgroundColor:'rgb(177, 174, 174)', padding:20}}>Team Members</Link>
        <Link to="/Check"style={{ textDecoration: 'none',backgroundColor:'rgb(177, 174, 174)', padding:20}}>Check</Link>
        <Link to=""style={{  textDecoration: 'none' ,backgroundColor:'rgb(177, 174, 174)', padding:20}}>About</Link>
    </div>
</nav>
    );
}
 
export default NavBar;