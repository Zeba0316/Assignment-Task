import React from 'react';
import "./card.css";
// importing icons
import { GoPlus } from "react-icons/go";

const Card = ({title,time,amount,description}) => {
    return (
        <div className='card'>
            <p>{title}</p>
            <p>{time}</p>
            <p>{description}</p>
            <p>{amount}</p>
            <div className='add-btn'>
            <GoPlus size={25} />
            </div>
        </div>
    );
}

export default Card;
