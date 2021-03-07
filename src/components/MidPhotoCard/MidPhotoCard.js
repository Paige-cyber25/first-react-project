import React from 'react';
import logo2 from './logo2.svg';
import { dataMiddle} from "../database";
import CardImage from "../CardImage"
import './MidPhotoCard.css';

function MidPhotoCard() {
return(
    <div className ="container">
        <div className="logo-container">
            <img src= { logo2 } alt ="stadia-logo-pro" />
        </div>
        <div className="paragraph2">Play games in all their glory for free with Stadia Pro</div>
        <div className ="paragraph3">Free games. More every month. Keep them as long as you’re a Stadia Pro member.<sup>1</sup></div>
        <div className="card-container">
           {
                dataMiddle.map((item, i) => {
                    return (
                        <CardImage
                            key={i}
                            cls={item.cls}
                            url={item.url}
                            title={item.title}
                        />
                    )
                })
            }
        </div>
    </div>
    
)
}

export default MidPhotoCard;