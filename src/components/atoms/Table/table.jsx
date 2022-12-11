import PropTypes, { bool, func } from 'prop-types';

export const Table = ({children,classes,component,padding,size,stickyHeader,sx,...props}) => {
    classes = classes ? classes : '';
    return (
        <table className={['MuiTableCell-root','MuiTable-stickyHeader',classes, props?.className].join(' ')}>
        {children}
        </table>
    )
}

Table.propTypes = {
    children:PropTypes.node,
    classes:PropTypes.object,
    component:PropTypes.elementType,
    padding: PropTypes.oneOfType([
        'checkbox',
        'none', 
        'normal'
    ]),
    size: PropTypes.oneOfType([
        'medium',
        'small', 
        String
    ]), 
    stickyHeader : Boolean,
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