import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import React from 'react'



const Beauty = () => {

  return (
    <div>

      <div className='hink'>
        <h1 className=' text-center display-3 my-4 mytext'>living</h1>
       
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
            className="cards " style={{ backgroundImage: "URL('https://cdn.loveandlemons.com/wp-content/uploads/2018/09/breakfast-cookies.jpg')" }}>
            <div className="h1">

              <h1 className=' hunk text-center display-3 text-black'>
              15 Fall Breakfast Recipes to Meal Prep All Season Long
              </h1>
            </div>
            

          </SwiperSlide>
          <SwiperSlide className="cards1" style={{ backgroundImage: "URL('https://acme-re.com/wp-content/uploads/2018/09/a-flat-screen-tv-sitting-in-a-living-room-descrip.jpeg')" }}>
            <div className="h1">

              <h1 className=' hunk text-center display-5  text-black'>
              11 Cozy Movie Night Essentials You’ll Reach for Every Weekend
              </h1>
            </div>
            

          </SwiperSlide>
          <SwiperSlide className="cards1" style={{ backgroundImage: "URL('https://cdn.chefclub.tools/uploads/recipes/cover-hd/50b6d49e-fbe6-4e0e-80d7-2e5806bee434_RDXRMJP.jpg')" }}>
            <div className="h1">

              <h1 className=' hunk text-center display-5  text-black'>
              8 Hosting Hacks That Will Take Your Halloween Party to the Next Level
              </h1>
            </div>
           

          </SwiperSlide>

        </Swiper>
        <h1 className='text-center display-3 my-4 mytext'>latest posts</h1>
        <div className='row'>
        <div className='col-md-4 happy2'>
        <div className="cardcover4 mt-4" style={{ backgroundImage: "URL('https://cdn.loveandlemons.com/wp-content/uploads/2018/09/breakfast-cookies.jpg')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>15 Fall Breakfast Recipes to Meal Prep All Season Long</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>food and drinks</h3>
              <h3 className='text-center sec2'>october 9,2023</h3>
        </div>
        <div className='col-md-4 happy'>
        <div className="cardcover4 mt-5" style={{ backgroundImage: "URL('https://i.pinimg.com/736x/d4/a9/65/d4a9652a41126e1f8d3eaeef686d8ed3.jpg')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>5 Easy Ways to Declutter Your Home This Fall</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>clean & organising</h3>
              <h3 className='text-center sec2'>october 2,2023</h3>
        </div>
        <div className='col-md-4 happy2'>
        <div className="cardcover4 mt-4" style={{ backgroundImage: "URL('https://images.expertreviews.co.uk/wp-content/uploads/2023/10/amazon-prime-day-Lavazza-Jolie-deal-teaser.jpg')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>It’s Amazon Prime Day (Again): Here’s How to Shop the Best Deals</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>shopping</h3>
              <h3 className='text-center sec2'>october 13,2023</h3>
        </div>
        <div className='col-md-4 happy1 happy2'>
        <div className="cardcover4 mt-4" style={{ backgroundImage: "URL('https://cdn.chefclub.tools/uploads/recipes/cover-hd/50b6d49e-fbe6-4e0e-80d7-2e5806bee434_RDXRMJP.jpg')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>31 Halloween Recipes to Get You in the Spooky Spirit</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>food & living</h3>
              <h3 className='text-center sec2'>september 09,2023</h3>
        </div>
        <div className='col-md-4 happy'>
        <div className="cardcover4 mt-5" style={{ backgroundImage: "URL('https://i.pinimg.com/originals/4a/ed/54/4aed54a656b18b1e099d50fccd52d6c1.jpg')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>8 Simple Ways to Make Your Home Cozy for Fall Without Spending a Ton</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>decor & styling</h3>
              <h3 className='text-center sec2'>september 24,2023</h3>
        </div>
        <div className='col-md-4 happy1 happy2'>
        <div className="cardcover4 mt-4" style={{ backgroundImage: "URL('http://blog.hookerfurniture.com/wp-content/uploads/sites/32/2017/09/EssentialsElixirnightstand.jpg')" }}>
              </div>
              <h3 className='text-center  mt-3 nail'>The Best Home Essentials on Sale for Amazon's Prime Big Deal Days</h3>
              <div className='border'></div>
              <h3 className='text-center sec1'>shopping</h3>
              <h3 className='text-center sec2'>september 2o,2023</h3>
        </div>

       </div>


      </div>
    </div>
  )
}

export default Beauty

