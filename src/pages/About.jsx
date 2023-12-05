import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const history = useNavigate()

  return (
    <div className='about'>
      <div>
        <img src="https://mibucketcl2023.s3.amazonaws.com/images/about.png" alt="img" />
      </div>
      <div>
        <div className='aboutCont'>
          <div>
            <p className='main'>About Us</p>
          </div>
          <h1>We speak the good <br></br>food language </h1>
          <p>It is a long established fact that a<br></br>
            be distracted by the readable content<br></br>
            looking at its layout. The point of</p>
        </div>
        <div>
          <button onClick={()=>{ history("/service")}}> Learn More </button>
        </div>
      </div>
    </div>
  )
}

export default About