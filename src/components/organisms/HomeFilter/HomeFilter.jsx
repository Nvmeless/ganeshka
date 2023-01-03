import React from "react";
import { FilterMenu } from "../../molecules/FilterMenu/FilterMenu";

export default class HomeFilter extends React.Component {



    generate(){
        var result 
        if (this.props.nameContent.includes("Product") ) {

            result =                 <FilterMenu  changeContent={this.props.changeContent} menus={[
                { label: "map", content: "Product" },
                { label: "list", content: "ProductList" },
            ]} sx={{ position: 'absolute', bottom: 0, mb: 8, ml: 10, mt: 1.5, "& .MuiTabs-indicator": { backgroundColor: 'white' }, "& button": { borderRadius: 10 }, "& button.Mui-selected": { backgroundColor: 'lightgray' } }}></FilterMenu>
        } else {
            result =                 <FilterMenu  changeContent={this.props.changeContent} menus={[
                { label: "map", content: "Shops" },
                { label: "list", content: "ShopsList" },
            ]} sx={{ position: 'absolute', bottom: 0, mb: 8, ml: 10, mt: 1.5, "& .MuiTabs-indicator": { backgroundColor: 'white' }, "& button": { borderRadius: 10 }, "& button.Mui-selected": { backgroundColor: 'lightgray' } }}></FilterMenu>
         
        }
        return result
    }


    render() {
        return (
            <>
                <FilterMenu changeContent={this.props.changeContent} menus={[
                    { label: "products", content: "Product" },
                    { label: "shops", content: "Shops" },
                ]} sx={{ mt: 1.5, "& .MuiTabs-indicator": { backgroundColor: 'white' }, "& button": { borderRadius: 10 }, "& button.Mui-selected": { backgroundColor: 'lightgray' } }}></FilterMenu>
                {this.props.children}
                {this.generate()}

            </>
        )
    }
}