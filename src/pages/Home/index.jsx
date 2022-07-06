import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Checkbox } from '../../components/Checkbox'
import { Searchbar } from '../../components/Searchbar'
import { ButtonCheckbox } from '../../components/ButtonCheckbox'
import { CardsCarousel, Card } from '../../components/CardsCarousel'
import { Latest } from '../Car/style'

import {
  typesSectionMockedData,
  offersSectionMockedData,
  accessoriesSectionMockedData,
  latestNewsSectionMockedData,
} from '../../helpers/indexMockedDatas'

import { StyledMain } from './style'

import WhishListIcon from '../../assets/icons/wishlist.svg'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import GearboxIcon from '../../assets/icons/gearbox.svg'
import DashboardIcon from '../../assets/icons/dashboard.svg'
import PetrolIcon from '../../assets/icons/petrol.svg'
import PinMarketIcon from '../../assets/icons/pin-market.svg'
import ChevronIcon from '../../assets/icons/chevron.svg'

import CarBanner from '../../assets/images/car-banner.png'

import BannerSection from './components/BannerSection'
import TypesSection from './components/TypesSection'
import OffersSection from './components/OffersSection'
import BrandsSection from './components/BrandsSection'
import DetailsSection from './components/DetailsSection'
import AccessoriesSection from './components/AccessoriesSection'
import AppSection from './components/AppSection'
import LatestNewsSection from './components/LatestNewsSection'
import LatestSection from './components/LatestSection'

export const Home = () => {
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
