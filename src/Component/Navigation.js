import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../image/logo.webp'
import './Navigation.css'
const Navigation = () => {
    return (
        <div>

            <div className='container'>
                <Navbar bg="light" expand="lg">

                    <img src={img} className='logo' alt="" />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <div>
                                <Link className='navbarcolor text-decoration-none fs-5' to='/home'>হোম
                                </Link>
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <button className='btn btn-outline-dark btn-lg'>Login</button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

            </div>
            <div className="scroolstyle ">
                <marquee className='my-2' behavior="scroll" direction="left">
                    প্রতিদিন ২৪/৭ বিনামূল্যে ডাক্তারের পরামর্শের জন্য ডায়াল করুন ১৬২৬৩। কোভিড-১৯ নমুনা পরীক্ষা,চিকিৎসা ও হাসপাতাল সংক্রান্ত তথ্যের প্রয়োজনে ফোন করুন - ০১৩১৩৭৯১১৩০, ০১৩১৩৭৯১১৩৮, ০১৩১৩৭৯১১৩৯, ০১৩১৩৭৯১১৪০, ০১৩২১১৭৩৮৬৫
                    করোনাভাইরাস-লাইভ-আপডেট</marquee>
            </div>
        </div>
    );
};

export default Navigation;