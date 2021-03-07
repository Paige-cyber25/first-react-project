import React from 'react';
import logo from './logo.svg'
import './TopSection.css'

function TopSection() {
    return (
        <div className ="top-container">
            <div>
                <img className="item1" src = { logo } 
                alt= "stadia-logo"
                />
            </div>
            <div className ="item2">About Stadia</div>
            <div className = "item3">Games</div>
            <div className ="item4">Sign in</div>
            <div className ="item5">Try now</div>
        </div>
    )
}

export default TopSection;