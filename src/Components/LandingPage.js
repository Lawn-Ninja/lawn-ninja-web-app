import React from "react";
import { Link } from "react-router-dom";


import "../App.css";
import "./LandingPage.css";

const landingPage = (props) => {
  let userButtons = null;
  let providerButtons = null;

  if (localStorage.getItem('id_token')) {
    userButtons = (
      <div>
        <p><button><Link to="/my_jobs" className="hover_link">My Jobs</Link></button></p>
        <p><button>Post a Job</button></p>
      </div>
    )

    if (false) {
      providerButtons = (
        <p><button><Link to="/jobs" className="hover_link">Jobs Near Me</Link></button></p>
      )
    }

  } else {
    userButtons = (
      <div>
        <p><button><Link to="/login" className="hover_link">Log In</Link></button></p>
        <p><button><Link to="/signup" className="hover_link">Sign Up</Link></button></p>
        <p><button>Pricing & Info</button></p>
      </div>
    )
  }

  return (
    <div>
      <p className="landing-page-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum pellentesque magna, condimentum egestas risus porta vel. Sed a accumsan nunc. Maecenas volutpat mattis molestie. Nullam dapibus purus vitae condimentum aliquet. Donec arcu quam, blandit vel ligula ut, accumsan volutpat ligula. Donec sit amet velit neque. Duis ornare magna eget risus consequat tristique. Phasellus et justo sit amet risus congue tempus eu eget ante. Nulla facilisi. Cras neque urna, tristique congue lacus nec, congue tristique est. Nullam viverra lectus non fermentum lacinia. Suspendisse eget ipsum efficitur, pretium turpis quis, pharetra libero. Proin condimentum augue diam, non imperdiet lorem ultrices eget. Etiam varius cursus odio, eget lobortis mi dignissim finibus. Donec ullamcorper tellus et metus gravida venenatis.</p>
      <span className="button-options">
        {userButtons}
        {providerButtons}
      </span>
      <footer className="clear"></footer>
    </div>
  )
}

export default landingPage;