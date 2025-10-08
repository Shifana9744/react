import React from 'react'
import Grocery from '../../assets/grocery.png'
import './hero.css'
import Button from '../Button/Button'
 
const Hero = () => {

  return (
    <section className='mt-5'>
      <div className="container pt-5 mt-5" style={{minHeight:'100vh'}}>
        <div className="row pt-3">
          <div className="col-sm-12 col-md-6 d-flex flex-column align-items-between justify-content-center gap-4 ">
            {/* <div className="row"> */}
              <div className="col-9">
                <span className='span-1 px-3 py-2 rounded-pill'>Export Best Quality...</span>
              </div>
            {/* </div> */}

              <h1>Tasty Organic<br/><span className='title-span'>Fruits</span> & <span className='title-span'>Veggies</span><br />In Your City</h1>

              <h5>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</h5>

              <button type='button' className=' text-white'>Shop Now</button>

              {/* button as component */}
              {/* <Button content= 'Shop Now'/> */}
          </div>

          <div className="col-md-6 col-sm-12">
            <img src={Grocery} alt="hero image" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero