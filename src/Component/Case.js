import React from 'react';
import './Case.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import bg from '../image/corona-green-1.webp'
import bg2 from '../image/corona-red-1.webp'
// import bg2 from '../image/istockphoto-1213049841-612x612.jpg'
// import img5 from '../image/bg.jpg'

const Case = () => {
    // const banner = {
    //     background: `url(${img5})`,
    //     // animation: 'rotate 3s linear 1s infinite',
    //     // transition: 'all 1s ease-in-out infinite',
    //     // marginTop:'30px',
    //     // backgroundColor: 'rgba(45, 58, 74, 0.2)',
    //     // backgroundBlendMode: 'darken, luminosity',
    //     height:'100%',
    //     width:'100%',
    //     backgroundRepeat: 'no-repeat',
    // }
    AOS.init();

    return (
        <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className=" p-3">
            <div className=' container banner'>

                <div
                  
                    className=" justify-content-center align-items-center">
                    <h1 className='fontcolor'>বাংলাদেশ</h1>
                    <h1 className='my-3 fontcolorcase'>
                        নিশ্চিত করোনাভাইরাস কেস
                    </h1>
                    <h5 className='fontcolorcase'>
                        সর্বশেষ সংষ্করণ: জানুয়ারি ২৮, ২০২২
                    </h5>
                    <div className="d-flex justify-content-center align-items-center my-3">
                        <div className="me-5 ">
                            <div className="d-flex ">
                                <div className="">
                                    <img className='me-3  spinner rotate' src={bg} alt="" />
                                </div>
                                <div className="">
                                    <h5 className='fontcolorcase'>নতুন কেস</h5>

                                    <h1 className='mb-3 fontcolorcase'>  ১৫৮০৭  </h1>
                                </div>

                            </div>
                        </div>
                        <div className="me-5 ">
                            <div

                                className="d-flex ">
                                <div className="">
                                    <img className='me-3  spinner rotate' src={bg2} alt="" />
                                </div>
                                <div className="">
                                    <h1 className='mb-3 fontcolorcase'> ১৫   </h1>
                                    <h5 className='fontcolorcase'>  নতুন মৃত্যু </h5>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Case;