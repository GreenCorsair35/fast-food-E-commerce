import React from 'react';

import classes from '../css/ProductPreview.module.css'

const ProductPreview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return (
        <div className={classes.ProductPreview}>
            <img src="https://imgur.com/iOeUBV7.png" alt='product preview' />

            <div className={classes.TimeSection}>
                <p>{props.name}</p>
                <p>{`${currentHour}:${currentMinute}`}</p>
            </div>
        </div>
    );
}

export default ProductPreview;