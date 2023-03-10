import { Outlet, NavLink } from 'react-router-dom'
import {
  FaAirFreshener,
  FaBed,
  FaCalendarDay,
  FaCar,
  FaPeopleArrows,
  FaPersonBooth,
  FaPlane,
  FaTaxi,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { openOptions, optionHandler } from '../feature/headerSlice'

export default function Header() {
  const dispatch = useDispatch()
  const {
    searchQuery,
    date,
    adult,
    children,
    room,
    openRoomOptions,
    showSearchContant,
  } = useSelector((state) => state.header)

  return (
    <header className='header container'>
      <div className='header-contant'>
        <div className='header-list'>
          <div className='header-list-item active'>
            <FaBed />
            <span>stays</span>
          </div>
          <div className='header-list-item'>
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className='header-list-item'>
            <FaCar />
            <span>Car rentals</span>
          </div>
          <div className='header-list-item'>
            <FaBed />
            <span>Attractions</span>
          </div>
          <div className='header-list-item'>
            <FaTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        {showSearchContant && (
          <>
            <h2 className='header-title'>
              A lifetime of discounts? It's Genius.
            </h2>
            <p className='header-desc'>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Booking.red account
            </p>
            <div className='header-btn'>
              <button className='btn'>Sign In/ Register</button>
            </div>
            <div className='header-search-contant'>
              <div className='header-search-contant-item'>
                <FaBed />
                <input type='text' placeholder='where are you going?' />
              </div>
              <div className='header-search-contant-item'>
                <FaCalendarDay />
                <span>date to date</span>
              </div>
              <div className='header-search-contant-item'>
                <button className='btn' onClick={() => dispatch(openOptions())}>
                  <FaPeopleArrows />
                  <span>
                    {adult} adults {children} children {room} room
                  </span>
                </button>
                {/* room options */}
                {openRoomOptions && (
                  <div className='room-options'>
                    <div className='room-options-item'>
                      <span>adult</span>
                      <div className='option-btn'>
                        <button
                          className='btn'
                          onClick={() =>
                            dispatch(
                              optionHandler({ option: 'adult', type: 'inc' })
                            )
                          }
                        >
                          +
                        </button>
                        <span>1</span>
                        <button
                          className='btn'
                          onClick={() =>
                            dispatch(
                              optionHandler({ option: 'adult', type: 'dec' })
                            )
                          }
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className='room-options-item'>
                      <span>children</span>
                      <div className='option-btn'>
                        <button className='btn'>+</button>
                        <span>0</span>
                        <button className='btn'>-</button>
                      </div>
                    </div>
                    <div className='room-options-item'>
                      <span>room</span>
                      <div className='option-btn'>
                        <button className='btn'>+</button>
                        <span>1</span>
                        <button className='btn'>-</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='header-search-contant-item'>
                <button className='btn'>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
