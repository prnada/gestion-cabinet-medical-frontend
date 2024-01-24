import React from 'react'

const SidebarAdmin = () => {
  return (
    <div>
       <div className="wrapper">
      <div id="sidebar">
       <div className="sidebar-header">
      <h3>
        
     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" className="card-img" alt="logo" />
      </h3>
      </div>
      <ul className="list-unstyled component m-0">
      <li className="active">
        <a href="/admin" className="dashboard">
          <i className="material-icons">dashboard</i>dashboard
        </a>
      </li>
      <li>
        <a href="/" className="dashboard">
          <i className="material-icons">account_balance</i>Home
        </a>
      </li>
      <li>
        <a href="/personnels">
          <i className="material-icons">assignment_ind</i>Personnels 
        </a>
      </li>
      <li>
        <a href="/medecins">
          <i className="material-icons">airline_seat_flat</i>Docteurs 
        </a>
      </li>
      <li>
        <a href="/infermiers">
          <i className="material-icons">airline_seat_legroom_reduced</i>Infermiers 
        </a>
      </li>
      <li>
        <a href="/patients">
          <i className="material-icons">airline_seat_recline_normal</i>Patients 
        </a>
      </li>
      <li>
        <a href="/rendez-vous">
          <i className="material-icons">access_time</i>Rendez Vous 
        </a>
      </li>
      <li>
        <a href="#">
          <i className="material-icons">add_alert</i>--------- 
        </a>
      </li>
      <li>
        <a href="/medicaments">
          <i className="material-icons">device_hub</i>Médicaments 
        </a>
      </li>
      <li>
        <a href="/specialites">
          <i className="material-icons">assistant</i>Spécialités des médecins
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
    </div>
  )
}

export default SidebarAdmin
