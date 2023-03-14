import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaCross,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import orange1 from '../assets/image-gallery-cone.jpg'
import orange2 from '../assets/image-gallery-milkbottles.jpg'
import orange3 from '../assets/image-gallery-orange.jpg'
import orange4 from '../assets/image-gallery-sugar-cubes.jpg'
import orange5 from '../assets/image-stand-out.jpg'
import oranges from '../assets/orange.jpg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openSlider } from '../feature/sliderSlice'

const Hotel = () => {
  const photos = [
    {
      src: oranges,
    },
    {
      src: orange1,
    },
    {
      src: orange2,
    },
    {
      src: orange3,
    },
    {
      src: orange4,
    },
    {
      src: orange5,
    },
  ]
  const dispatch = useDispatch()
  const { showSlider } = useSelector((state) => state.slider)
  // const [sliderNumber, setSliderNumber] = useState(0)
  // const [showSlider, setShowSlider] = useState(false)
  // const handleSlider = (i) => {
  //   console.log(i, sliderNumber)
  //   // setShowSlider(true)
  //   setSliderNumber(i)
  // }
  return (
    <div className='hotel container'>
      {showSlider && (
        <div className='hotel-slider'>
          <div className='slider-wrapper'>
            <button className='btn  '>
              <FaArrowAltCircleLeft />
            </button>
            <div className='slider-img'>
              {/* <img src={photos[sliderNumber].src} alt='orange' /> */}
            </div>
            <button className='btn close-btn'>
              <AiFillCloseCircle />
            </button>

            <button className='btn'>
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      )}
      <div className='hotel-wrapper'>
        <div className='title'>
          <h3>Tower Street Apartment</h3>
          <button className='btn'>Reserve or Book Now!</button>
        </div>
        <span>
          <FaMapMarkerAlt /> Lorem ipsum dolor sit amet consectetur, adipisicing
          elit.
        </span>
        <p> Excenlent location - 500m from center</p>
        <p className='green'>
          Studio Apartment with Air conditioning and get free airport taxi
        </p>
        <div className='hotel-imgs'>
          {photos.map((item, i) => {
            return (
              <div key={i} className='imgs'>
                <img
                  src={item.src}
                  alt={item.src}
                  // onClick={() => handleSlider(i)}
                />
              </div>
            )
          })}
        </div>
        <div className='desc'>
          <div className='desc-text'>
            <h3>Stay in the heart of Karkow</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              voluptatibus odio molestiae exercitationem fuga pariatur odit
              cupiditate sint aut quod, praesentium cumque harum provident ab
              perspiciatis obcaecati maxime esse sapiente. Quia, ex excepturi
              aspernatur maxime cumque libero possimus rerum. Magnam atque
              maxime debitis obcaecati repudiandae repellendus porro quibusdam
              quas commodi.
            </p>
          </div>
          <div className='desc-price'>
            <h5>Perfect for a 9-night stay!</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              ab veniam ipsum sapiente! Ipsum, harum.
            </p>
            <h3>
              $345 <big>(9 night)</big>
            </h3>
            <button className='btn'>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel
