
function Header() {
    return (
        <>
            <header className="p-3 mb-3 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"></a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a className="nav-link px-2 link-secondary">DERIV</a></li>
                            {/* <li><a className="nav-link px-2 link-dark">Inventory</a></li>
                            <li><a className="nav-link px-2 link-dark">Customers</a></li>
                            <li><a className="nav-link px-2 link-dark">Products</a></li> */}
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 offset-lg-8" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="dropdown text-end">
                            <a className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                            </a>
                            <ul className="dropdown-menu text-small">
                                <li><a className="dropdown-item">New project...</a></li>
                                <li><a className="dropdown-item">Settings</a></li>
                                <li><a className="dropdown-item">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header