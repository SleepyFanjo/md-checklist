const ItemCard = ({
  checked,
  checkItem,
  unCheckItem,
  children
}) => {
  return (
    <div className={`ItemCard${checked ? ' ItemCard--checked' : ''}`}>
      <div className="ItemCard__content">
        {children}
      </div>
      <div className="ItemCard__actions">
        <button 
          onClick={checked ? unCheckItem : checkItem}
          className={`ItemCard__button ItemCard_button--${checked ? 'checked' : 'unchecked'}`}
        >
          {checked ? 'KO' : 'OK'}
        </button>
      </div>
    </div>
  )
}

export default ItemCard