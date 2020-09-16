import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imgUrl, size}) => (
    <div 
    className={`${size} menu-item`}
    >
        <div style={{
        backgroundImage: `url(${imgUrl})`
    }} className='background-image'/>
         <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
);

export default MenuItem;