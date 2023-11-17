import { Item } from "../Item/Item"

export const ItemList = ({products}) => {
  return (
    <>
    <div className="d-flex flex-wrap">

        {products.map( product => <Item key={product.id} {...product}  />)}
    </div>
        {/* Enviamos las props desestructuradas */}
        {/* {products.map( product => <Item key={product.id} {...product}  />)} */}
    </>
  )
}
