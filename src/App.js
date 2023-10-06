import React from "react";
import { useSelector } from "react-redux";
import Offer1 from "./components/Offer1";
import Offer2 from "./components/Offer2";
import Navbar from "./components/Navbar";
import TheAthenaeum from "./components/TheAthenaeum";
import Footer from "./components/Footer";
import Pairings from "./components/Pairings";
import SliderContainer from "./components/SliderContainer";
import Message from "./components/Message";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import SearchBox from "./components/SearchBox";
import PersonalScent from "./components/PersonalScent";
import Fortification from "./components/Fortification";
import Efficacious from "./components/Efficacious";
import StoreLocator from "./components/StoreLocator";

function App() {
  const { isSearch} = useSelector((state) => state.items)
 

  return (
    <>
     {
        isSearch ?   (
          <div className="w-[100vw] h-[100vh] overflow-hidden">
            <SearchBox/>
          </div>
        ) :
        <div className='bg-[#FFFEF2]'>
     
        <Offer1/>
        <Offer2/>
        <Navbar/>
       
        <Header/>
        <TheAthenaeum/>
        <PersonalScent/>
        <Efficacious/>
        <Fortification/>
        <StoreLocator/>
        <Pairings/>
       
        <Message/>
        <Footer/>
        <ChatBox/>
         </div>

      }
   
    </>
  );
}

export default App;
