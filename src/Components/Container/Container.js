import React from 'react'
import "./Container.scss"
import Reklama from "../../Images/reklama.png"

function Container() {
    return (
        <div className='banner'>
            <img src={Reklama} width="100%" alt="" />
            <div className="lenta">
                <div>
                    <h2>WHY BUY DIRECT FROM</h2>
                    <h2>BOSE</h2>
                </div>
                <div>
                    <h2>FREE 2-day </h2>
                    <h2>shipping*</h2>
                </div>
                <div>
                    <h2>90-day risk-free </h2>
                    <h2>trial*</h2>
                </div>
                <div>
                    <h2>Price match </h2>
                    <h2>promise*</h2>
                </div>
                <div>
                    <h2>*Learn more</h2>
                </div>
            </div>
        </div>
    )
}

export default Container
