import React from 'react';
import './New.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import img from '../image/prothom-alo-logo.webp'
const News = () => {
    AOS.init();

    return (
        <div className='mt-2 container'>
            <div className='one '></div>
            <div className='two  mx-5 shadow-lg p-3 mb-5 bg-body '>
                <div 
                 data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1500"
                // data-aos-anchor="#example-anchor"
                // data-aos-offset="1500"
                // data-aos-duration="1500"
                className="d-flex align-items-centerr justify-content-center">
                    <p className='imglogowrites me-3 fw-bold'>দেখানো হয়েছে</p>
                    <img src={img} className='logosize ' alt="" />
                </div>
            </div>
           

            <h3 
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500"
            className='fontcolorhospital mb-2'>কাছাকাছি হাসপাতাল</h3>
            <h1 
             data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="2500"
            className='fontcolorbed '>হসপিটাল বেড সেবা</h1>
        </div>
    );
};

export default News;