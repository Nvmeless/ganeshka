import {React, useState} from "react";
import ListButton from "./molecules/ListButton.jsx";
import "../style/List.css"

export const List = (props) => {

    //const [selected, setSelected] = useState(false);

    return (

        <span>
            {props.content.map(c => <ListButton key={c.id} 
                buttonContent={c.buttonContent} 
                disabled={c.disabled}
                alignItems={c.alignItems}
                divider={c.divider}
                allProps={props}/>)}
        </span>
    )
}
