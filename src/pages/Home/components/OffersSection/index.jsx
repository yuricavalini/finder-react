import { Link } from '../../../../components/Link'
import { Card } from '../../../../components/CardsCarousel'
import { Checkbox } from '../../../../components/Checkbox'

import { offersSectionMockedData } from '../../../../helpers/indexMockedDatas'

import WhishListIcon from '../../../../assets/icons/wishlist.svg'
import ArrowLeftIcon from '../../../../assets/icons/arrow-left.svg'
import ArrowRightIcon from '../../../../assets/icons/arrow-right.svg'
import PinMarketIcon from '../../../../assets/icons/pin-market.svg'
import DashboardIcon from '../../../../assets/icons/dashboard.svg'
import GearboxIcon from '../../../../assets/icons/gearbox.svg'
import PetrolIcon from '../../../../assets/icons/petrol.svg'

const CatalogPath = '/catalog'

const OffersSection = ({ ...props }) => {
  return (
    <section
      className="ofertas"
      aria-label="Ofertas de carros ICarros - Gama Academy"
    >
      <div className="headline">
        <h1>Ofertas</h1>

        <Link
          to={CatalogPath}
          className="ofertas-section--link center-content"
          children={
            <>
              <span>Ver todas as ofertas</span>
              <i className="ofertas-section--icon arrow-right-icon"></i>
            </>
          }
        />
      </div>

      <div className="card-container">
        <Card className="latest-card">
          <div className="wrapper">
            <div className="slider">
              {offersSectionMockedData[0].photos.desktop.map((photo, index) => (
                <img
                  key={`car-photo-${index}`}
                  className="show"
                  src={photo}
                  alt={offersSectionMockedData[0].description}
                />
              ))}
            </div>

            <div className="icons">
              <img
                className="wishlist"
                src={WhishListIcon}
                alt="Adicionar aos favoritos"
              />
              <img
                className="arrow-left"
                src={ArrowLeftIcon}
                alt="Imagem anterior"
              />
              <img
                className="arrow-right"
                src={ArrowRightIcon}
                alt="Próxima imagem"
              />
            </div>
          </div>

          <div className="label">
            {offersSectionMockedData[0].condition === 0 ? (
              <div className="info warning-label">Novo</div>
            ) : (
              <div className="info info-label">Usado</div>
            )}

            {offersSectionMockedData[0].certified && (
              <div className="info success-label">Certificado</div>
            )}
          </div>

          <div className="container">
            <div className="content">
              <div className="info-header">
                <span>{offersSectionMockedData[0].year}</span>

                <Checkbox
                  label="Compare"
                  name="compare"
                  id={`offer-card-${offersSectionMockedData[0].id}`}
                />
              </div>

              <div className="info">
                <h1>{offersSectionMockedData[0].description}</h1>
                <span>${offersSectionMockedData[0].price}</span>
                <div>
                  <img
                    className="pin-market"
                    src={PinMarketIcon}
                    alt="Estado de venda/locação"
                  />
                  <small>{offersSectionMockedData[0].location}</small>
                </div>
              </div>
            </div>

            <div className="icons">
              <div className="icon">
                <img src={DashboardIcon} alt="Quilometragem do veículo" />
                <span>{offersSectionMockedData[0].details[0]}</span>
              </div>

              <div className="icon">
                <img src={GearboxIcon} alt="Transmissão do veículo" />
                <span>{offersSectionMockedData[0].details[1]}</span>
              </div>

              <div className="icon">
                <img src={PetrolIcon} alt="Combustível de alimentação" />
                <span>{offersSectionMockedData[0].details[2]}</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="latest-card secondary">
          <div className="wrapper">
            <div className="slider slider-desktop">
              {offersSectionMockedData[1].photos.desktop.map((photo, index) => (
                <img
                  key={`car-photo-${index}`}
                  className="show"
                  src={photo}
                  alt={offersSectionMockedData[1].description}
                />
              ))}
            </div>

            <div className="slider-mobile">
              {offersSectionMockedData[1].photos.mobile.map((photo, index) => (
                <img
                  key={`car-photo-${index}`}
                  className="show"
                  src={photo}
                  alt={offersSectionMockedData[1].description}
                />
              ))}
            </div>

            <div className="icons">
              <img
                className="wishlist"
                src={WhishListIcon}
                alt="Adicionar aos favoritos"
              />
              <img
                className="arrow-left"
                src={ArrowLeftIcon}
                alt="Imagem anterior"
              />
              <img
                className="arrow-right"
                src={ArrowRightIcon}
                alt="Próxima imagem"
              />
            </div>
          </div>

          <div className="label">
            {offersSectionMockedData[1].condition === 0 ? (
              <div className="info warning-label">Novo</div>
            ) : (
              <div className="info info-label">Usado</div>
            )}

            {offersSectionMockedData[1].certified && (
              <div className="info success-label">Certificado</div>
            )}
          </div>

          <div className="container">
            <div className="content">
              <div className="info-header">
                <span>{offersSectionMockedData[1].year}</span>

                <Checkbox
                  label="Compare"
                  name="compare"
                  id={`offer-card-${offersSectionMockedData[1].id}`}
                />
              </div>

              <div className="info">
                <h1>{offersSectionMockedData[1].description}</h1>
                <span>${offersSectionMockedData[1].price}</span>
                <div>
                  <img
                    className="pin-market"
                    src={PinMarketIcon}
                    alt="Estado de venda/locação"
                  />
                  <small>{offersSectionMockedData[1].location}</small>
                </div>
              </div>
            </div>

            <div className="icons">
              <div className="icon">
                <img src={DashboardIcon} alt="Quilometragem do veículo" />
                <span>{offersSectionMockedData[1].details[0]}</span>
              </div>

              <div className="icon">
                <img src={GearboxIcon} alt="Transmissão do veículo" />
                <span>{offersSectionMockedData[1].details[1]}</span>
              </div>

              <div className="icon">
                <img src={PetrolIcon} alt="Combustível de alimentação" />
                <span>{offersSectionMockedData[1].details[2]}</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="latest-card secondary">
          <div className="wrapper">
            <div className="slider slider-desktop">
              {offersSectionMockedData[2].photos.desktop.map((photo, index) => (
                <img
                  key={`car-photo-${index}`}
                  className="show"
                  src={photo}
                  alt={offersSectionMockedData[2].description}
                />
              ))}
            </div>

            <div className="slider-mobile">
              {offersSectionMockedData[2].photos.mobile.map((photo, index) => (
                <img
                  key={`car-photo-${index}`}
                  className="show"
                  src={photo}
                  alt={offersSectionMockedData[2].description}
                />
              ))}
            </div>

            <div className="icons">
              <img
                className="wishlist"
                src={WhishListIcon}
                alt="Adicionar aos favoritos"
              />
              <img
                className="arrow-left"
                src={ArrowLeftIcon}
                alt="Imagem anterior"
              />
              <img
                className="arrow-right"
                src={ArrowRightIcon}
                alt="Próxima imagem"
              />
            </div>
          </div>

          <div className="label">
            {offersSectionMockedData[2].condition === 0 ? (
              <div className="info warning-label">Novo</div>
            ) : (
              <div className="info info-label">Usado</div>
            )}

            {offersSectionMockedData[2].certified && (
              <div className="info success-label">Certificado</div>
            )}
          </div>

          <div className="container">
            <div className="content">
              <div className="info-header">
                <span>{offersSectionMockedData[2].year}</span>

                <Checkbox
                  label="Compare"
                  name="compare"
                  id={`offer-card-${offersSectionMockedData[2].id}`}
                />
              </div>

              <div className="info">
                <h1>{offersSectionMockedData[2].description}</h1>
                <span>${offersSectionMockedData[2].price}</span>
                <div>
                  <img
                    className="pin-market"
                    src={PinMarketIcon}
                    alt="Estado de venda/locação"
                  />
                  <small>{offersSectionMockedData[2].location}</small>
                </div>
              </div>
            </div>

            <div className="icons">
              <div className="icon">
                <img src={DashboardIcon} alt="Quilometragem do veículo" />
                <span>{offersSectionMockedData[2].details[0]}</span>
              </div>

              <div className="icon">
                <img src={GearboxIcon} alt="Transmissão do veículo" />
                <span>{offersSectionMockedData[2].details[1]}</span>
              </div>

              <div className="icon">
                <img src={PetrolIcon} alt="Combustível de alimentação" />
                <span>{offersSectionMockedData[2].details[2]}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default OffersSection
