import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Logo = require('../Images/COVID19INDIA.png')

const Header = () => (
  <div className="header-container">
    <div className="">
      <Link to="/">
        <button className="button-home" type="button">
          Home
        </button>
      </Link>
      <Link to="/">
        <button className="button-home" type="button">
          About
        </button>
      </Link>
    </div>
  </div>
)

export default withRouter(Header)
