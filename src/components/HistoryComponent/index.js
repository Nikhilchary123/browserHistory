import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemDetails
  //   const delete=historyItemsDetails.id
  //   console.log(delete)

  const onClickDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="history-item">
      <div clasName="only-history">
        <p className="time-accessed">{timeAccessed}</p>
        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button" onClick={onClickDelete} testId="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default HistoryItem
