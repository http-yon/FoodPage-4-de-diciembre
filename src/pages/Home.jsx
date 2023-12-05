import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {


    const history = useNavigate()

    return (
        <div className='home'>
            <div>
                <div className='homeCont'>
                    <h1>Full Website </h1>
                    <h5>Foods the</h5>
                    <h5>Most precious thing</h5>
                </div>
                <div>
                    <button onClick={()=>{history("/menu")}}> Today's Menu </button>
                </div>
            </div>
            <div>
                <img src="https://mibucketcl2023.s3.amazonaws.com/images/home.png" alt="img" />
            </div>
        </div>
    )
}


export default Home