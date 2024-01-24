import React from 'react'

const NavebarMedecin = () => {
  return (
    <div>
         <div className="top-navbar">
            <div className="xd-topbar">
              <div className="row">
                <div className="col-2 col-md-1 col-lg-1 order-2 order-md-1 align-self-center">
                  <div className="xp-menubar">
                    <span className="material-icons text-white">signal_cellular_alt</span>
                  </div>
                </div>

                <div className="col-md-5 col-lg-3 order-3 order-md-2">
                  <div className="xp-searchbar">
                    <form>
                      <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search" />
                        <div className="input-group-append">
                          <button className="btn" type="submit" id="button-addon2">Go</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-10 col-md-6 col-lg-8 order-1 order-md-3">
                  <div className="xp-profilebar text-right">
                    <nav className="navbar p-0">
                      <ul className="nav navbar-nav flex-row ml-auto">
                        <li className="dropdown nav-item active">
                          <a className="nav-link" href="#" data-toggle="dropdown">
                            <span className="material-icons">notifications</span>
                            <span className="notification">4</span>
                          </a>
                          <ul className="dropdown-menu">
                            <li><a href="#">You Have 4 New Messages</a></li>
                            <li><a href="#">You Have 4 New Messages</a></li>
                            <li><a href="#">You Have 4 New Messages</a></li>
                            <li><a href="#">You Have 4 New Messages</a></li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span className="material-icons">question_answer</span>
                          </a>
                        </li>

                        <li className="dropdown nav-item">
                          <a className="nav-link" href="#" data-toggle="dropdown">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"  style={{ width: '40px', borderRadius: '50%' }} alt="User" />
                            <span className="xp-user-live"></span>
                          </a>
                          <ul className="dropdown-menu small-menu">
                            <li>
                              <a href="#">
                                <span className="material-icons">person_outline</span>
                                Profile
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="material-icons">settings</span>
                                Settings
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="material-icons">logout</span>
                                Logout
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="xp-breadcrumbbar text-center">
                <h4 className="page-title">Dashboard</h4>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Medecin</a></li>
                  <li className="breadcrumb-item active" aria-curent="page">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
    </div>
  )
}

export default NavebarMedecin
