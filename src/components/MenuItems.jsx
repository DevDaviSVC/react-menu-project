import Item from "./Item";

const MenuItems = ({displayingItems}) => {
  return (
    <div className="section-center">
        {displayingItems.map(item => (
            <Item item={item} key={item.id} />
        ))}
    </div>
  )
}
export default MenuItems;