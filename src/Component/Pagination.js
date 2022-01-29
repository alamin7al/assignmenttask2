import React from 'react';
import './Pagination.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Pagination = () => {
    AOS.init();

    return (
        <div className='container my-5'>
            <div 
            
            data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1500"
     data-aos-duration="1500"
            className="row">
                <div className="col-md-6">
                    <p className='my-3'>ডেটা উত্স: ডিএইচআইএস২ | কারিগরি সহায়তা: ইউনিসেফ</p>
                    <p className=''>  হাসপাতালের শয্যা প্রাপ্যতা সম্পর্কে আরও জানতে কল করুন  </p>
                </div>
                <div className="col-md-6  d-flex justify-content-start align-items-center">
                    <button className='btn btn-outline-dark me-3'>
                        আগে
                    </button>
                    <button className='btn btn-outline-dark'>
                        পরে
                    </button>
                </div>
            </div>
            <div 
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="2500"
            data-aos-duration="2500"
            className="hori">
                <hr className='hori' />

            </div>
        </div>
    );
};

export default Pagination;