import React from 'react'
import st from '../../assets/strelka.png'
import se from '../../assets/search.png'
import he from '../../assets/heart.png'
import ko from '../../assets/korz.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="none">
        <div className="a1">
          <h1>Summer Sale for All Swim SuitsAnd Free Express Delivery-50%!</h1>
          <a href="">ShopNow</a>
        </div>
        <div className="language">
          <h1>English</h1>
          <img src={st} alt="" />
        </div>
      </div>
      <header>
        <div className="nav-bar">
          <div className="name">
            <h1>Exclusive</h1>
          </div>
          <div className="compon">
            <Link to={'Home'} className='nav-link'>Home</Link>
            <Link to={'Contact'} className='nav-link'>Contact</Link>
            <Link to={'About'} className='nav-link'>About</Link>
            <Link to={'Sign'} className='nav-link'>Sign-Up</Link>
          </div>
          <div className="inp">
            <div className="inpu">
              <input type="text" placeholder='   What are you looking for' />
            </div>
            <div className="moo">
              <img src={se} alt="" />
            </div>
            <div className="imga">
              <img src={he} alt="" />
              <img src={ko} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar