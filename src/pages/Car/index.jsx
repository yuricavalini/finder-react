import { useState, useEffect, useRef, useContext } from 'react'

import { Link } from '../../components/Link'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { CardsCarousel } from '../../components/CardsCarousel'

import {
  CardHeader,
  Breadcrumbs,
  CardHeaderIcons,
  ContentWrapper,
  Specifications,
  Sidebar,
  SellerDescription,
  Latest,
} from './style'

import { Checkbox } from '../../components/Checkbox'

import GalleryOne from '../../assets/images/gallery-1.png'
import GalleryTwo from '../../assets/images/gallery-2.jpg'
import GalleryThree from '../../assets/images/gallery-3.jpg'
import GalleryFour from '../../assets/images/gallery-4.jpg'
import Avatar from '../../assets/images/avatar.png'

const CatalogPath = '/catalog'

export const Car = () => {
  const [subscribe, setSubscribe] = useState(true)

  // Handle functions
  const handleOnChangeSubscribe = (e) => {
    setSubscribe(!subscribe)
  }

  // Gallery Logic
  const getGalleryImagesList = () => {
    const galleryList = document.getElementsByClassName('gallery-image')

    if (!galleryList) {
      return []
    }

    return [...galleryList]
  }

  const getPreviewImagesList = () => {
    const previewList = document.getElementsByClassName('preview-image')
    if (!previewList) {
      return []
    }

    return [...previewList]
  }

  const getMaxIndex = (array) => array.length - 1

  const updatePagination = (current, max) => {
    const pagination = document.getElementById('pagination-content')

    pagination.textContent = `${current + 1}/${max + 1}`
  }

  const handleOnClickPreview = (index) => {
    const preview = getPreviewImagesList()
    const gallery = getGalleryImagesList()
    const maxIndex = getMaxIndex(gallery)

    const currentImage = gallery.find((image) =>
      image.classList.contains('show')
    )
    const currentPreview = preview.find((image) =>
      image.classList.contains('active-preview')
    )

    currentImage.classList.remove('show')
    currentPreview.classList.remove('active-preview')

    gallery[index].classList.add('show')
    preview[index].classList.add('active-preview')

    updatePagination(index, maxIndex)
  }

  const forEachPreviewCallback = (image, index) => {
    image.addEventListener('click', () => {
      handleOnClickPreview(index)
    })
  }

  const addPreviewEventListener = () => {
    const preview = getPreviewImagesList()

    preview.forEach(forEachPreviewCallback)
  }

  const startCarousel = () => {
    const previousButton = document.getElementById('previous-button')
    const nextButton = document.getElementById('next-button')

    previousButton.addEventListener('click', () => {
      const gallery = getGalleryImagesList()
      const preview = getPreviewImagesList()
      const maxIndex = getMaxIndex(gallery)

      const currentIndex = gallery.findIndex((image) =>
        image.classList.contains('show')
      )
      const newIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex

      gallery[currentIndex].classList.remove('show')
      preview[currentIndex].classList.remove('active-preview')

      gallery[newIndex].classList.add('show')
      preview[newIndex].classList.add('active-preview')

      updatePagination(newIndex, maxIndex)
    })

    nextButton.addEventListener('click', () => {
      const gallery = getGalleryImagesList()
      const preview = getPreviewImagesList()
      const maxIndex = getMaxIndex(gallery)

      const currentIndex = gallery.findIndex((image) =>
        image.classList.contains('show')
      )
      const newIndex = currentIndex < maxIndex ? currentIndex + 1 : 0

      gallery[currentIndex].classList.remove('show')
      preview[currentIndex].classList.remove('active-preview')

      gallery[newIndex].classList.add('show')
      preview[newIndex].classList.add('active-preview')

      updatePagination(newIndex, maxIndex)
    })

    addPreviewEventListener()
  }

  window.addEventListener('load', startCarousel)

  return (
    <>
      <Navbar />
      <main className="main-car-page center-page-content">
        <CardHeader>
          <div className="card-header-wrapper">
            <Breadcrumbs aria-label="breadcrumbs" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" children="Home" />
                </li>

                <li className="breadcrumb-item">
                  <Link to={`${CatalogPath}?condition=2`} children="Usados" />
                </li>

                <li className="breadcrumb-item active">
                  <Link
                    to="#"
                    children="Mercedes-Benz E 400 Cabriolet"
                    aria-current="page"
                  />
                </li>
              </ol>
            </Breadcrumbs>

            <div className="row space-between">
              <h1>Mercedes-Benz E 400 Cabriolet</h1>

              <CardHeaderIcons>
                <button type="button" aria-label="Favoritar">
                  <i className="heart--icon"></i>
                </button>

                <button type="button" aria-label="Compartilhar">
                  <i className="share--icon"></i>
                </button>
              </CardHeaderIcons>
            </div>
          </div>
        </CardHeader>

        <ContentWrapper>
          <div className="content">
            <div className="column">
              <div className="wrapper">
                <div className="slider-gallery">
                  <img
                    className="gallery-image show"
                    src={GalleryOne}
                    alt="Mercedes Benz Convertible Coupe"
                  />
                  <img
                    className="gallery-image"
                    src={GalleryTwo}
                    alt="Mercedes Benz Convertible Coupe"
                  />
                  <img
                    className="gallery-image"
                    src={GalleryThree}
                    alt="Mercedes Benz Convertible Coupe"
                  />
                  <img
                    className="gallery-image"
                    src={GalleryFour}
                    alt="Mercedes Benz Convertible Coupe"
                  />
                </div>

                <div className="icons">
                  <div id="previous-button" className="arrow-left-container">
                    <i className="chevron--icon rotate-icon-left"></i>
                  </div>

                  <div id="next-button" className="arrow-right-container">
                    <i className="chevron--icon rotate-icon-right"></i>
                  </div>

                  <div className="pagination">
                    <i className="image--icon"></i>
                    <span
                      id="pagination-content"
                      className="pagination-counter"
                    >
                      1/4
                    </span>
                  </div>
                </div>
              </div>

              <div className="previews">
                <img
                  className="preview-image active-preview"
                  src={GalleryOne}
                  alt="Mercedes Benz Convertible Coupe"
                />
                <img
                  className="preview-image"
                  src={GalleryTwo}
                  alt="Mercedes Benz Convertible Coupe"
                />
                <img
                  className="preview-image"
                  src={GalleryThree}
                  alt="Mercedes Benz Convertible Coupe"
                />
                <img
                  className="preview-image"
                  src={GalleryFour}
                  alt="Mercedes Benz Convertible Coupe"
                />

                <div className="video-preview">
                  <i className="play-video--icon"></i>
                  <span>Play video</span>
                </div>
              </div>

              <Specifications className="specifications">
                <h1>Especificações</h1>
                <ul>
                  <li>
                    <strong>Ano:</strong>
                    <span>2018</span>
                  </li>
                  <li>
                    <strong>Kilome:</strong>
                    <span>25K miles</span>
                  </li>
                  <li>
                    <strong>Tipo:</strong>
                    <span>Convertible</span>
                  </li>
                  <li>
                    <strong>Transmisão:</strong>
                    <span>Automático</span>
                  </li>
                </ul>
              </Specifications>
            </div>

            <Sidebar>
              <h1 className="car-price">R$ 60.990</h1>

              <div className="meta">
                <div className="mileage">
                  <div className="distance">
                    <i className="dashboard--icon"></i>
                    <span>25.000 Km</span>
                  </div>

                  <div className="divider"></div>

                  <div className="location">
                    <i className="pin--icon"></i>
                    <span>São Paulo</span>
                  </div>
                </div>
              </div>

              <div className="author">
                <div className="info">
                  <div className="info-wrapper">
                    <p>Vendedor particular</p>

                    <div className="basic">
                      <img src={Avatar} alt="Avatar" />

                      <div>
                        <h1 className="username">Usuário</h1>

                        <div className="reviews">
                          <i className="filled-star--icon"></i>
                          <i className="filled-star--icon"></i>
                          <i className="filled-star--icon"></i>
                          <i className="filled-star--icon"></i>
                          <i className="filled-star--icon"></i>

                          <span>(5 reviews)</span>
                        </div>
                      </div>
                    </div>

                    <div className="others">
                      <a href="#">Outros anúncios deste vendedor</a>
                    </div>
                  </div>
                  <div className="info-actions">
                    <button
                      className="outlined"
                      type="button"
                      arial-label="Telefone"
                    >
                      <i className="phone2--icon"></i> (11) *** ****
                    </button>

                    <button
                      className="primary"
                      type="button"
                      aria-label="Enviar e-mail"
                    >
                      <i className="mail--icon"></i>
                      Enviar email
                    </button>
                  </div>
                </div>
              </div>

              <div className="subscribe">
                <p>
                  Envie-me por e-mail quedas de preços e novas listagens para
                  estes resultados de pesquisa:
                </p>

                <div className="input-group">
                  <i className="mail--icon"></i>
                  <input type="text" placeholder="Email" spellCheck="false" />
                  <button type="button" aria-label="Fazer inscrição">
                    Subscribe
                  </button>
                </div>

                <Checkbox
                  className="styled-checkbox"
                  id="subscribe"
                  name="subscribe"
                  checked={subscribe}
                  onChange={handleOnChangeSubscribe}
                  label="Concordo em receber alertas de queda de preço neste veículo
                    e informações úteis sobre compras."
                />
              </div>
            </Sidebar>
          </div>
        </ContentWrapper>

        <SellerDescription className="car-ad-description">
          <section className="car-ad-icons center-content">
            <div className="car-ad-description--icon center-content">
              <div className="icon-background center-content">
                <i className="icon-adv icon-ad-check"></i>
              </div>
              <p>Verificado e certificado pelo finder</p>
            </div>
            <div className="car-ad-description--icon center-content">
              <div className="icon-background center-content">
                <i className="icon-adv icon-ad-wheel"></i>
              </div>
              <p>Único dono</p>
            </div>
            <div className="car-ad-description--icon center-content">
              <div className="icon-background center-content">
                <i className="icon-adv icon-ad-driving"></i>
              </div>
              <p>Bem equipado</p>
            </div>
            <div className="car-ad-description--icon center-content">
              <div className="icon-background center-content">
                <i className="icon-adv icon-ad-accident"></i>
              </div>
              <p>Nenhum acidente/ dano relatado</p>
            </div>
          </section>

          <section className="seller-description">
            <h1>Descrição do vendedor</h1>
            <p>
              Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non
              scelerisque turpis sed etiam ultrices. Blandit mollis dignissim
              egestas consectetur porttitor. Vulputate dolor pretium, dignissim
              eu augue sit ut convallis. Lectus est, magna urna feugiat sed
              ultricies sed in lacinia. Fusce potenti sit id pharetra vel
              ornare. Vestibulum sed tellus ullamcorper arcu.
            </p>
            <a href="#" className="details-section--link">
              Veja mais
            </a>
          </section>

          <i className="icon-divider-horizontal"></i>

          <section className="car-ad-footer">
            <div className="car-ad-footer--item">
              <p>
                Publicado: Abril, <span>2020</span>
              </p>
            </div>
            <i className="icon-divider"></i>
            <div className="car-ad-footer--item">
              <p>
                Numero do anuncio: <span>681013232</span>
              </p>
            </div>
            <i className="icon-divider"></i>
            <div className="car-ad-footer--item">
              <p>
                Visualizações: <span>48</span>
              </p>
            </div>
          </section>
        </SellerDescription>

        <Latest className="ultimos">
          <div className="headline headline-car-page">
            <h1>Você pode estar interessado</h1>
            <div className="floating-link">
              <a href="#" className="link center-content">
                <span>Ver todos</span>
                <i className="floating-link--icon arrow-right-icon"></i>
              </a>
            </div>
          </div>

          <CardsCarousel className="wrapper-container" />
        </Latest>
      </main>
      <Footer />
    </>
  )
}
