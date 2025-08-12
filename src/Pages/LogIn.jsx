import React from 'react'
import './Login.css'
import teleg from '../assets/telegram.png'
import qr from '../assets/qr.png'
import frm from '../assets/frm.png'
import face from '../assets/face.png'
import twi from '../assets/twi.png'
import ins from '../assets/insta.png'
import ina from '../assets/in.png'
import po from '../assets/bigPhone.png'
function LogIn() {
  return (
    <div>

      <div className="a3">
        <div className="imh">
          <img src={po} alt="" />
        </div>
        <div className="log">
          <h1>Log in to Exclusive</h1><br />
          <p>Enter your details below</p><br /><br />
          <div className="inputes">
            <input type="email" placeholder='Email or Phone Number' />
            <input type="password" placeholder='Password' />
          </div>
          <div className="knopkalar">
            <button className='red'> Log in </button>
            <button><span>Forget Password</span></button>
          </div>
        </div>

      </div>
      <footer>
        <div className="foot">
          <div className="exc">
            <h1>Exclusive</h1><br />
            <h2>Subscribe</h2><br />
            <p>Get 10% off your first order</p><br />
            <div className="diva">
              <input type="email" placeholder='   Enter your Email' />
            </div>
            <div className="teleg">
              <img src={teleg} alt="" />
            </div>
          </div>
          <div className="sup">
            <h1>Support</h1>
            <p className='line'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="acc">
            <h1>
              Account
            </h1>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div className="qui">
            <h1>Quick Link</h1>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="dow">
            <h1>Download App</h1><br />
            <p>Save $3 with App New User Only</p><br />
            <div className="aaaa">
              <div className="bb">
                <img src={qr} alt="" />
              </div>
              <div className="cc">
                <img src={frm} alt="" />
              </div>
            </div>
            <div className="icons">
              <img src={face} alt="" />
              <img src={twi} alt="" />
              <img src={ins} alt="" />
              <img src={ina} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LogIn