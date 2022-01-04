import icon from '../../assets/checklist.png'

const ItemCardContainer = ({
  items,
  children
}) => {
  const count = items.length
  const checked = items.reduce((total, item) => item.checked ? total + 1 : total, 0)

  return (
    <div className="ItemCardContainer">
      <div className="ItemCardContainer__header">
      <img alt="checklist icon" src={icon} className="ItemCardContainer__headerIcon" />
          <div className="ItemCardContainer__headerTitle">Checklist - Démarrer un projet IHM Light</div>
          <div className="ItemCardContainer__headerCount">
          {
            `${checked} / ${count}`
          }
          </div>
      </div>
      <div className="ItemCardContainer__items">
        {children}
      </div>
    </div>
  )
}

export default ItemCardContainer