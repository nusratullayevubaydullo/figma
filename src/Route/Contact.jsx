import React from 'react'
import './Contact.css'
import call from '../assets/call.png'
import massage from '../assets/massage.png'
import teleg from '../assets/telegram.png'
import qr from '../assets/qr.png'
import frm from '../assets/frm.png'
import face from '../assets/face.png'
import twi from '../assets/twi.png'
import ins from '../assets/insta.png'
import ina from '../assets/in.png'
import coin from '../assets/coin.png'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <>
      <div className="slesh">
        <Link to={'/Home'}>Home / </Link>
        <a href="">Contact</a>
      </div>
      <div className="kor">
        <div className="casend">
          <div className="call">
            <div className="call1">
              <img src={call} alt="" />
              <h1>Call To Us</h1>
            </div><br />
            <p>We are available 24/7, 7 days a week.</p><br />
            <p>Phone: +8801611112222</p>
          </div>
          <div className="send">
            <div className="call1">
              <img src={massage} alt="" />
              <h1>Write To Us</h1>
            </div><br />
            <p>Fill out our form and we will contact </p>
            <p>you within 24 hours.</p><br />
            <p>Emails: customer@exclusive.com</p><br />
            <p>Emails: support@exclusive.com</p><br />
          </div>
        </div>
        <div className="boss">
          <div className="bigb">
            <div className="your">
              <input type="text" placeholder='    Your Name' />
              <input type="email" placeholder='   Your Email' />
              <input type="number" placeholder='  Your Phone' />
            </div>
            <div className="massage">
              <textarea name="" id="" placeholder='  Your Massage'></textarea>
            </div>
            <button className='nom'>Send Massage</button>
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

export default Contact