import React from 'react';
import CardImage from '../CardImage';
import { dataBottom } from '../database';
import './BottomPhotoCard.css'


function BottomPhotoCard() {
    return(
        <div className ="bottom-container">
            <div className ="paragraph4"><button type="button">Try Stadia Pro free for 1 month</button></div>
            <div className="paragraph5"><sup>1</sup>$9.99/mo after trial, cancel anytime.
            </div>
            <div className = "paragraph6">
                More great games are waiting in the Stadia store
            </div>
            <div className = "paragraph7">The games you buy go from screen… to screen… to screen. <span>Compatible</span> laptops and phones. TVs. You have what it takes.</div>
            <div className ="bottom-card-container">
                    {
                        dataBottom.map((item, i) => {
                            return <CardImage 
                            key = {i}
                            cls = {item.cls}
                            url = {item.url}
                            title = {item.title}
                            />
                        })
                    }
            </div>
            <div className ="footer">
                <div className = "footer1">Privacy</div>
                <div className ="footer2">Terms of Service</div>

            </div>
        </div>
    )

}


export default BottomPhotoCard;