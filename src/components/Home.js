import "../App.less";
import { Link, Redirect } from "react-router-dom";


export default function Home() {
    
  return (
    <div>
       
      <div className="nav-links">
        <Link className="navs" to="/projects">
          Projects
        </Link>
        <Link className="navs" to="/contact">
          Contact Me
        </Link>
      </div>
      <div className="home-header">

        <div> 
          <h2>Hi, I'm Matt.</h2>
          <h4>Welcome to my Portfolio site.</h4>
          <p>
            I am a currently enrolled student at Lambda School and I am excited
            to get into the development community and get into the tech world.
          </p>
        </div>
      </div>
    </div>
  );
}
