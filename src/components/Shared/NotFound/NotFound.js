import React from 'react';
import notFountImg from '../../../images/404.png';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="not-found-img ">
            <img src={notFountImg} alt="" className="img-fluid" />
        </div>
    );
};

export default NotFound;
