import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

const Checkbox = (checked) => {
    const [isCheck, setIsCheck] = useState(false);

    if (checked!==undefined && checked){
        setIsCheck(checked)
    }
    const toogleCheckBox = () => setIsCheck(!isCheck)
    return (
        <div onClick={toogleCheckBox} style={{border: '1px solid black', userSelect: 'none', borderRadius: '5px', width: '24px', height: '24px'}}>
            {isCheck && (
                <CheckIcon style={{color: 'black'}} />
            )
            }
        </div>
    );
};

export default Checkbox;