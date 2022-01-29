import React from 'react';
import BigTable from './BigTable';
import Blog from './Blog';
import Case from './Case';
import Clean from './Clean';
import Entry from './Entry';
import Footer from './Footer';
import Header from './Header';
import Map from './Map';
import Navigation from './Navigation';
import News from './News';
import Pagination from './Pagination';
import Pravabito from './Pravabito';
import Qusition from './Qusition';
import Reason from './Reason';
//https://covidsurokkha.com/en/
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <Case></Case>
            <Map></Map>
            <News></News>
            <Entry></Entry>
            <BigTable></BigTable>
            <Pagination></Pagination>
            <Pravabito></Pravabito>
            <Reason></Reason>
            <Clean></Clean>
            <Qusition></Qusition>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;