import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='run'>
        <h1 className=' text-center display-3 my-4 mytext'>Popular Posts</h1>
        <div className='container d-flex'>
          <div className='row'>
            <div className='col-md-4'>
              <div className="cardcover3 mt-4" style={{ backgroundImage: "URL('http://4.bp.blogspot.com/-l-PKXD-vSgI/UzgrQM1_rzI/AAAAAAAA-d4/s-PkfKUAmos/s1600/Weekly+Favourites+%252329.jpg')" }}>
              </div>
              <h2 className=' num text-center'>Weekly Favourites #37</h2>
              <div className='run mt-4'>I think after next week I will retire the Weekly Favourites feature (I can't end on a uneven number - it would forever haunt me), truthfully I think it has had its day and I have plans for new and more exciting features. Until then let me share what I have been enjoying lately...
              </div>

            </div>
            <div className='col-md-4'>
              <div className="cardcover3 mt-4" style={{ backgroundImage: "URL('https://i.dailymail.co.uk/i/pix/2016/06/16/15/3559475A00000578-0-image-a-76_1466087473250.jpg')" }}>

              </div>
              <h2 className='num text-center'>Frozen Banana Lollies</h2>
              <div className='run mt-4'>Are you looking for a healthy ice cream alternative this season? Put down the shop bought treats and stock up your freezer with these homemade frozen banana lollies. They also make the perfect hangover cure!</div>

            </div>

            <div className='col-md-4'>
              <div className="cardcover3 mt-4" style={{ backgroundImage: "URL('https://i.etsystatic.com/29354907/r/il/c0cd9f/3100895293/il_1588xN.3100895293_ahpn.jpg')" }}>

              </div>
              <h2 className='num text-center'>Trending Indo-Westerns</h2>
              <div className='run mt-4'>As we head toward october and summer shifts into autumn, workwear is always top of the agenda. But whether or not your week includes an office, you can’t go wrong with an indo-westerns. Here’s why…</div>

            </div>

          </div>

        </div>
       
        <div className='row '>
          <div className='col-md-4'>
            <div className="cardcover3 mt-4" style={{ backgroundImage: "URL('https://bragpacker.com/wp-content/uploads/2019/12/1.-1.jpg')" }}>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="cardcover3 mt-4" style={{ backgroundImage: "URL('http://cdn.decoist.com/wp-content/uploads/2015/10/Outdoor-dining-table-with-candle-centerpieces.jpg')" }}>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="cardcover3 mt-4" style={{ backgroundImage: "URL('http://mediacdn.grabone.co.nz/asset/RPIUEuaNPu/box=970x0')" }}>
            </div>
          </div>
        </div>
        


      </div>
      <h1 className='fw-normal text-center display-3 my-4 mytext'>The Latest</h1>
      <div className=' container  d-flex'>
        <div className='col-md-6 mx-3'>
          <div className="cardcover3 mt-4" style={{ backgroundImage: "URL('https://redeemdiscounts.com/wp-content/uploads/2023/01/Aqualogica-Best-Products-And-Review-1536x1024.jpg')" }}>
          </div>
          <h2 className='nim text-center'>Saturday,September 16,2023</h2>
          <h2 className='rim text-center mt-4'>BLOGSALE</h2>

        </div>
        <div className='col-md-6'>
          <div className="cardcover3 mt-4" style={{ backgroundImage: "URL('https://midlifecoveting.com/wp-content/uploads/2017/03/fullsizeoutput_27a6.jpeg')" }}>
          </div>
          <h2 className='nim text-center'>Friday,August 25,2023</h2>
          <h2 className='rim text-center mt-4'>Mother's day Gifting With Margaret Dabbs London</h2>
        </div>


      </div>
    </div>
  )
}

export default Home

