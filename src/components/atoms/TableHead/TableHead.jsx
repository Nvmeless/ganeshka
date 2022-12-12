import React from "react";
import PropTypes, { bool, func, object } from 'prop-types';
import styled, { css, withTheme } from "styled-components";
import StyledTHead from "./style";

class TableHead extends React.Component {

    constructor(props){
        super(props);
        }

    render(){
        return (
            <StyledTHead onClick={this.props.onSelectAllClick} {...this.props} className={[this.props?.className].join(' ')} 
            style={
                {
                    ...{

                    },
                    ...this.props?.style
                }
            }>
                {this.props.children}
            </StyledTHead>
        )
    }

}

export default withTheme(TableHead);

TableHead.propTypes ={ 
    /**
     * Content of component
     */
    children: PropTypes.node,
    /**
     * Replace or extends styles of component
     */
     classes: PropTypes.object,
    /**
     * the used component for the root node
     */
     component: PropTypes.elementType,
    /**
    * Prop system
     */
     sx: PropTypes.oneOfType([
            PropTypes.arrayOf([
                func,
                object,
                bool
            ]),
            PropTypes.func,
            PropTypes.object
     ])
}

TableHead.defaultProps = {
    children:null,
    classes:null,
    component: null,
    sx:null
}