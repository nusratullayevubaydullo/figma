import React from 'react'
import './SignUp.css'
import phone from '../assets/bigPhone.png'
import google from '../assets/google.png'
import teleg from '../assets/telegram.png'
import qr from '../assets/qr.png'
import frm from '../assets/frm.png'
import face from '../assets/face.png'
import twi from '../assets/twi.png'
import ins from '../assets/insta.png'
import ina from '../assets/in.png'
import coin from '../assets/coin.png'
import { Link } from 'react-router-dom'
function Sign() {
  return (
    <>
      <div className="create">
        <div className="left-cr">
          <img src={phone} alt="" />
        </div>
        <div className="right-cr">
          <div className="login">
            <div className="sozlar">
              <h1>Create an account</h1>
              <p>Enter your details below</p>
            </div><br />
            <div className="nname">
              <input type="text" placeholder='Name' />
              <input type="email" placeholder='Email or Phone Number' />
              <input type="password" placeholder='Password' />
            </div>
            <div className="buut">
              <button className='bot'>
                <h1>
                  Create account
                </h1>
              </button>
              <button className='bot2'>
                <div className="google">
                  <img src={google} alt="" />
                  <p>Sign up with Google</p>
                </div>
              </button>
            </div>

            <div className="just">
              <p>Already have account ? </p>
              <Link to='/' className='link'>Log in</Link>
            </div>
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
      <div className="futer">
        <div className="copy">
          <img src={coin} alt="" />
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>

    </>
  )
}

export default Sign