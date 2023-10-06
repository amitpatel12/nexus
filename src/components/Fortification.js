import React from 'react'
import Img1 from '../assests/slider1.webp'
import Img2 from '../assests/slider2.webp'
import Img3 from '../assests/slider3.webp'
import Img4 from '../assests/slider3.webp'
import Img5 from '../assests/slider5.avif'
import Img6 from '../assests/slider6.webp'
import SliderContainer from './SliderContainer'

const Fortification = () => {
    const data = [
        {
            heading:'Parsley Seed Skin Care',
            para1:'Fortification of the highest order',
            para2:'Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.',
            button:'Explore the range'
        },
        {
            img:Img1,
            para1:'Parsley Seed Anti-Oxidant Skin Care Kit',
            para2:'A trio of Parsley Seed staples'
        },


        {
            img:Img2,
            para1:'Gloam Eau de Parfum',
            para2:'Floral, spicy, green '
        },


        {
            img:Img3,
            para1:'Eidesis Eau de Parfum ',
            para2:'Woody, spicy, ambery'
        },
        {
            img:Img4,
            para1:'Erémia Eau de Parfum',
            para2:'A green, floral, citrus fragrance'
        },

        {
            img:Img5,
            para1:'Miraceti Eau de Parfum',
            para2:'Resinous, woody, spicy fragrance'
        },

        {
            img:Img6,
            para1:'Karst Eau de Parfum',
            para2:'Fresh, herbaceous, marine fragrance'
        },
    ]
  return (
    <>
      <SliderContainer data={data} />
    </>
  )
}

export default Fortification

