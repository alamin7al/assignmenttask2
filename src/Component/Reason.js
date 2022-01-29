import { AddBoxRounded, AirplanemodeActive, ArrowBackIosOutlined, CenterFocusStrongRounded, ClearAllRounded, ClearRounded, CropSharp, DirectionsTransit, DragHandleOutlined, DragHandleRounded, FormatAlignLeftRounded, HomeOutlined, MarkunreadMailboxSharp, MarkunreadSharp, Satellite, ShareRounded, ViewAgenda, WatchLater } from '@material-ui/icons';
import React from 'react';
import './Reson.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Reason = () => {
    AOS.init();

    return (
        <div className='my-5 '>
            <div className="my-5">
                <p className='fs-4 first'>আপনাকে যা করতে হবে</p>
                <h1 className='fs-1 second '>করোনাভাইরাস থেকে কীভাবে নিজেকে রক্ষা করবেন?</h1>
            </div>
            <div className="container ">
                <div className="row ">
                    <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="col-md-3">
                        <div className='mb-4 mt-5'>
                            <h3 className='colorcase fs-3'> আপনার যা করণীয়
                            </h3>
                            <p className='colorcase2'>এটি অনুসরণ করতে ভুলবেন না
                            </p>
                        </div>
                        <div>
                            <div className="d-flex mb-4">
                                <HomeOutlined className='uniquecolor fs-2'></HomeOutlined>
                                <h6 className='ms-1 text-start fs-5'>ঘরে থাকুন </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <MarkunreadMailboxSharp className='uniquecolor fs-2'></MarkunreadMailboxSharp>
                                <h6 className='ms-1 text-start fs-5'>
                                    মাস্ক পড়ুন
                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <ViewAgenda className='uniquecolor fs-2'></ViewAgenda>

                                <h6 className='ms-1 text-start fs-5'>
                                    সবসময় টিস্যু ব্যবহার করুন

                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <HomeOutlined className='uniquecolor fs-2'></HomeOutlined>

                                <h6 className='ms-1 text-start fs-5'>
                                    আপনার বাড়ি জীবাণুমুক্ত করুন

                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <DragHandleOutlined className='uniquecolor fs-2'></DragHandleOutlined>

                                <h6 className='ms-1 text-start fs-5'>
                                    আপনার হাত ধুয়ে নিন

                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <ClearRounded className='uniquecolor fs-2'></ClearRounded>

                                <h6 className='ms-1 text-start fs-5'>

                                    আত্ম - বিচ্ছিন্নতা

                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <WatchLater className='uniquecolor fs-2'></WatchLater>

                                <h6 className='ms-1 text-start fs-5'>
                                    ঘন ঘন পানি পান করুন

                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <Satellite className='uniquecolor fs-2'></Satellite>


                                <h6 className='ms-1 text-start fs-5'>
                                    হাত স্যানিটাইজ করুন

                                </h6>
                            </div>
                        </div>
                    </div>
                    <div
                       data-aos="fade-left"
                       data-aos-anchor="#example-anchor"
                       data-aos-offset="2500"
                       data-aos-duration="1500"
                    className="col-md-3">
                        <div
                        
                     
                        className='mt-5'>
                            <h3 className='text-danger fs-3'> যা এড়ানো উচিত
                            </h3>
                            <p className='colorcase3'>এটি অনুসরণ করতে ভুলবেন না
                            </p>

                        </div>
                        <div>
                            <div className="d-flex mb-4">
                                <CropSharp className='text-danger fs-2'></CropSharp>
                                <h6 className='ms-1 text-start fs-5'>
                                    যা এড়ানো উচিত

                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <FormatAlignLeftRounded className='uniquecolor fs-2'></FormatAlignLeftRounded>
                                <h6 className='ms-1 text-start fs-5'>
                                    এটি অনুসরণ করতে ভুলবেন না


                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <DirectionsTransit className='uniquecolor fs-2'></DirectionsTransit>
                                <h6 className='ms-1 text-start fs-5'>
                                    সামাজিক দূরত্ব


                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <CenterFocusStrongRounded className='uniquecolor fs-2'></CenterFocusStrongRounded>
                                <h6 className='ms-1 text-start fs-5'>
                                    প্রাণী এড়িয়ে চলুন


                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <ClearAllRounded className='uniquecolor fs-2'></ClearAllRounded>
                                <h6 className='ms-1 text-start fs-5'>
                                    আপনার মুখ স্পর্শ করবেন না



                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <DragHandleRounded className='uniquecolor fs-2'></DragHandleRounded>
                                <h6 className='ms-1 text-start fs-5'>
                                    হ্যান্ডশেকিং এড়িয়ে চলুন



                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <AddBoxRounded className='uniquecolor fs-2'></AddBoxRounded>
                                <h6 className='ms-1 text-start fs-5'>
                                    সংক্রামিত পৃষ্ঠতল এড়িয়ে চলুন




                                </h6>
                            </div>
                            <div className="d-flex mb-4">
                                <ArrowBackIosOutlined className='uniquecolor fs-2'></ArrowBackIosOutlined>
                                <h6 className='ms-1 text-start fs-5'>
                                    ফোঁটা থেকে বিরত থাকুন




                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img 
                       data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className='img-fluid' src="https://covidsurokkha.com/assets/images/protect-img.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reason;
