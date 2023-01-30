import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterMenu } from "../../molecules/FilterMenu/FilterMenu";

export default class HomeFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { reloadMap: "" }
    }


    render() {
        return (
            <>
                <FilterMenu changeContent={this.props.changeContent} menus={[
                    { label: "products", content: "ProductList" },
                    { label: "shops", content: "ShopsList" },
                ]} sx={{ mt: 1.5, "& .MuiTabs-indicator": { backgroundColor: 'white' }, "& button": { borderRadius: 10 }, "& button.Mui-selected": { backgroundColor: 'lightgray' } }}></FilterMenu>
                {this.props.children}
                

            </>
        )
    }
}