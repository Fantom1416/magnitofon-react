import React from 'react'
import "./Banner.scss"
import rasm1 from "../../Images/rasm1.png"
import rasm2 from "../../Images/rasm2.png"
import rasm3 from "../../Images/rasm3.png"
import rasm4 from "../../Images/rasm4.png"
// import fake from "../../Images/fake.png"
// import fake2 from "../../Images/fake2.png"
// import fake3 from "../../Images/fake3.png"
import Bose1 from "../../Images/bose1.jpg"
import Bose2 from "../../Images/bose2.webp"
import Bose3 from "../../Images/bose3.jpg"

function Banner() {
    return (

        <div>
            <div className='banner2'>
                <h1>RECOMMENDED</h1>
                <div className="cards">
                    <div className="card">
                        <img src={rasm1} alt="" />
                        <h3>SoundLink Micro Bluetooth</h3>
                        <p>Portable Bluetooth</p>
                        <span>$99.00</span>

                        <div className="colors">
                            <span className='black'></span>
                            <span className='blue'></span>
                            <span className='green'></span>
                            <span className='red'></span>
                        </div>
                    </div>
                    <div className="card">
                        <img src={rasm2} alt="" />
                        <h3>SoundLink Micro Bluetooth</h3>
                        <p>Portable Bluetooth</p>
                        <span>$99.00</span>

                        <div className="colors">
                            <span className='black'></span>
                            <span className='blue'></span>
                            <span className='green'></span>
                            <span className='red'></span>
                        </div>
                    </div>
                    <div className="card">
                        <img src={rasm3} alt="" />
                        <h3>SoundLink Micro Bluetooth</h3>
                        <p>Portable Bluetooth</p>
                        <span>$99.00</span>

                        <div className="colors">
                            <span className='black'></span>
                            <span className='blue'></span>
                            <span className='green'></span>
                            <span className='red'></span>
                        </div>
                    </div>
                    <div className="card">
                        <img src={rasm4} alt="" />
                        <h3>SoundLink Micro Bluetooth</h3>
                        <p>Portable Bluetooth</p>
                        <span>$99.00</span>

                        <div className="colors">
                            <span className='black'></span>
                            <span className='blue'></span>
                            <span className='green'></span>
                            <span className='red'></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rasmlar">
                {/* <img src={fake} width="100%" alt="" />
                <img src={fake2} width="100%" alt="" />
                <img src={fake3} width="100%" alt="" /> */}
                <div className="rasm1">
                    <div className="text_rasm1">
                        <h1>Live big. Go mini.</h1>
                        <p>SOUNDLINK MINI II SPECIAL EDITION</p>
                        <button className='b1'>SAVE $50.00</button>
                        <button className='btn'>SHOP</button>
                    </div>
                </div>
                <div className="rasm2">
                    <div className="text_rasm2">
                        <h1>Astonishing sound.</h1>
                        <h1>Wherever life takes you.</h1>
                        <p>SOUNDLINK FLEX BLUETOOTH® SPEAKER</p>
                        <button className='btn2'>SHOP</button>
                    </div>
                </div>
                <div className="rasm3">
                    <div className="text_rasm3">
                        <h1>Brilliant sound.</h1>
                        <h1>Better battery life.</h1>
                        <p>SOUNDLINK MINI II SPECIAL EDITION</p>
                        {/* <button className='b3'>SAVE $50.00</button> */}
                        <button className='btn3'>SHOP</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner
