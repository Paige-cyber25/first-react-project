import React from 'react';
import CardImage from '../CardImage';
import { dataTop} from '../database';
import './TopPhotoCard.css';

function TopPhotoCard() {
    return (
        <header className="header">
            <div className="header2">Featured games</div>
            <div className="TopPhotoCard">
            {
                dataTop.map((item, i) => {
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
        </header>
        )
}

export default TopPhotoCard;