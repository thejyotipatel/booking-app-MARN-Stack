import orange from '../assets/orange.jpg'

const SearchHotels = () => {
  return (
    <div className='search-hotels container'>
      <div className='search-sidebar'>
        <div className='search-sidebar-wrapper'>
          <h2>Search</h2>
          <p>Destination</p>
          <input type='text' />
          <p>Check-in date</p>
          <button className='btn date-btn'>date to date</button>
          <p>Options</p>
          <ul role='list'>
            <li>
              <span>
                Min price <small>(per night)</small>
              </span>
              <input type='text' />
            </li>
            <li>
              <span>
                Max price <small>(per night)</small>
              </span>
              <input type='text' />
            </li>
            <li>
              <span>Adult</span>
              <input type='text' />
            </li>
            <li>
              <span>Children</span>
              <input type='text' />
            </li>
            <li>
              <span>Room</span>
              <input type='text' />
            </li>
          </ul>
          <button className='btn  '>Search</button>
        </div>
      </div>
      <div className='search-result'>
        <div className='search-contant'>
          <div className='search-result-wrapper'>
            <img src={orange} alt='orange.jpg' />
            <div className='desc'>
              <div className='titles'>
                <h2>Tower Street Apartment</h2>
                <span>500m from center</span>
                <h4>Free airport taxi</h4>
                <p>Studio Apartment with Air conditioning</p>
                <span>Lorem ipsum dolor sit amet adipisicing elit</span>
                <p className='green'>Free cancelation</p>
                <p className='green green-2'>
                  You can cancle later, so lock on this great price!
                </p>
              </div>
              <div className='price-desc'>
                <div className='rating'>
                  <span>Excellent</span>
                  <button className='btn'>5.8</button>
                </div>
                <div className='price'>
                  <h2>$345</h2>
                  <span>include taxes and fees</span>
                  <button className='btn'>See avallability</button>
                </div>
              </div>
            </div>
          </div>
          <div className='search-result-wrapper'>
            <img src={orange} alt='orange.jpg' />
            <div className='desc'>
              <div className='titles'>
                <h2>Tower Street Apartment</h2>
                <span>500m from center</span>
                <h4>Free airport taxi</h4>
                <p>Studio Apartment with Air conditioning</p>
                <span>Lorem ipsum dolor sit amet adipisicing elit</span>
                <p className='green'>Free cancelation</p>
                <p className='green green-2'>
                  You can cancle later, so lock on this great price!
                </p>
              </div>
              <div className='price-desc'>
                <div className='rating'>
                  <span>Excellent</span>
                  <button className='btn'>5.8</button>
                </div>
                <div className='price'>
                  <h2>$345</h2>
                  <span>include taxes and fees</span>
                  <button className='btn'>See avallability</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchHotels
