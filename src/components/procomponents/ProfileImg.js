import React, { Component } from 'react'
import dp from './Images/dp.jpg'
export default class ProfileImg extends Component {
    render() {
        return (
            <>
                <header className="profile-img-container">
                    <img src={dp} alt="missing img" className="dp-img"/>
                    <div className="profile-img-info"> </div>
                 </header>

                
               
            
            </>
        )
    }
}
