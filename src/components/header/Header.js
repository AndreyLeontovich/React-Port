
import "./style-header.css"

import WeBBro from "./../../img/WeBBro.png";




const Header = () => {
    return (
        <header className="header">
          <div className="container">
              <div className="header-block">
                  <div className="header-text-block">
                      <h1 className="header-text-block__title">Hi, I'm <strong>Andrey</strong></h1>
                      <h2 className="header-text-block__desc">frontend developer </h2>
                      <p className="header-text-block__text">with passion for learning and creating.</p>
                      <a href="" className="header-btn btn">View my GitHub</a>
                  </div>

                  <div className="header-photo">
                      <img src={WeBBro} alt="#" className="photo" />
                  </div>

              </div>
          </div>
      </header>
    );
}

export default Header;