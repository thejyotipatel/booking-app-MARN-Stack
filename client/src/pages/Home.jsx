import Featured from '../layouts/Featured'
import FeaturedProperties from '../layouts/FeaturedProperties'
import PropertiestType from '../layouts/PropertiestType'
import React from 'react'
import Mail from '../layouts/Mail'
import Header from '../layouts/Header'

const Home = () => {
  return (
    <>
      <div className='main-header'>
        <Header />
      </div>
      <section className='home container'>
        <Featured />
        <h1 className='home-heading'>Browse by properties type</h1>
        <PropertiestType />
        <h1 className='home-heading'>Home guests love</h1>
        <FeaturedProperties />
      </section>
      <div className='main-header'>
        <Mail />
      </div>
    </>
  )
}

export default Home
