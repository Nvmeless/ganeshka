import "./Home.css";
import { BottomNavBar } from "../../molecules/BottomNavBar/BottomNavBar";
import { ShopList } from "../../molecules/ShopList/ShopList";

export function Home() {
  return (
    <>
      <div className="page">
        <div className="main-container">
          <div className="filtre-produit-boutique"></div>
          <div className="search-bar"></div>
          <div className="container mapOuListe">
            <ShopList></ShopList>
          </div>
          <div className="filtre-map-liste"></div>
        </div>
        <BottomNavBar></BottomNavBar>
      </div>
    </>
  );
}
