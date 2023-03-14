import orange from '../assets/orange.jpg'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featured-item'>
        <img src={orange} alt='orange.jpg' />
        <div className='featured-item-titles'>
          <h3>Maya</h3>
          <h6>356 properties</h6>
        </div>
      </div>
      <div className='featured-item'>
        <img src={orange} alt='orange.jpg' />
        <div className='featured-item-titles'>
          <h3>Jen</h3>
          <h6>96 properties</h6>
        </div>
      </div>
      <div className='featured-item'>
        <img src={orange} alt='orange.jpg' />
        <div className='featured-item-titles'>
          <h3>Moh</h3>
          <h6>465 properties</h6>
        </div>
      </div>
    </div>
  )
}

export default Featured
