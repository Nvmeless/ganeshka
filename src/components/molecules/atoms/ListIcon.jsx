import React from "react";
import PropTypes from "prop-types";


//List Item : icon
function ListIcon(props)  {
    return(
        <span className="itemIcon">
           {props.icon}
        </span>
    )
}

ListIcon.propTypes ={
    icon: PropTypes.object
}

export default ListIcon