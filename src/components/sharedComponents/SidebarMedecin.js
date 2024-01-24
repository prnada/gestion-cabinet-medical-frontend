import React from 'react'

const SidebarMedecin = () => {
  return (
    <div>
       <div id="sidebar">
          <div className="sidebar-header">
          <h3>
            
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" className="card-img" alt="logo" />
          </h3>
          </div>
          <ul className="list-unstyled component m-0">
          <li className="active">
            <a href="#" className="dashboard">
              <i className="material-icons">dashboard</i>dashboard
            </a>
          </li>
          <li>
            <a href="/" className="dashboard">
              <i className="material-icons">account_balance</i>Home
            </a>
          </li>
        
          <li>
            <a href="/doctor-rendez-vous">
              <i className="material-icons">access_time</i>Rendez Vous 
            </a>
          </li>
          <li>
            <a href="/dossiers-medicaux">
              <i className="material-icons">featured_play_list</i>Dossiers medicaux
            </a>
          </li>
          <li>
            <a href="/">
              <i className="material-icons">airplanemode_inactive</i>Log out
            </a>
          </li>
        </ul>
        
          </div>
    </div>
  )
}

export default SidebarMedecin
