import { accessoriesSectionMockedData } from '../../../../helpers/indexMockedDatas'

const AccessoriesSection = ({ ...props }) => {
  return (
    <>
      <section className="accessories-section center-content">
        <article className="accessories">
          <h2 className="article-title">Loren ipsun</h2>
          <p className="article-content">Loren ipsun site amet</p>
          <div className="button-article center-content" role="button">
            <span>Ir para loja</span>
            <i className="button-icon--chevron"></i>
          </div>
        </article>

        <article className="car-parts center-content">
          {accessoriesSectionMockedData.map((item, index) => (
            <div
              className="car-parts--itens center-content"
              key={`${item.label}-${index}`}
            >
              <img src={item.image} alt={item.alt} className="item--image" />
              <span>{item.label}</span>
            </div>
          ))}
        </article>
      </section>
      <div className="arrows-accessories">
        <div className="icon-accessories">
          <i className="icon-accessories--chevron"></i>
        </div>

        <div className="icon-accessories">
          <i className="icon-accessories--chevron"></i>
        </div>
      </div>
    </>
  )
}

export default AccessoriesSection
