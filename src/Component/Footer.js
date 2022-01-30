import { Facebook, LinkedIn } from '@material-ui/icons';
import React from 'react';
import './Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Footer = () => {
    AOS.init();

    return (
       <div
       data-aos="fade-up"
       data-aos-anchor-placement="center-bottom"
       data-aos-duration="2000"
       
       className=" footerstyle">
            <div className='mt-5 container '>
            <div className="row">
                <div 
              
                
                className="col-md-5">
                    <div 
                    
                  
                    className="mt-5 text-start container ms-2">
                        <h2 className=' mb-4 all'> কোভিডসুরক্ষা
                        </h2>
                        <p className='all'> © ২০২২ কোভিডসুরক্ষা। সমস্ত অধিকার সংরক্ষিত।

                        </p>
                        <p className='all'>আমাদের ফেসবুক এবং লিঙ্কডিন পেইজ ভিজিট করুন

                        </p>
                        <p className='all'>
                          <Facebook></Facebook>  ফেসবুক: <em className='lasd'>কোভিডসুরক্ষা</em>

                        </p>
                        <p className='all'>
                          <LinkedIn></LinkedIn>  লিঙ্কডিন: <em className='lasd'>কোভিডসুরক্ষা</em> <br />
                          <button className='buto my-3'> মতামত দিন  </button>

                        </p>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-8 text start">
                    <div
                    
    //                 data-aos="fade-left"
    //  data-aos-anchor="#example-anchor"
    //  data-aos-offset="1500"
    //  data-aos-duration="1500"
                    className="d-flex align-items-center justify-content-start">
                        <div className="">
                            <h5 className='mb-3 all'>
                                হোম

                            </h5>
                            <h5 className='mb-3 all'>
                                লক্ষণ পরীক্ষক


                            </h5>
                            <h5 className='mb-3 all'>
                                আমাদের সম্পর্কে

                            </h5>
                        </div>
                        <div className="footermy">
                            <h5 className='mb-3 all'>
                                ভ্যাকসিন


                            </h5>
                            <h5 className='mb-3 all'>
                                আমাদের ব্লগ



                            </h5>
                            <h5 className='mb-3 all'>
                                টেস্ট সেন্টার


                            </h5>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
       </div>
    );
};





export default Footer;

