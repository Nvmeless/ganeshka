import PropTypes, { bool, func } from 'prop-types';
import {StyledTableBody} from './styles.js';

export const TableBody = ({align,children,classes,sx,...props}) => {
    classes = classes ? classes : '';
    return (
        <StyledTableBody  {...props} className={['MuiTableBody-root',classes, props?.className].join(' ')} style={
            {
                ...{
                }
            }
        }>
            {children}
        </StyledTableBody>
    )
}

TableBody.propTypes = {
    children:PropTypes.node,
    classes:PropTypes.object,
    component:PropTypes.elementType,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf([
            func,
            Object, 
            bool
        ]), 
        func, 
        Object
    ])
}