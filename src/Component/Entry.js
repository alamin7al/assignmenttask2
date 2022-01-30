import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import './Entry.css'
const Entry = () => {
    return (
        <div className="container mb-2 ">
            <div className="row align-items-center justify-content-center">
                <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="2500"
                    //   data-aos-anchor="#example-anchor"
                    //   data-aos-offset="1500"
                    //   data-aos-duration="1500"
                    className="col-md-6 d-flex align-items-center justify-content-center">

                    <div className="d-flex align-items-center justify-content-around">
                        <div class="input-group    ">
                            <div class="input-group">
                                <div className="d-flex ms-5">
                                    <span class=" d-flex mt-2 bg-white entry" id="inputGroup-sizing-default">দেখান  </span>
                                    <NavDropdown title="10" className='coler bg-white text-black ms-4 text-decoration-none' id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/freeTraining coler">20</NavDropdown.Item>
                                        <NavDropdown.Item href="/courses coler">30</NavDropdown.Item>

                                        <NavDropdown.Item href="/battleGround coler">40</NavDropdown.Item>
                                    </NavDropdown>
                                    <span class=" mt-2 bg-white entry" id="inputGroup-sizing-default entry">এন্ট্রি  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex  mx-5 align-items-center justify-content-around">
                            <div class="input-group mb-3 w-100 h-100 mt-2">
                                <div class="input-group mt-3 w-100 h-100">
                                    <div class="my-3 d-flex">
                                        <label class="form-label entry">অনুসন্ধানকরুন:</label>
                                        <input placeholder='🔍' class="form-control w-100 h-100 ms-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Entry;