import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';
// withRouter is a High order component which will power up the component passed into this high order component
//and give it props like history, match etc
const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div  
    className={`${size} menu-item`}
    onClick = {() => history.push(`${match.url}${linkUrl}`)} //  /somatchedURl/linkurl
    >
        <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className='background-image'/>
         <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
