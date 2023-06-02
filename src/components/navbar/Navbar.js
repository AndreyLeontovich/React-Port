
import "./style-nav.css"

import sun from "./../../img/darkmod/sun.svg";
import moon from "./../../img/darkmod/moon.svg";




const Navbar = () => {
    return (
        <nav className="nav">
          <div className="container">
              <div className="nav-row">
                  <a href="./index.html" className="logo"><span className="span-logo">Freelancer</span> portfolio</a>
                  
                  

                  <div className="nav-list">
                      <a href="./index.html" className="nav-list__link nav-list__link--active">Projects</a>
                      <a href="./skills.html" className="nav-list__link">Skills</a>
                      <a href="./contacts.html" className="nav-list__link">Contacts</a>

                      <button className="dark-mode-btn">
                          <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                          <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                      </button>
                  </div>
              </div>
          </div>
      </nav>
    );
}

export default Navbar;