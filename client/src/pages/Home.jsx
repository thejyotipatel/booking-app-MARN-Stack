import Featured from '../layouts/Featured'
import FeaturedProperties from '../layouts/FeaturedProperties'
import PropertiestType from '../layouts/PropertiestType'
import React from 'react'
import Mail from '../layouts/Mail'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <section className='home '>
      <Featured />
      <h1 className='home-heading'>Browse by properties type</h1>
      <PropertiestType />
      <h1 className='home-heading'>Home guests love</h1>
      <FeaturedProperties />
      <Mail />
      <Footer />
    </section>
  )
}

export default Home
