import {Component} from 'react'
// eslint-disable-next-line
import {BsSearch} from '@react-icons/all-files/bs/BsSearch'
import {FcGenericSortingAsc} from '@react-icons/all-files/fc/FcGenericSortingAsc'
import {MdSort} from '@react-icons/all-files/md/MdSort'
import Header from '../Header'
import Footer from '../Footer'
import ListOfTable from '../ListOfTable'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class HomeRoute extends Component {
  state = {
    stateInfo: [],
    confirmedTotal: 0,
    activeTotal: 0,
    recoveredTotal: 0,
    deceasedTotal: 0,
    listOfStateTable: [],
  }

  componentDidMount() {
    this.getRenderedCases()
  }

  getRenderedCases = async () => {
    const renderUpi = `https://apis.ccbp.in/covid19-state-wise-data`
    const options = {
      method: 'GET',
    }
    const responses = await fetch(renderUpi, options)
    const data = await responses.json()

    let confirmed = 0
    let recovered = 0
    let deceased = 0

    statesList.forEach(state => {
      if (data[state.state_code]) {
        const {total} = data[state.state_code]
        confirmed += total.confirmed ? total.confirmed : 0
        deceased += total.deceased ? total.deceased : 0
        recovered += total.recovered ? total.recovered : 0
      }
    })

    const Active = confirmed - recovered - deceased
    const listOfStates = statesList.map(eachList => ({
      stateName: eachList.state_name,
      stateCode: eachList.state_code,
      listOfConfirmed: Object.keys(data)
        .filter(stateItem => stateItem === eachList.state_code)
        .map(each => data[each].total.confirmed),
      recoveredTotal: Object.keys(data)
        .filter(stateItem => stateItem === eachList.state_code)
        .map(each => data[each].total.recovered),
      deceasedTotal: Object.keys(data)
        .filter(stateItem => stateItem === eachList.state_code)
        .map(each => data[each].total.deceased),
      listOfActive: Active,
      listOfPopulation: Object.keys(data)
        .filter(stateItem => stateItem === eachList.state_code)
        .map(each => data[each].total.population),
      stateInfo: data,
    }))
    this.setState({
      confirmedTotal: confirmed,
      recoveredTotal: recovered,
      deceasedTotal: deceased,
      activeTotal: Active,
      listOfStateTable: listOfStates,
    })
  }

  render() {
    const {
      activeTotal,
      recoveredTotal,
      confirmedTotal,
      deceasedTotal,
      listOfStateTable,
    } = this.state
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
        <div className="total-cases-container">
          <div className="total-card-cases-container">
            <h1 className="confirmed-head">Confirmed</h1>
            <img
              src="https://res.cloudinary.com/dunicojo6/image/upload/v1695297926/check-mark_1_u6xvly.png"
              alt="case-logo"
              className="total-image"
            />
            <p className="confirmed-para">{confirmedTotal}</p>
          </div>
          <div className="total-card-cases-container">
            <h1 className="confirmed-head active">Active</h1>
            <img
              src="https://res.cloudinary.com/dunicojo6/image/upload/v1695297926/protection_1_ewirgo.png"
              alt="case-logo"
              className="total-image active"
            />
            <p className="confirmed-para active">{activeTotal}</p>
          </div>
          <div className="total-card-cases-container">
            <h1 className="confirmed-head recovered">Recovered</h1>
            <img
              src="https://res.cloudinary.com/dunicojo6/image/upload/v1695297926/recovered_1_a2dstc.png"
              alt="case-logo"
              className="total-image"
            />
            <p className="confirmed-para recovered">{recoveredTotal}</p>
          </div>
          <div className="total-card-cases-container">
            <h1 className="confirmed-head deceased">Deceased</h1>
            <img
              src="https://res.cloudinary.com/dunicojo6/image/upload/v1695297926/breathing_1_extqci.png"
              alt="case-logo"
              className="total-image"
            />
            <p className="confirmed-para deceased">{deceasedTotal}</p>
          </div>
        </div>
        <div className="list-of-all-container">
          <div className="list-header-container">
            <div className="list-state-sort-container">
              <h1 className="list-heading">State/UT</h1>
              <button className="sort-button rota" type="button">
                <MdSort />
              </button>
              <button className="sort-button" type="button">
                <MdSort />
              </button>
            </div>

            <h1 className="list-heading">Confirmed</h1>
            <h1 className="list-heading">Active</h1>
            <h1 className="list-heading">Recovered</h1>
            <h1 className="list-heading">Deceased</h1>
            <h1 className="list-heading">Population</h1>
          </div>
          <div className="list-of-state-container">
            <ul>
              {listOfStateTable.map(each => (
                <ListOfTable key={each.stateCode} stateDetails={each} />
              ))}
            </ul>
            <p>hq</p>
            <p>hq</p>
            <p>hq</p>
            <p>hq</p>
            <p>hq</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default HomeRoute

// <div className="list-container"></div>
