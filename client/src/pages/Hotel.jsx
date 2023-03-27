import { AiFillCloseCircle } from 'react-icons/ai'
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  handleSlider,
  handleSliderIndex,
  openSlider,
} from '../feature/sliderSlice'

const Hotel = () => {
  const dispatch = useDispatch()
  const { showSlider, photos, sliderIndex } = useSelector(
    (state) => state.slider
  )

  return (
    <div className='hotel container'>
      {showSlider && (
        <div className='hotel-slider'>
          <div className='slider-wrapper'>
            <button
              className='btn'
              onClick={() => dispatch(handleSliderIndex({ type: 'dec' }))}
            >
              <FaArrowAltCircleLeft />
            </button>
            <div className='slider-img'>
              <img src={photos[sliderIndex].src} alt='orange' />
            </div>
            <button
              className='btn close-btn'
              onClick={() => dispatch(openSlider())}
            >
              <AiFillCloseCircle />
            </button>

            <button
              className='btn'
              onClick={() => dispatch(handleSliderIndex({ type: 'inc' }))}
            >
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
          {photos.map((item, index) => {
            return (
              <div key={index} className='imgs'>
                <img
                  src={item.src}
                  alt={item.src}
                  onClick={() => dispatch(handleSlider({ index }))}
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
