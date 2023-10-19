import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import React from 'react'



const Beauty = () => {

  return (
    <div>

      <div >
        <h1 className=' text-center display-3 my-4 mytext'>Beauty</h1>
       
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper "
        >

          <SwiperSlide
            className="cards " style={{ backgroundImage: "URL('https://le-cdn.website-editor.net/md/and1/dms3rep/multi/opt/115384-1920w.jpeg')" }}>
            <div className="h1">

              <h1 className=' hunk text-center display-3 text-black'>
                How to do Dip Nails at Home
              </h1>
            </div>
           

          </SwiperSlide>
          <SwiperSlide className="cards" style={{ backgroundImage: "URL('http://bpc.h-cdn.co/assets/16/07/1455922012-no-makeup-look.jpg')" }}>
            <div className="h1">

              <h1 className=' hunk text-center display-5  text-black'>
                The 28 ‘No-Makeup Makeup’ Products Our Editors Buy Over and Over
              </h1>
            </div>
           

          </SwiperSlide>
          <SwiperSlide className="cards" style={{ backgroundImage: "URL('http://getwallpapers.com/wallpaper/full/f/c/1/913871-lipstick-desktop-wallpaper-2560x1440-macbook.jpg')" }}>
            <div className="h1">

              <h1 className=' hunk text-center display-5  text-black'>
                The Best Lip Combos Ever, According to Our Editors
              </h1>
            </div>
           

          </SwiperSlide>

        </Swiper>
        

        <h1 className='text-center display-3 my-4 mytext'>latest posts</h1>
       <div className='row'>
        <div className='col-md-4 happy2'>
        <div className="cardcover4 mt-4" style={{ backgroundImage: "URL('https://i.pinimg.com/originals/62/a8/54/62a85432d353a5ded65933aff441d606.png')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>Here's Exactly How To Do Dip Nails At Home</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>nail ideas</h3>
              <h3 className='text-center sec2'>september 29,2023</h3>
        </div>
        <div className='col-md-4 happy'>
        <div className="cardcover4 mt-5" style={{ backgroundImage: "URL('https://media.emstore.com/app/uploads/2020/06/26095331/ImprovingTexture-scaled.jpeg')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>These Two Products Improved My Skin’s Texture Overnight</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>skin</h3>
              <h3 className='text-center sec2'>august 10,2023</h3>
        </div>
        <div className='col-md-4 happy2'>
        <div className="cardcover4 mt-4" style={{ backgroundImage: "URL('https://www.hairstyleslife.com/wp-content/uploads/2017/12/Asymmetrical-Short-Curly-Hair-Styles-2018-Short-Bob-Hair-Cut-Ideas-2018-2019-Curly-Hairstyles-10.jpg')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>This Completely Free Hack Totally Transformed My Curly Hair</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>hair</h3>
              <h3 className='text-center sec2'>september 3,2023</h3>
        </div>
        <div className='col-md-4 happy1 happy2'>
        <div className="cardcover4 mt-4" style={{ backgroundImage: "URL('https://fashionallure.com/wp-content/uploads/beauty-model-in-colorful-makeup-838875-e1588951586712.jpg')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>This Makeup Trend is the Key to Bringing Fall Into Your Beauty Routine</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>makeup</h3>
              <h3 className='text-center sec2'>march 9,2023</h3>
        </div>
        <div className='col-md-4 happy'>
        <div className="cardcover4 mt-5" style={{ backgroundImage: "URL('https://i.ytimg.com/vi/gS0BIcKt-0A/maxresdefault.jpg')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>These Hacks Are Key to Achieving the 'No Makeup' Makeup Look</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>makeup</h3>
              <h3 className='text-center sec2'>june 24,2023</h3>
        </div>
        <div className='col-md-4 happy1 happy2'>
        <div className="cardcover4 mt-4" style={{ backgroundImage: "URL('https://viebeautymag.com/wp-content/uploads/2017/04/pale-pink-nail-polish.jpg')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>The Verdict’s In: These Are the Best Nail Colors of Fall 2023</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>nail ideas</h3>
              <h3 className='text-center sec2'>february 2o,2023</h3>
        </div>

       </div>
       


      </div>
    </div>
          
  )
}

export default Beauty

