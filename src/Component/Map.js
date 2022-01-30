import React from 'react';
import { Card, Table } from 'react-bootstrap';
import image from '../image/map.jpg'
import './Map.css'
const Map = () => {
    return (
        <div className='container'>
            <div className="my-5">
            <h4 className='fontcolorcase text-start'>
                ভিড আক্রান্ত অঞ্চলগুলি
            </h4>
            </div>
            <div className="row">
                <div className="col-md-6 ">
                    <Card 
                    
                    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
                    className='shadow-lg p-3 mb-5 bg-body rounded' style={{ width: '90%' }}>
                        <Card.Img className='imgres' variant="top" src={image} />

                    </Card>
                </div>
                <div className="col-md-6 ">
                    <Card
                 data-aos="zoom-in-up"
                 data-aos-duration="3000"
                    className=' tableheight shadow-lg p-3 mb-5 bg-body rounded' style={{ width: '100%' }}>
                        <Table className='tableheight w-100 h-100' striped bordered hover>
                            <thead className='tablecolor'>
                                <tr className=''>

                                    <th clas>বিভাগ
                                        তথ্য</th>
                                    <th>কেস এখন
                                        পর্যন্ত</th>
                                    <th>দৈনিক মৃত্যু
                                        (১৮ জানুয়ারি)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>ঢাকা	</td>
                                    <td>৭২৪৪৫৬	</td>
                                    <td>৭</td>
                                </tr>
                                <tr>

                                    <td>চট্টগ্রাম</td>
                                    <td>২৪০১৫৮</td>
                                    <td>2</td>
                                </tr>

                                <tr>

                                    <td>সিলেট</td>
                                    <td>৫৩০২১</td>
                                    <td>0</td>
                                </tr>
                                <tr>

                                    <td>খুলনা</td>
                                    <td>৯৮৬৬৩</td>
                                    <td>0</td>
                                </tr>
                                <tr>

                                    <td>রাজশাহী</td>
                                    <td>৯৭৫৯৭</td>
                                    <td>0</td>
                                </tr>

                                <tr>

                                    <td>বরিশাল</td>
                                    <td>৩৮১৫৬</td>
                                    <td>১</td>
                                </tr>

                                <tr>

                                    <td>রংপুর</td>
                                    <td>৫২১৯৫</td>
                                    <td>0</td>
                                </tr>







                            </tbody>
                        </Table>

                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Map;