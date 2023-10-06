import React from 'react'
import Img from "../assests/1.avif";
import SliderContainer from './SliderContainer';

const PersonalScent = () => {
    const data = [
        {
            heading:'Facial Appointments',
            para1:'Composure for the skin and senses',
            para2:'For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.',
            button:'See all Fragrance'
        },
        {
            img:Img,
            para1:'Ouranon Eau de Parfum',
            para2:'Woody, spicy, resinous'
        },


        {
            img:Img,
            para1:'Gloam Eau de Parfum',
            para2:'Floral, spicy, green '
        },


        {
            img:Img,
            para1:'Eidesis Eau de Parfum ',
            para2:'Woody, spicy, ambery'
        },
        {
            img:Img,
            para1:'Erémia Eau de Parfum',
            para2:'A green, floral, citrus fragrance'
        },

        {
            img:Img,
            para1:'Miraceti Eau de Parfum',
            para2:'Resinous, woody, spicy fragrance'
        },

        {
            img:Img,
            para1:'Karst Eau de Parfum',
            para2:'Fresh, herbaceous, marine fragrance'
        },
    ]
  return (
    <>
      <SliderContainer data={data}/>
    </>
  )
}

export default PersonalScent
