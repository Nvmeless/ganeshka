import React from "react";
import PropTypes from "prop-types";

// ListItem : Text
function ListText(props)  {
    return(
        <span className="itemText">
            {props.text}
        </span>
    )
}

ListText.propTypes ={
    text: PropTypes.string
}

export default ListText