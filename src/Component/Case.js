import React from 'react';
import './Case.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Case = () => {
    AOS.init();

    return (
        <div className='container my-5'>
            <div
            data-aos="zoom-in-up"
            data-aos-duration="3000"
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
                        <h1 className='mb-3 fontcolorcase'>  ১৫৮০৭  </h1>
                        <h5 className='fontcolorcase'>নতুন কেস</h5>
                    </div>
                    <div className="">
                        <h1 className='mb-3 fontcolorcase'> ১৫   </h1>
                        <h5 className='fontcolorcase'>  নতুন মৃত্যু </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Case;