import React from 'react';
import './Loader.scss';

const Loader = ({align}) => {

    let style = align === 'center' ? 'p-center' : '';

    return (
        <div className={`lds-ring ${style}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Loader;