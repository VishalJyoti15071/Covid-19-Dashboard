import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="header-link">
      <h1 className="website-logo">
        COVID19<span className="india">INDIA</span>
      </h1>
    </Link>
    <ul className="header-button-container">
      <Link to="/" className="header-link">
        <li>Home</li>
      </Link>
      <Link to="/" className="header-link">
        <li>About</li>
      </Link>
    </ul>
  </div>
)

export default withRouter(Header)

// import COVID19INDIA from '../Images/COVID19INDIA.png'
// <img src={COVID19INDIA} alt="website logo" className="website-logo" />
