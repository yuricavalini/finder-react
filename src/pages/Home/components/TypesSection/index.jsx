import { Link } from '../../../../components/Link'

import { typesSectionMockedData } from '../../../../helpers/indexMockedDatas'

const CatalogPath = '/catalog'

const TypesSection = ({ ...props }) => {
  return (
    <section className="types-section">
      <div className="types-section--header">
        <h1 className="types-section--title">Mais procurados</h1>

        <Link
          to={CatalogPath}
          className="types-section--link center-content"
          children={
            <>
              <span>Ver todos</span>
              <i className="types-section--icon arrow-right-icon"></i>
            </>
          }
        />
      </div>

      <div className="types-section--container">
        {typesSectionMockedData.map((type, index) => (
          <div className="types-section--card" key={`${type.label}-${index}`}>
            <Link
              to={CatalogPath}
              // to={`${CatalogPath}?cartype=${type.label}`}
              className="types-section--a"
              children={
                <>
                  <img
                    src={type.image}
                    className="types-section--img"
                    alt={type.label}
                  />
                  <span>{type.label}</span>
                </>
              }
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TypesSection
