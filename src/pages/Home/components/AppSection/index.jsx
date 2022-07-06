import { accessoriesSectionMockedData } from '../../../../helpers/indexMockedDatas'

const AppSection = ({ ...props }) => {
  return (
    <section className="app-section d-flex">
      <article className="app-download">
        <h2 className="article-title">Baixe o nosso app</h2>
        <p className="article-content">
          Baixe o Finder App e junte-se à comunidade de entusiastas de carros.
          Não pare sua busca de carro quando sair do computador com nosso
          aplicativo para Android e iOS!
        </p>

        <div className="app-stores d-flex">
          <div className="store-button center-content gap-17" role="button">
            <i className="icon-store icon-apple"></i>
            <div className="store-button--text">
              <p className="button--subtitle">Available on the</p>
              <p className="button--title">App Store</p>
            </div>
          </div>

          <div className="store-button center-content gap-12" role="button">
            <i className="icon-store icon-google"></i>
            <div className="store-button--text">
              <p className="button--subtitle">GET IT ON</p>
              <p className="button--title">Google Play</p>
            </div>
          </div>
        </div>
      </article>
      <article className="wrapper-phone center-content">
        <div className="phone--text">
          <p>Maneira fácil de comprar e vender veículos</p>

          <button
            className="button-phone center-content"
            type="button"
            aria-label="Buscar veículos"
          >
            <span className="button-phone--text">Buscar...</span>

            <div className="phone-end center-content">
              <i className="icon-button--search"></i>
            </div>
          </button>
        </div>

        <span className="phone--car"></span>
        <span className="phone-shape phone-shape--border"></span>
        <span className="phone-shape phone-shape--background"></span>
        <span className="circle-bg"></span>
      </article>
    </section>
  )
}

export default AppSection
