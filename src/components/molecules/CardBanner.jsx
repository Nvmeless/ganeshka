import React from "react";
import Arrangement from "../../three/Arrangement.jsx";
import CustomThreeScene from "../../three/CustomThreeScene.jsx";
//import DigiCardFormTest from "../../../three/DigiCardFormTest.jsx";
export default class CardBanner extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
        }

    }




    render()
    {
    
        return (<CustomThreeScene className="animate-pulse" width="100vw"  height="400px" colors={this.props.lightColors} >
            {/*<DigiCardFormTest cardColor={this.props.cardColor} heightCard={this.props.heightCard} depthCard={this.props.depthCard} widthCard={this.props.widthCard} i={0} /> */}
                <Arrangement nWi></Arrangement>
            </CustomThreeScene>)
    }

}