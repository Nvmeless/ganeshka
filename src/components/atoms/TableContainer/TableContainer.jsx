import PropTypes, { bool, func } from 'prop-types';

export const TableContainer = ({children,classes,component,sx,...props}) => {
    

    return (
        <div className={['MuiTableCell-root',classes, props?.className].join(' ')}  style={
            {
                ...{
                    border: "solid black 2px"
                }
            }
        }>
            {children}
        </div>
    )
}

TableContainer.propTypes = {

    children: PropTypes.node,
    classes: PropTypes.object,
    component:PropTypes.elementType,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf([
            func,
            Object, 
            bool
        ]), 
        func, 
        Object
    ]),
}