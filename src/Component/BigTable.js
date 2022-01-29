import React from 'react';
import { Table } from 'react-bootstrap';
import './Bigtable.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const BigTable = () => {
    AOS.init();

    return (
        <div
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        className='container my-5'>
            <Table className=' shadow p-3 mb-5 bg-body rounded' striped bordered hover>
                <thead className=' tablebig '>
                    <tr>
                        <th></th>

                        <td colSpan={2}>শয্যার প্রাপ্যতা</td>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr>
                    <tr>
                        <th className='fs-5 p-2 fw-normal'>হাসপাতালের নাম</th>
                        <th className='fs-5 p-2 fw-normal'>সাধারণ</th>
                        <th className='fs-5 p-2 fw-normal'>আইসিইউ</th>
                        <th className='fs-5 p-2 fw-normal'>   অবস্থান    </th>
                        <th className='fs-5 p-2 fw-normal'>   পুরো ঠিকানা    </th>
                        <th className='fs-5 p-2 fw-normal'>   সর্বশেষ সংষ্করণ    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> ২৫০ বেডেড টিবি হাসপাতাল শ্যামলী <br />
                            ০২৫৫০৫৯০৮৫</td>

                        <td>12</td>
                        <td>4</td>
                        <td> শ্যামলী  </td>
                        <td>  	বাড়ি # ১৭, রোড # ৮, ধানমন্ডি <br /> আর/এ। ঢাকা -১২০৫ </td>
                        <td>  ২০২১-০৭-১১ <br /> ১০:৪০ এএম </td>


                    </tr>
                    <tr>
                        <td> আদ-দ্বীন মেডিকেল কলেজ হাসপাতাল মগবাজার, ঢাকা <br />
                            ০১৭১৩৪৮৮৪১২ </td>
                        <td>19</td>
                        <td>190</td>
                        <td>  উত্তর বাড্ডা </td>
                        <td> 	প্লট নং: উমো, ব্লক নং: রসসোই, <br /> সাতমসজিদ রোড, <br /> মোহাম্মদপুর, ঢাকা -১২০৭  </td>
                        <td> ২০২১-০৭-১১ <br /> ১০:৪০ এএম  </td>
                    </tr>
                    <tr>
                        <td> আল হারামাইন হাসপাতাল প্রাইভেট লিমিটেড, সিলেট <br />
                            +৮৮০৮২১৭২৯৯৮১</td>
                        <td>7</td>
                        <td>0</td>
                        <td> মোহাম্মদপুর  </td>
                        <td> এন২০৬, সিলেট, সিলেট বিভাগ, <br /> সিলেট ৩১০০  </td>
                        <td> ২০২২-০১-১৯ <br /> ০৭:৪৫ পিএম  </td>
                    </tr>
                    <tr>
                        <td>আল-মানার হাসপাতাল লিমিটেড <br />
                            ০১৫৫০০২০৮৮৫ </td>
                        <td>0</td>
                        <td>6</td>
                        <td> সিলেট  </td>
                        <td> ২৫০ শয্যা বিশিষ্ট টিবি <br /> হাসপাতাল, শ্যামলী, ঢাকা <br /> -১২০৭  </td>
                        <td>  ২০২১-০৭-১১ <br /> ১০:৪০ এএম </td>
                    </tr>
                    <tr>
                        <td>আনোয়ার খান আধুনিক মেডিকেল কলেজ হাসপাতাল <br />
                            +৮৮০২-৫৮৬১৬০৭৪ </td>
                        <td>2</td>
                        <td>0</td>
                        <td> মগবাজার  </td>
                        <td> খেলার মাঠ, ১১১/১/এ ডিস্টিলারি রোড,<br /> গেন্ডারিয়া, ধুপখোলার <br /> পাশে, ঢাকা - ১২০৪  </td>
                        <td>  ২০২২-০১-১৯ <br /> ০৭:৪৫ পিএম </td>
                    </tr>
                    <tr>
                        <td> ২৫০ বেডেড টিবি হাসপাতাল শ্যামলী <br />
                            ০২৫৫০৫৯০৮৫</td>

                        <td>12</td>
                        <td>4</td>
                        <td> শ্যামলী  </td>
                        <td>  	বাড়ি # ১৭, রোড # ৮, ধানমন্ডি <br /> আর/এ। ঢাকা -১২০৫ </td>
                        <td>  ২০২১-০৭-১১ <br /> ১০:৪০ এএম </td>


                    </tr>


                    <tr>
                        <td>আনোয়ার খান আধুনিক মেডিকেল কলেজ হাসপাতাল <br />
                            +৮৮০২-৫৮৬১৬০৭৪ </td>
                        <td>2</td>
                        <td>0</td>
                        <td> মগবাজার  </td>
                        <td> খেলার মাঠ, ১১১/১/এ ডিস্টিলারি রোড,<br /> গেন্ডারিয়া, ধুপখোলার <br /> পাশে, ঢাকা - ১২০৪  </td>
                        <td>  ২০২২-০১-১৯ <br /> ০৭:৪৫ পিএম </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default BigTable;

