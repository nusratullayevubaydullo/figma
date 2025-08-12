import React from 'react'
import './About.css'
import girl from '../assets/girls .png'
import bon from '../assets/bontique.png'
import dollar from '../assets/dollar.png'
import busket from '../assets/busket.png'
import db from '../assets/dbmoney.png'
import cruise from '../assets/cruz.png'
import awtson from '../assets/watson.png'
import smith from '../assets/smit.png'
import black from '../assets/black.png'
import order from '../assets/order.png'
import head from '../assets/headphone.png'
import correct from '../assets/correct.png'
import teleg from '../assets/telegram.png'
import qr from '../assets/qr.png'
import frm from '../assets/frm.png'
import face from '../assets/face.png'
import twi from '../assets/twi.png'
import ins from '../assets/insta.png'
import ina from '../assets/in.png'
import coin from '../assets/coin.png'

import { Link } from 'react-router-dom'
function About() {
  return (
    <>
      <div className="slesh">
        <Link to={'/Home'} className='kok'>Home / </Link>
        <a href="">About</a>
      </div>
      <div className="our">
        <div className="ours">
          <h1>Our Story</h1><br /><br />
          <p>Launced in 2015, Exclusive is South Asian's premier online shopping</p>
          <p>marketplace with an active presense in Bangladesh. Supported</p>
          <p>by wide range of tailored marketing, data and service solutions, </p>
          <p>Exclusive has 10,500 sallers and 300 brands and service 3 </p>
          <p>millioons customers across the region.</p><br /><br />
          <p>Exclusive has more than 1 Million products to offer, growing at a</p>
          <p>very fast. Exclusive offers a diverse assotment in categories</p>
          <p>ranging from consumers</p>
        </div>
        <div className="ourst">
          <img src={girl} alt="" />
        </div>
      </div>
      <div className="rods">
        <div className="reds">
          <div className="redder">
            <div className="boxkim1">
              <img src={bon} alt="" />
              <h1>10.5 K</h1>
              <p>Sallers active our site</p>
            </div>
          </div>
          <div className="redder">
            <div className="boxkim2">
              <img src={dollar} alt="" />
              <h1>33 K</h1>
              <p>Mopnthly Produduct sale</p>
            </div>
          </div>
          <div className="redder">
            <div className="boxkim3">
              <img src={busket} alt="" />
              <h1>45.5 K</h1>
              <p>Customer active in our site</p>
            </div>
          </div>
          <div className="redder">
            <div className="boxkim4">
              <img src={db} alt="" />
              <h1>25 K</h1>
              <p>Anual gross sale in our site</p>
            </div>
          </div>
        </div>
      </div>
      <div className="jag">
        <div className="jag2">
          <div className="lop">
            <img src={cruise} alt="" />
            <h1>Tom Cruise</h1>
            <p>Faunder & Chairman</p><br />
            <img src={black} alt="" />
          </div>
          <div className="lop">
            <img src={awtson} alt="" />
            <h1>Emma Watson</h1>
            <p>Managing Director</p><br />
            <img src={black} alt="" />
          </div>
          <div className="lop">
            <img src={smith} alt="" />
            <h1>Will Smith</h1>
            <p>Product Director</p><br />
            <img src={black} alt="" />
          </div>
        </div>
      </div>
      <div className="operator">
        <div className="operators">
          <div className="mouse">
            <img src={order} alt="" /><br />
            <h1>FREE AND FAST DELIVERY</h1>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="mouse">
            <img src={head} alt="" /><br />
            <h1>24/7 CUSTOMER SERVICE</h1>
            <p>Friendly 24/7 customer support </p>
          </div>
          <div className="mouse">
            <img src={correct} alt="" /><br />
            <h1>MONEY BACK GUARANTEE</h1>
            <p>We return money within 30 days</p>
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

export default About