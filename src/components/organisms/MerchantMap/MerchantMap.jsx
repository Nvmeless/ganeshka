import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { store, fetchShops } from '../../../app/store';
import { MapContainer, TileLayer,  Marker, Popup } from 'react-leaflet';
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

export const MerchantMap = ({ ...props }) => {

    const dispatch = useDispatch()
    const shop = useSelector(state => state.shops.shopsList)
    const shopStatus = useSelector(state => state.shops.status)

    const position = [45.819712335047505, 4.766092742555396];
    const markerIcon = new L.icon({
        iconUrl: require("../MerchantMap/logo.png"),
        iconSize: new L.point(45, 45)
    })

    useEffect(() => {
        if (shopStatus === 'idle') {
          dispatch(fetchShops())
        }
      }, [shopStatus, dispatch])

    const generateShopMarkers = (shopPram) => {
      
        if (!shopPram[0]) return <p>On load</p>
        return shopPram[0].map(shop => {
            return (
                <Marker key={shop.shopName+shop._id} position={shop.location.Location_coordinates} icon={markerIcon}>
                    <Popup key={shop.shopName+shop._id}>
                        Nom : {shop.shopName}<br/>
                        Description : {shop.shopDescription}<br/>
                    </Popup>
                </Marker> 
            )
        })
    }

    return (
        <div id="map">
            <MapContainer center={position} zoom={13} style={{height: "80vh"}} onLoad={() => store.dispatch(fetchShops())}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {generateShopMarkers(shop)}
            </MapContainer>
        </div>
    )
}
