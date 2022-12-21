import React from 'react'
import '../styles/Home.css';

export const Home = () => {
  return (
    <>
      <div className='container text-center text-white'>
        <h1 className='m-5'>HELLO GUYS WELCOME</h1>
      </div>
      <div className='row justify-content-center box-banner-home m-0 text-center'>
        <h2 className='h2-banner'>THE ADULT SWIM APP</h2>
        <h2 className='h2-banner-sub'>WATCH FREE FULL SEASONS OF YOUR FAVORITE SHOWS!
        <br/>NOW AVAILABLE ON:</h2>
        <div className='col-1 box-icons '>
          <img width={90} src='https://media.cdn.adultswim.com/uploads/20210212/212121411578-roku.png' alt='logotipo'/>
        </div>
        <div className='col-1 box-icons'>
          <img width={90} src='https://media.cdn.adultswim.com/uploads/20210212/212121431266-fire-tv.png' alt='logotipo'/>
        </div>
        <div className='col-1 box-icons'>
          <img width={90} src='https://media.cdn.adultswim.com/uploads/20210212/212121411573-appletv.png' alt='logotipo'/>
        </div>
        <div className='col-1 box-icons'>
          <img width={90}  src='https://media.cdn.adultswim.com/uploads/20210212/212121411579-ios.png' alt='logotipo'/>
        </div>
        <div className='col-1 box-icons'>
          <img width={90}  src='https://media.cdn.adultswim.com/uploads/20210212/212121411576-android.png' alt='logotipo'/>
        </div>
      </div>
      <div className='row box-banner-home-image'>

      </div>
    </>
  )
}
