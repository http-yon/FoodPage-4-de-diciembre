import React from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
    const history = useNavigate()
    return (
        <div className='contact'>
            <p> Contact </p>
            <div>
                <h1>We make quality food <br></br>Everyday
                </h1>

                <button onClick={()=>{ history("/menu")}}> Learn More </button>
            </div>
        </div>
    )
}

export default Contact