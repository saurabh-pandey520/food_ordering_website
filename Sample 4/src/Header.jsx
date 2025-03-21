import { Link } from "react-router-dom";

const Header = () =>{
    return(
     
        
          <div className="header">
            <div className="logo-container">
              <img
                className="logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
                alt="Logo"
              />
            </div>
            <div className="nav-items">
              <ul>
                <li><Link to ="/">Home</Link></li>
                 <li> <Link to ="/contact">contact Us</Link></li>
                 <li> <Link to ="/about">About Us</Link></li>
                <li><Link to ="/RateUs">Rate Us</Link></li>
              
              </ul>
            </div>
          </div>
        );
      }
      export default Header;