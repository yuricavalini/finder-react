import CarBanner from '../../../../assets/images/car-banner.png'

import { Banner } from './style'

const BannerSection = ({ ...props }) => {
  return (
    <Banner className="banner">
      <div className="banner-info">
        <h1>Compre e venda com facilidade.</h1>
        <h2>
          O Finder é um mercado digital líder para a indústria automotiva que
          conecta compradores de carros a vendedores.
        </h2>
      </div>
      <div className="banner-image">
        <figure className="image-container center-content">
          <img
            src={CarBanner}
            alt="Car banner image"
            width="746px"
            height="auto"
          />
        </figure>
      </div>
    </Banner>
  )
}

export default BannerSection
