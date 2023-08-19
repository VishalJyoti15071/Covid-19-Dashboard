import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

import COVID19INDIA from '../Images/COVID19INDIA.png'

class HomeRoute extends Component {
  render() {
    return (
      <div className="home-main-container">
        <img src={COVID19INDIA} alt="website logo" className="website-logo" />
        <button type="button" onClick={this.onDecrement}>
          Home
        </button>
      </div>
    )
  }
}

export default HomeRoute

// <Footer />
// <Header />
