import { useEffect } from 'react'

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Searchbar } from '../../components/Searchbar'

import BannerSection from './components/BannerSection'
import TypesSection from './components/TypesSection'
import OffersSection from './components/OffersSection'
import BrandsSection from './components/BrandsSection'
import DetailsSection from './components/DetailsSection'
import AccessoriesSection from './components/AccessoriesSection'
import AppSection from './components/AppSection'
import LatestNewsSection from './components/LatestNewsSection'
import LatestSection from './components/LatestSection'

import { StyledMain } from './style'

export const Home = () => {
  useEffect(() => {
    document.getElementById('app').classList.add('bg-image')

    return () => document.getElementById('app').classList.remove('bg-image')
  })

  return (
    <>
      <Navbar />

      <StyledMain className="main center-page-content">
        <BannerSection />
        <section className="search">
          <Searchbar />
        </section>

        <TypesSection />
        <OffersSection />
        <BrandsSection />
        <DetailsSection />
        <LatestSection />
        <AccessoriesSection />
        <AppSection />
        <LatestNewsSection />
      </StyledMain>
      <Footer />
    </>
  )
}
