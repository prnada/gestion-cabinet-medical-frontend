import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Login.css';   
import axios from 'axios'
import Cookies from 'js-cookie';

const Login = () => {
    const navigate = useNavigate();
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [tele, setTelephone] = useState('');
    const [password, setPassword]=useState('')
   
    
     
    const handleSubmit=(e)=> {
        e.preventDefault()
        axios.post('https://localhost:7285/api/Personnels/register', {nom,prenom,tele,email,password,role})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <section className="h-100 gradient-form pb-5">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" className="card-img" alt="logo" />
                                                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                            </div>
                                            <p className="d-flex justify-content-start">Please create your account</p>
                                            <form onSubmit={handleSubmit}>
                                            <div className="form-outline mb-4">
                                                    <input  name="nom" onChange={(e)=> setNom(e.target.value)}  type="text" id="form2Example11" className="form-control"
                                                        placeholder="Entrez votre nom" required />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input  name="prenom" onChange={(e)=> setPrenom(e.target.value)}  type="text" id="form2Example11" className="form-control"
                                                        placeholder="Entrez votre prenom" required />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input  onChange={(e)=> setEmail(e.target.value)}  type="email" id="form2Example11" className="form-control"
                                                        placeholder="Email Address" required />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input  onChange={(e)=> setTelephone(e.target.value)}  type="text" id="form2Example11" className="form-control"
                                                        placeholder="Entrez votre telephone" required />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input  onChange={(e)=> setPassword(e.target.value)} type="password" id="form2Example22" placeholder="Password" className="form-control" required />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input  onChange={(e)=> setRole(e.target.value)} value="medecin" name="role" type="text" id="form2Example11" className="form-control"
                                                        placeholder="" required />
                                                </div>
                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="theme-btn btn-fill" type="submit">Sign
                                                        up</button>
                                                    
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Already have an Account?</p>
                                                    
                                                    <Link to="/login" className="btn btn-default borded w-70 bg-light rounded-0 text-decoration-none">
         Sign In
         </Link>
 
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">We are more than just a company</h4>
                                             
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-5">
                                    <div className="col-12">
                                        <div className="text-center">
                                            <h4>or sign up with:</h4>
                                            <div className="doctors-social">
                                                <button className="loginbtn"  ><FontAwesomeIcon icon={faGoogle} /></button>
                                                <button className="loginbtn" ><FontAwesomeIcon icon={faGithub} /></button>
                                                <button className="loginbtn" ><FontAwesomeIcon icon={faFacebook} /></button>
                                                <button className="loginbtn"><FontAwesomeIcon icon={faTwitter} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;