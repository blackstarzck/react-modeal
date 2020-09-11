import React from 'react';
import MainBanner from '../components/MainBanner';
import Cumulative from '../components/Cumulative';
import Brands from '../components/Brands';
import Price from '../components/Price';
import SubBanner from '../components/SubBanner';
import HotIssue from '../components/HotIssue';
import Release from '../components/Release';
import Release2 from '../components/Release2';
import BannerCont from '../components/BannerCont';
import BannerCont2 from '../components/BannerCont2';
import SlideSection from '../components/SlideSection';
import ContType1 from '../components/ContType1';
import ContType2 from '../components/ContType2';
import Footer from '../components/Footer'

function Home() {
    return (
        <div className="home">
            <MainBanner/>
            <Cumulative/>
            <Brands/>
            <Price/>
            <SubBanner/>
            <HotIssue/>
            <Release/>
            <BannerCont/>
            <Release2/>
            <SlideSection/>
            <BannerCont2/>
            <ContType1/>
            <ContType2/>
            <Footer/>
        </div>
    )
}

export default Home;