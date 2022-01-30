import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import im1 from '../image/im1.jpg'
import im2 from '../image/im2.jpg'
import im3 from '../image/im3.jpg'
import im4 from '../image/im4.jpg'
import im5 from '../image/im5.jpg'
import './Blog.css'
import { Card } from "react-bootstrap";
import {  WatchLaterOutlined } from "@material-ui/icons";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div 
      data-aos="zoom-in-up"
      
      data-aos-duration="3000"
      className="container">
      <h1 className='blogs'>  আমাদের ব্লগ </h1>

       <div className="my-5">
       <Slider {...settings}>
          <div
          
    //       data-aos="flip-left"
    //  data-aos-easing="ease-out-cubic"
    //  data-aos-duration="2000"
          className=""
          >
          <Card className="cardscolor p-4 " style={{ width: '100%' }}>
              <div>
  <Card.Img   style={{width:'auto' ,height:'200px',objectFit:'cover',borderRadius:'15px'}}  
  
  
  src={im4} />
  <button className="btn btn-outline-dark btn-lg btnstyelss">উপসর্গ</button>

              </div>
  <Card.Body>
    <Card.Title>করোনাভাইরাসের উপসর্গ দিন দিন...
</Card.Title>
    <Card.Text>
    আপনি যদি সন্দেহ করেন যে আপনার কোভিড-১৯ আছে, এবং আপনার লক্ষণগুলি কোভিড-১৯...
    </Card.Text>
  </Card.Body>
  <div className="d-flex align-items-center justify-content-between">
      <p>কোভিড-১৯</p>
      <p className="fs-5">  
          <WatchLaterOutlined></WatchLaterOutlined>
           ৮ মিনিট পড়া </p>
  </div>
</Card>
          </div>
          <div>
          <Card className="cardscolor p-4" style={{ width: '100%' }}>
              <div>
  <Card.Img   style={{width:'auto' ,height:'200px',objectFit:'cover',borderRadius:'15px'}}  src={im5} />
  <button className="btn btn-outline-dark btn-lg btnstyelss">উপসর্গ</button>

              </div>
  <Card.Body>
    <Card.Title>করোনাভাইরাসের উপসর্গ দিন দিন...
</Card.Title>
    <Card.Text>
    আপনি যদি সন্দেহ করেন যে আপনার কোভিড-১৯ আছে, এবং আপনার লক্ষণগুলি কোভিড-১৯...
    </Card.Text>
  </Card.Body>
  <div className="d-flex align-items-center justify-content-between">
      <p>কোভিড-১৯</p>
      <p>  
          <WatchLaterOutlined></WatchLaterOutlined>
           ৮ মিনিট পড়া </p>
  </div>
</Card>
          </div>
          <div>
          <Card className="cardscolor p-4" style={{ width: '100%' }}>
              <div>
  <Card.Img   style={{width:'auto' ,height:'200px',objectFit:'cover',borderRadius:'15px'}}  src={im2} />
  <button className="btn btn-outline-dark btn-lg btnstyelss">উপসর্গ</button>

              </div>
  <Card.Body>
    <Card.Title>করোনাভাইরাসের উপসর্গ দিন দিন...
</Card.Title>
    <Card.Text>
    আপনি যদি সন্দেহ করেন যে আপনার কোভিড-১৯ আছে, এবং আপনার লক্ষণগুলি কোভিড-১৯...
    </Card.Text>
  </Card.Body>
  <div className="d-flex align-items-center justify-content-between">
      <p>কোভিড-১৯</p>
      <p>  
          <WatchLaterOutlined></WatchLaterOutlined>
           ৮ মিনিট পড়া </p>
  </div>
</Card>
          </div>
          <div>
          <Card className="cardscolor p-4" style={{ width: '100%' }}>
              <div>
  <Card.Img   style={{width:'auto' ,height:'200px',objectFit:'cover',borderRadius:'15px'}}  src={im3} />
  <button className="btn btn-outline-dark btn-lg btnstyelss">উপসর্গ</button>

              </div>
  <Card.Body>
    <Card.Title>করোনাভাইরাসের উপসর্গ দিন দিন...
</Card.Title>
    <Card.Text>
    আপনি যদি সন্দেহ করেন যে আপনার কোভিড-১৯ আছে, এবং আপনার লক্ষণগুলি কোভিড-১৯...
    </Card.Text>
  </Card.Body>
  <div className="d-flex align-items-center justify-content-between">
      <p>কোভিড-১৯</p>
      <p>  
          <WatchLaterOutlined></WatchLaterOutlined>
           ৮ মিনিট পড়া </p>
  </div>
</Card>
          </div>
          <div>
          <Card className="cardscolor p-4" style={{ width: '100%' }}>
              <div>
  <Card.Img   style={{width:'auto' ,height:'200px',objectFit:'cover',borderRadius:'15px'}}  src={im1} />
  <button className="btn btn-outline-dark btn-lg btnstyelss">উপসর্গ</button>

              </div>
  <Card.Body>
    <Card.Title>করোনাভাইরাসের উপসর্গ দিন দিন...
</Card.Title>
    <Card.Text>
    আপনি যদি সন্দেহ করেন যে আপনার কোভিড-১৯ আছে, এবং আপনার লক্ষণগুলি কোভিড-১৯...
    </Card.Text>
  </Card.Body>
  <div className="d-flex align-items-center justify-content-between">
      <p>কোভিড-১৯</p>
      <p>  
          <WatchLaterOutlined></WatchLaterOutlined>
           ৮ মিনিট পড়া </p>
  </div>
</Card>
          </div>
         
        </Slider>
       </div>
       <button className="text-white btnstyelsss my-5">সব দেখুন</button>

      </div>
    );
  }
}







// import React from 'react';
// import { Card } from 'react-bootstrap';
// import './Blog.css'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

// const Blog = () => {
//     return (
//         <div className='my-5'>
//             {/* <h1 className='blogs'>  আমাদের ব্লগ </h1>


//             <div>
//                 <Card style={{ width: '18rem' }}>
//                     <div>
                       
//                     </div>
//                     <Card.Img   style={{width:'auto' ,height:'200px',objectFit:'cover',borderRadius:'15px'}}  src={im1} className='pictu' />
//                     <Card.Body>
//                         <Card.Title>Card Title</Card.Title>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//             </div> */}
            
//         </div>
//     );
// };

// export default Blog;