import React from  'react';
import './Button.scss'

export default ({label, classType, click}) => {
    return (
        <button className={"button "+ classType} onClick={e=> click && click(label) }>
            {label}
        </button>
    )
}