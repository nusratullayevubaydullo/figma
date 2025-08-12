import React from 'react'
import Slider from "react-slick";
import './Home.css'
import strl from '../assets/strela.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sss from '../assets/Frame.png'
function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrow: false,
  };
  return (
    <>

      <section>
        <div className="left-sec">
          <div className="bar2">
            <div className="bar">
              <div className="strl">
                <a href="">Women's Fashion</a>
                <img src={strl} alt="" />
              </div>
              <div className="strl">
                <a href="">
                  Men's Fashion
                </a>
                <img src={strl} alt="" />
              </div>
              <div className="alar">
                <a href="">Electronics</a>
                <a href="">Home & Lifestyles</a>
                <a href="">Medicine</a>
                <a href="">Sport & Outdoor</a>
                <a href="">Bady"s & Toys</a>
                <a href="">Groceries & Pets</a>
                <a href="">Health & Beauty</a>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sec">

          <Slider className='container' {...settings}>
            <div>
              <img src={sss} alt="" />
            </div>
            <div>
              <img src={sss} alt="" />
            </div>
            <div>
              <img src={sss} alt="" />
            </div>
            <div>
              <img src={sss} alt="" />
            </div>
            <div>
              <img src={sss} alt="" />
            </div>
            <div>
              <img src={sss} alt="" />
            </div>
          </Slider>
        </div>
      </section>
      <aside>

      </aside>
    </>
  )
}

export default Home