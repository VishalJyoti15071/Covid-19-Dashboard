import {Component} from 'react'
import {BsSearch} from 'react-icons/ai'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

class HomeRoute extends Component {
  state = {confirmed: '', active: '', recovered: '', deceased: ''}

  componentDidMount() {
    this.getRenderedCases()
  }

  getRenderedCases = async () => {
    const {confirmed, active, recovered, deceased} = this.state
    const renderUpi = `https://apis.ccbp.in/covid19-state-wise-data`
    const options = {
      method: 'GET',
    }
    const responses = await fetch(renderUpi, options)
    const data = await responses.json()
    console.log(data)
  }

  render() {
    return (
      <div className="home-main-container">
        <Header />
        <div className="search-container">
          <BsSearch className="search-icon" />
          <input
            type="search"
            className="input-container"
            placeholder="Enter the State"
          />
        </div>

        <Footer />
      </div>
    )
  }
}

export default HomeRoute

// <div className="list-container"></div>
