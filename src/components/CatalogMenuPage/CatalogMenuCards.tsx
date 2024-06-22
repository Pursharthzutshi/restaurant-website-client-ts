import { useEffect } from "react";
import { setCart } from "../../slicers/CartFunctionalitySlicer";
import { useAppDispatch } from "../ReduxHooks";
import "./CatalogMenuPage.css";
// import image from "../../../src/images/image-from-rawpixel-id-6121211-png.png";

type CatalogMenuCardsProps = {
  menuItem:{
  amount:number
  category:string
  img: string
  price:number
  slug:string
  title: string
}
}

function CatalogMenuCards({ menuItem }: CatalogMenuCardsProps) {
useEffect(()=>{
  console.log(menuItem)
})
  const dispatch = useAppDispatch()

  return (
    <div className="catalog-menu-cards-container">
      <div className="catalog-menu-cards">
        <img className="image" alt="" src={menuItem.img} />
        <p>{menuItem.title}</p>
        <p>Rating :</p>
        <p>Price : ₹ {menuItem.price}</p>
        <button onClick={() => dispatch(setCart(menuItem))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default CatalogMenuCards;
