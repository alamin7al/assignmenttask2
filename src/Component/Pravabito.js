import React from 'react';
import './Pravabito.css'
import img from '../image/check-1.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Pravabito = () => {
    AOS.init();

    return (
        <div className='mx-3 backge'>
            <div
                data-aos="fade-up"

                data-aos-duration="3000"
                className="row">
                <div className="col-md-3 my-5">
                    <img className='me-3  spinners rotates' src={img} alt="" />
                    <img className='me-3  spinnerss rotatess' src={img} alt="" />
                    <img className='me-3  spinnersss rotatesss' src={img} alt="" />

                </div>
                <div className="col-md-9">

                    <div

                        //  data-aos="flip-left"
                        //  data-aos-easing="ease-out-cubic"
                        //  data-aos-duration="3000"
                        className=" my-5 justify-content-center align-items-center">
                        <h3 className='text-white fw-normal'>
                            আপনি প্রভাবিত হতে পারেন মনে হয়? </h3>
                        <p className='text-white fw-normal'>আপনাকে কী করতে হবে তা জানতে আমাদের সাধারণ করোনাভাইরাস চেকার ব্যবহার   করে দেখুন।</p>
                    </div>
                    <div
                        // data-aos="flip-right"
                        // data-aos-easing="ease-out-cubic"
                        // data-aos-duration="2000"
                        className=" my-5 justify-content-center align-items-center">
                        <div class="wrap">
                            <button class="buttona">Submit</button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Pravabito;