import React from 'react'

const food1 = "https://mibucketcl2023.s3.amazonaws.com/images/food1.png"
const food2 = "https://mibucketcl2023.s3.amazonaws.com/images/food2.png"
const food3 = "https://mibucketcl2023.s3.amazonaws.com/images/food3.png"



const Menu = () => {
  return (
    <div className='menu'>
        <div>
            <p>Food Menu</p>
            <h1>Fresh taste and grat price</h1>
        </div>
        <div className='menuItemCont'>

            <div className='menuItem'>
                <img src={food1} alt="imagen" />
                <p>Chicken Burguer</p>
                <p>Tasty Food</p>
                <p>$11.00</p>
            </div>

            <div className='menuItem'>
                <img src={food2} alt="imagen" />
                <p>Special Beef Burger</p>
                <p>Tasty Food</p>
                <p>$11.00</p>
            </div>

            <div className='menuItem'>
                <img src={food3} alt="imagen" />
                <p>Chicken Fry Pack</p>
                <p>Tasty Food</p>
                <p>$11.00</p>
            </div>



        </div>
    </div>
  )
}

export default Menu