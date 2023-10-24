import './index.css'

const ListOfTable = props => {
  const {stateDetails} = props
  const {stateName, stateCode} = stateDetails

  return (
    <li>
      <p>{stateName}</p>
    </li>
  )
}

export default ListOfTable
