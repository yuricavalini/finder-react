import { useState, useEffect } from 'react'

import { ButtonCheckbox } from '../../../../components/ButtonCheckbox'
import { CardsCarousel } from '../../../../components/CardsCarousel'
import { Link } from '../../../../components/Link'

import { Latest } from '../../../Car/style'

const CatalogPath = '/catalog'

const LatestSection = ({ ...props }) => {
  const [latestCondition, setLatestCondition] = useState({
    conditionFirst: false,
    conditionSecond: true,
  })
  const [linkTo, setLinkTo] = useState(CatalogPath)

  /**
   * Observes the value change of latestCondition state to serialize url parameters accordingly.
   */
  useEffect(() => {
    async function serializeLink() {
      setLinkTo(await handleCatalogUrlSerialization())
    }
    serializeLink()
  }, [latestCondition])

  const handleOnChangeLatestConditionFirst = (e) => {
    setLatestCondition({
      ...latestCondition,
      conditionFirst: e.target.checked,
    })
  }
  const handleOnChangeLatestConditionSecond = (e) => {
    setLatestCondition({
      ...latestCondition,
      conditionSecond: e.target.checked,
    })
  }

  const processConditionsValues = () => {
    return new Promise((resolve, reject) => {
      let conditions = []

      if (latestCondition?.conditionFirst) {
        conditions.push(1)
      }
      if (latestCondition?.conditionSecond) {
        conditions.push(2)
      }

      resolve(conditions)
    })
  }

  const handleCatalogUrlSerialization = async () => {
    const conditions = await processConditionsValues()
    const paramsArray = []

    for (const condition of conditions) {
      paramsArray.push(`condition=${condition}`)
    }
    return `${CatalogPath}?${paramsArray.join('&')}`
  }

  return (
    <Latest className="ultimos">
      <div className="headline headeline index">
        <h1>Últimos publicados</h1>

        <div className="ultimos-section-actions center-content">
          <div className="actions-buttons center-content">
            <ButtonCheckbox
              onChange={handleOnChangeLatestConditionFirst}
              label="Novo"
              id="latestConditionFirst"
              name="latestConditionFirst"
              checked={latestCondition?.conditionFirst}
              maxWidth="72px"
            />

            <ButtonCheckbox
              onChange={handleOnChangeLatestConditionSecond}
              label="Usado"
              id="latestConditionSecond"
              name="latestConditionSecond"
              checked={latestCondition?.conditionSecond}
              maxWidth="80px"
              default
            />
          </div>

          <Link
            className="ultimos-section--link center-content"
            to={linkTo}
            children={
              <>
                <span>Ver todos</span>
                <i className="ultimos-section--icon arrow-right-icon"></i>
              </>
            }
          />
        </div>
      </div>

      <CardsCarousel className="wrapper-container" />
    </Latest>
  )
}

export default LatestSection
