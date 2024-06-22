import "./CatalogMenuPage.css";
import CatalogMenuData from "./CatalogMenuData";
import CatalogMenuCards from "./CatalogMenuCards";
import { useEffect, useState } from "react";
import { useAppSelector } from "../ReduxHooks";

type CatalogMenuPageProps = {
  userName: String
}


type CatalogMenuCardsProps = {
  amount:number
  category:string
  img: string
  price:number
  slug:string
  title: string
}
function CatalogMenuPage({ userName }: CatalogMenuPageProps) {

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const welcomeBackMessageTimeInterval = useAppSelector((state: any) => state.login.welcomeBackMessageTimeInterval)
  const alreadAddedItemStatus = useAppSelector((state: any) => state.CartFunctionalitySlicer.alreadAddedItemStatus)

  // useEffect(()=>{
  //   useAppDispatch((setTimeout(()=>{
  //     welcomeBackMessageTimeInterval(ture)
  //   })))
  // })

  return (
    <div className="catalog-menu-page">
      <br></br>
      <h3>CatalogMenuPage</h3>

      {
        welcomeBackMessageTimeInterval &&
        <p className="login-welcome-back-message">Welcome Back {userName}</p>
      }

      <h3 className="heading">Menu</h3>
      <div className="search-menu-input-div">
        <input
          className="search-menu-input"
          placeholder="Search Menu"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
        />
      </div>
      <div className="catalog-menu-page-buttons-container">
        <button
          onClick={() => {
            setCategoryFilter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Pizza");
          }}
        >
          Pizza
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Burger");
          }}
        >
          Burger
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Pasta");
          }}
        >
          Pasta
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Noodles");
          }}
        >
          Noodles
        </button>
      </div>

      {alreadAddedItemStatus ? (
        <div className="item-added-message">
          <p className="item-already-added-msg">
            Item Already added in the cart
          </p>
          <p className="item-already-added-msg">
            check the Quantity in the cart menu
          </p>
        </div>
      ) : null}

      <div className="catalog-menu-section">
        {CatalogMenuData.filter((menuItem) => {

          // filtering based on search input title filter

          return menuItem.title.toLowerCase().includes(search.toLowerCase());
        })
          .filter((menuItem) => {
            if (!categoryFilter || categoryFilter === "all") {
              return true;
            }

            return menuItem.category === categoryFilter;
          })
          .map((menuItem:CatalogMenuCardsProps) => {
            return (
              <div>
                <CatalogMenuCards
                  menuItem={menuItem}

                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CatalogMenuPage;
