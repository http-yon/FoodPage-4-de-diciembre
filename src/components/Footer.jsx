import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h1>Menu Links</h1>
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Service</p>
                <p>Contact</p>
            </div>
            <div>
                <h1>Our Servive</h1>
                <p>Web Design</p>
                <p>Web Development</p>
                <p>Marketing</p>
                <p>Product Management</p>
                <p>Graphic Design</p>
            </div>
            <div>
                <h1>Information</h1>
                <p>About Us</p>
                <p>Delivery Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className='ballCont'>
                <h1>Contact Us</h1>
                <div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                </div>




            </div>
        </div>
    )
}

export default Footer