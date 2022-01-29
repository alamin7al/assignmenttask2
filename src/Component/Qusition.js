import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Quistion.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Qusition = () => {
    AOS.init();

    return (
        <div className='my-5'>
            <div className='container'>
                <div
                
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="text-start">
                    <h5 className='qusitio fs-4'> প্রশ্ন আছে? উত্তর খুঁজুন!
                    </h5>
                    <h1 className='qusitio2 '> করোনাভাইরাস সম্পর্কে সচরাচর জিজ্ঞাসা
                    </h1>
                </div>
            </div>
            <div class="mb-3 my-5">
                <div
                
                data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
                className=" container">
                    <input placeholder='🔍 অনুসন্ধান করুন' class="form-control w-100 h-100" id="exampleInputPassword1" />
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div
                        
                    className="col-md-5">
              

                        <Accordion
                          data-aos="fade-right"
                          data-aos-anchor="#example-anchor"
                          data-aos-offset="1500"
                          data-aos-duration="1500"
                        defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className='hedeer'>
                                <Accordion.Header className='accc'>
                                    <p className='acc fs-3'>
                                        কোভিড-১৯ ভ্যাকসিন
                                    </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='text-start fw-normal'>
                                        আমার নাম ও এনআইডি নম্বর তো অফিস থেকে নিয়ে অন্য সবার তালিকার সাথে স্বাস্থ্য অধিদপ্তরের এমআইএস-এ পাঠিয়েছে। আমাকে কি আবার নিবন্ধন করতে হবে?
                                        কারা ভ্যাকসিন প্রদান করবেন? তাদের যোগ্যতাই বা কেমন হবে?
                                        কোথায় ভ্যাকসিন প্রদান করা হবে?
                                        মোট কয় ডোজ ভ্যাকসিন দিতে হবে?
                                        এক ডোজ নিলে কি যথেষ্ট হবে না?
                                        প্রথম ডোজের পর দ্বিতীয় ডোজ নিতে ভুলে গেলে বা দেরি হলে কী করণীয়?
                                        এ ভ্যাকসিন গ্রহণ কি বাধ্যতামূলক?
                                        ভ্যাকসিন নেবার সময় কি মাস্ক পরে আসতে হবে?
                                        কোভিড-১৯ ভ্যাকসিন কেন প্রয়োজন?
                                        এ ভাইরাস অত্যন্ত সংক্রামক যার কোনো কার্যকর ওষুধ এখনো আবিষ্কৃত হয়নি। ভ্যাকসিন কোভিড-১
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='hedeer'>
                                <Accordion.Header>
                                    <p className="acc fs-3">
                                        অন্যান্য তথ্য
                                    </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-start fw-normal">
                                        দুটি ডোজেই কী ভ্যাকসিনের মাত্রামান একই থাকবে?
                                        কোভিড-১৯ ভাইরাসে আক্রান্তদেরও কি এই ভ্যাকসিন নিতে হবে?
                                        কোভিড-১৯ থেকে আরোগ্যলাভের কতদিন পর এই ভ্যাকসিন নেয়া যাবে?
                                        কোভিড-১৯ চিকিৎসায় প্লাজমা থেরাপি নেয়া কেউ কি এই ভ্যাকসিন নিতে পারবেন?
                                        গর্ভবতী বা স্তন্যদায়ী নারী কি এই ভ্যাকসিন নিতে পারবেন?
                                        ভ্যাকসিন গ্রহনের আগে বা পর কি গর্ভধারণ করা যাবে?
                                        বর্তমানে প্রাপ্ত ভ্যাকসিনের মধ্যে কোন ভ্যাকসিন সবচেয়ে বেশি কার্যকর?
                                        কোভিড-১৯ ভ্যাকসিন কেন প্রয়োজন?
                                        এ ভাইরাস অত্যন্ত সংক্রামক যার কোনো কার্যকর ওষুধ এখনো আবিষ্কৃত হয়নি। ভ্যাকসিন কোভিড-১৯ থেকে সুরক্ষার এক
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='hedeer'>
                                <Accordion.Header>
                                    <p className="acc fs-3">
                                        ভ্যাকসিন সংক্রান্ত জরুরি তথ্য
                                    </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-start fw-normal">
                                        ডায়াবেটিক রোগী কি এই ভ্যাকসিন নিতে পারবেন?
                                        প্রতিবন্ধী ও অটিজম ব্যক্তিরাও কি ভ্যাকসিন পাবেন?
                                        কোভিড-১৯ ভ্যাকসিনের পার্শ্বপ্রতিক্রিয়া কী কী?
                                        পার্শ্বপ্রতিক্রিয়া দেখা দিলে কি করা প্রয়োজন?
                                        পার্শ্বপ্রতিক্রিয়া হলে কখন চিকিৎসকের সাথে সশরীরে সাক্ষাৎ করা প্রয়োজন?
                                        কারো কারো এলার্জি আছে। তাহলে কি তারা ভ্যাকসিন নিতে পারবেন?
                                        অতীতে ভ্যাকসিনের সাথে অটিজমের সম্পর্ক পাওয়া গিয়েছিলো। এই ভ্যাকসিনে কি এমন কিছু ঘটতে পারে?
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='hedeer'>
                                <Accordion.Header>
                                    <p
                                        className='acc fs-3 '>
                                        পার্শ্বপ্রতিক্রিয়া ও অন্যান্য রোগ
                                    </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="text-start fw-normal">
                                        ভ্যাকসিন নেবার পর নিশ্চয়ই আর স্বাস্থ্যবিধি (মাস্ক পরা, হাত ধোয়া, শারীরিক দূরত্ব বজায় রাখা ইত্যাদি) মেনে চলার প্রয়োজন নেই?
                                        তাহলে আবার কতদিন পর স্বাভাবিকভাবে ঘুরে বেড়ানো যাবে?
                                        ভ্যাকসিন গ্রহণের কতদিনের মধ্যে শরীরে রোগ প্রতিরোধ ক্ষমতা (Antibody) গড়ে ওঠে?
                                        কোভিড-১৯ ভ্যাকসিন কতদিন দেহে কার্যকর প্রতিরোধ-সুরক্ষা দেবে?
                                        শুনেছি, ভ্যাকসিন নিলে দেহে জিনঘটিত পরিবর্তন সাধিত হবে। কথাটি কি সত্যি?
                                        শুনেছি, ভ্যাকসিন উৎপাদনে শুকর বা বানরের দেহের ভগ্নাংশ ব্যবহার করা হয়।
                                        মদ্যপানের সাথে কোভিড-১৯ ভ্যাকসিনের কার্যকারিতার সম্পর্ক কি?
                                        বলা হচ্ছে, ভাইরাসটি তার নিজের পরিবর্তন সাধন করে নতুন রূপের জন্ম দিচ্ছে। সেক্ষেত্রে, এখন ভ্যাকসিন নেয়া হলে কি পরিবর্তন ঘটা ভাইরাস প্রতিরোধে এই ভ্যাকসিন কাজে আসবে?
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>











                    </div>
                    <div className="col-md-7">
                        <div>
                            <h3 className='cobid text-start'>
                                কোভিড-১৯ ভ্যাকসিন কেন প্রয়োজন?


                            </h3>
                            <p className='cobid2 text-start lh-lg'>এ ভাইরাস অত্যন্ত সংক্রামক যার কোনো কার্যকর ওষুধ এখনো আবিষ্কৃত হয়নি। ভ্যাকসিন কোভিড-১৯ থেকে সুরক্ষার একটি নিরাপদ ও কার্যকরী পন্থা।</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Qusition;