import orange from '../assets/orange.jpg'

import { useDispatch, useSelector } from 'react-redux'
import {
  openOptions,
  openDateOption,
  optionHandler,
} from '../feature/headerSlice'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
const SearchHotels = () => {
  const dispatch = useDispatch()
  const {
    destination,
    date,
    adult,
    children,
    room,
    maxPrice,
    minPrice,
    openRoomOptions,
    showSearchContant,
    openDateOptions,
    inputHandler,
    searchHandler,
  } = useSelector((state) => state.header)
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  return (
    <div className='search-hotels container'>
      <div className='search-sidebar'>
        <div className='search-sidebar-wrapper'>
          <h2>Search</h2>
          <p>Destination</p>
          <input
            type='text'
            name='destination'
            defaultValue={destination}
            onChange={(e) =>
              dispatch(
                inputHandler({ name: 'destination', value: e.target.value })
              )
            }
          />
          <p>Check-in date</p>
          <button
            className='btn date-btn'
            onClick={() => dispatch(openDateOption())}
          >
            {dates.startDate} to {dates.endDate}
          </button>
          {openDateOptions && (
            <DateRange
              className='date-selection'
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
            />
          )}
          <p>Options</p>
          <ul role='list'>
            <li>
              <span>
                MinPrice price <small>(per night)</small>
              </span>
              <input
                type='text'
                name='minPrice'
                defaultValue={minPrice}
                onChange={(e) =>
                  dispatch(
                    inputHandler({ name: 'minPrice', value: e.target.value })
                  )
                }
              />
            </li>
            <li>
              <span>
                MaxPrice price <small>(per night)</small>
              </span>
              <input
                type='text'
                name='maxPrice'
                defaultValue={maxPrice}
                onChange={(e) =>
                  dispatch(
                    inputHandler({ name: 'maxPrice', value: e.target.value })
                  )
                }
              />
            </li>
            <li>
              <span>Adult</span>
              <input
                type='number'
                name='adult'
                min={1}
                defaultValue={adult}
                onChange={(e) =>
                  dispatch(
                    inputHandler({ name: 'adult', value: e.target.value })
                  )
                }
              />
            </li>
            <li>
              <span>Children</span>
              <input
                type='number'
                name='children'
                min={0}
                defaultValue={children}
                onChange={(e) =>
                  dispatch(
                    inputHandler({ name: 'children', value: e.target.value })
                  )
                }
              />
            </li>
            <li>
              <span>Room</span>
              <input
                type='number'
                name='room'
                min={1}
                defaultValue={room}
                onChange={(e) =>
                  dispatch(
                    inputHandler({ name: 'room', value: e.target.value })
                  )
                }
              />
            </li>
          </ul>
          <button className='btn' onClick={() => dispatch(searchHandler())}>
            Search
          </button>
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
