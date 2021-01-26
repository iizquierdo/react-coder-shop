import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
    return(
    <>
    
    <header>
  <nav className="navbar navbar-light bg-white  navbar-expand-md">
    <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav3">
            <a className=" ml-md-3" href="#">React Coder Shop</a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Menu 1<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Menu 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Menu 3</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Menu 4</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Menu 5</a>
                </li>
            </ul>

        </div>
        <a className="navbar-brand" href="#">
          
        </a>
    </div>
</nav>
</header>
<section className="pt-5 pb-5 bg-light">
  <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="text-center">
        Proyecto CoderHouse 
         
        </h1>
         <p className="text-center">
           Tienda con React!
          </p>
      </div>
    </div>
  </div>
</section>

      </>
    );
}


export default NavbarComponent;