import React from 'react';
import './Header.css'
import { EmailOutlined, Facebook } from '@material-ui/icons';
const Header = () => {
    return (
        <div className=' header'>
            <div className="container">
                <div className="d-flex align-items-center ">
                    <div className="d-flex align-items-center justyfy-content-center">
                        <EmailOutlined className='text-white me-2' />
                        <h5 className=' text-white mt-1'> ইমেল: support@gmail.com</h5>
                    </div>
                    <div className="d-flex align-items-center ">
                        <div className="d-flex align-items-center justyfy-content-center">
                            <h5 className=' text-white ms-5 ms-5'>
                                <Facebook className='text-white me-2' />

                                ফেসবুক</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;