import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {MerchantCard} from '../../molecules/MerchantCard/MerchantCard'
import { store, fetchShops } from '../../../app/store';


export const MerchantList = ({...props}) => {
    const dispatch = useDispatch()
    const shop = useSelector(state => state.shops.shopsList)
    const shopStatus = useSelector(state => state.shops.status)
    
    useEffect(() => {
        if (shopStatus === 'idle') {
          dispatch(fetchShops())
        }
      }, [shopStatus, dispatch])

    const generateShopCards = (shopPram) => {
        
        if (!shopPram[0]) return <p>On load</p>
        return shopPram[0].map(shop => {
            return <MerchantCard src="./logo192.png" key={shop.name+shop.id} title={shop.name} description={shop.description} price={shop.horaire} checkpointDistance="200m"></MerchantCard>
        })
    }
    return(
        <div onLoad={() => store.dispatch(fetchShops())}>
          {generateShopCards(shop)} 
        </div> 
    )

}