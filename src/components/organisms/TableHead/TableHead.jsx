import React from "react";
import PropTypes, { bool, func, object } from 'prop-types';
import styled, { css, useTheme, withTheme } from "styled-components";
const StyledTHead = styled.thead`
color:red;
${(props) => {if(props?.primary){return css`background-color:${props => props.theme.primary}`}return css`background-color:${props => props.theme.secondary}`}}
background-color:${props => props.primary ? props.theme.primary : props.theme.secondary};
`;
class TableHead extends React.Component {

    constructor(props){
        super(props);

        }

    render(){
        return (
            <StyledTHead {...this.props} className={[this.props?.className].join(' ')} 
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

/*     definiteColor = () => {
        if(this.theme.primary){
            return this.theme.primary;
        }
        return this.theme.secondary;
    } */

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