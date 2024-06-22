import React, { useEffect } from "react";
import Header from './Header/Header';
import Services from "./Services/Services"
// import Testimonials from "../src/components/Testimonials/Testimonials"
import BestSeller from "./BestSellerSection/BestSellerSection"
import DownloadMobileApp from './DownloadMobileAppSection/DownloadMobileAppSection';
import RestaurantAnalysisInfo from "./RestaurantAnalysisInfoSection/RestaurantAnalysisInfoSection"
import SubscribeNewsletter from "./SubscribeNewsletterSection/SubscribeNewsletterSection"
import Footer from "./Footer/Footer"
import { useState } from "react";

type HomePageProps ={
  showUserSignedUp:Boolean
}

function HomePage({showUserSignedUp}:HomePageProps){


  const [showAccountCreatedStatus,setShowAccountCreatedStarted] = useState(true)
  
  useEffect(()=>{
    setShowAccountCreatedStarted(false)
  }, [])
  
  return(
        <div>
            
      <Header/>
      
      {
      showUserSignedUp && <p className=""> {showAccountCreatedStatus}</p>
      }

      <Services/> 
      {/* <Testimonials/> */}
       <BestSeller/>
      <DownloadMobileApp/>
      <RestaurantAnalysisInfo/>
      <SubscribeNewsletter/>
      <Footer/>
        </div>
    )
}

export default HomePage