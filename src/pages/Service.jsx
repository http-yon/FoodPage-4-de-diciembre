import React from 'react'

const s1 = "https://mibucketcl2023.s3.amazonaws.com/images/s1.png"
const s2 = "https://mibucketcl2023.s3.amazonaws.com/images/s2.png"
const s3 = "https://mibucketcl2023.s3.amazonaws.com/images/s3.png"


const Service = () => {
    return (
        <div className='service'>
            <div className='service1'>
                <p>Services</p>
                <h1>We provide best food services</h1>
            </div>
            <div className='serviceItemCont'>

                <div className='serviceItem'>
                    <img src={s1} alt="imagen" />
                    <h1>Order</h1>
                    <p>It is a long established
                        be distracted by the readable
                        looking at its layout.</p>
                </div>

                <div className='serviceItem'>
                    <img src={s2} alt="imagen" />
                    <h1>Shipping</h1>
                    <p>It is a long established
                        be distracted by the readable
                        looking at its layout.</p>
                </div>

                <div className='serviceItem'>
                    <img src={s3} alt="imagen" />
                    <h1>Dellvered</h1>
                    <p>It is a long established
                        be distracted by the readable
                        looking at its layout.</p>
                </div>



            </div>
        </div>
    )
}

export default Service