import React from 'react';


function CardImage(props) {
    return (
         <div className={props.cls}>
                <img src={props.url} alt={props.title} />
                <p>{props.title}</p>
            </div>
    )
}

export default CardImage;