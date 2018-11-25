import React, { Component } from "react";
// import axios from "axios";
import { Route, Link } from "react-router-dom";

import "./Home.css";
import LandingPage from "../Components/LandingPage";
import Login from "../Components/Login";
import NewUser from "../Components/NewUser";
import Logout from "../Components/Logout";
import AllJobs from "../Components/AllJobs";

class Home extends Component {
    render () {
        return (
            <div className="Home">
                <div className="header">
                    <nav className='navbar'>
                        <div className='logo'>
                        Lawn<span>Ninja</span>
                        </div>
                        <ul>
                        <li>
                            <Link to="/" className="hover_link">Home</Link>
                        </li>
                        <li>
                            <Link to="/login" className="hover_link">LogIn</Link>
                        </li>
                        <li>
                            <Link to="/signup" className="hover_link">SignUp</Link>
                        </li>
                        <li>
                            <Link to="/logout" className="hover_link">Logout</Link>
                        </li>
                        </ul>
                    </nav>
                </div>
                <Route path="/" exact component={ LandingPage } />
                <Route path="/login" exact component={ Login } />
                <Route path="/signup" exact component={ NewUser } />
                <Route path="/logout" exact component={ Logout } />
                <Route path="/jobs" exact component={ AllJobs } />
            </div>
        );
    }
}

export default Home;