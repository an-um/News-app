import logo from '../images/logo.svg';

const Navbar = () =>{
    return(
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" href="#logo">
    <img src={logo} alt="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item me-2">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link" href="/New">New</a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link" href="/popular">Popular</a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link">Trending</a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link">Catagories</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
}

export default Navbar;