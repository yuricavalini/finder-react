import { Link } from '../../../../components/Link'

import { latestNewsSectionMockedData } from '../../../../helpers/indexMockedDatas'

const LatestNewsSection = ({ ...props }) => {
  return (
    <section className="latest-news">
      <div className="latest-news-header">
        <h1 className="latest-news-tittle">Últimas novidades</h1>

        <Link
          to="#blog"
          className="latest-news-link center-content"
          children={
            <>
              <span>Ir para o blog</span>
              <i className="arrow-right--icon"></i>
            </>
          }
        />
      </div>
      <div className="latest-news-gallery">
        {latestNewsSectionMockedData.map((item, index) => (
          <article className="latest-news-offer" key={`${item.alt}-${index}`}>
            <figure className="offer-image-container center-content">
              <img src={item.image} alt={item.alt} className="offer-image" />
            </figure>

            <div className="offer-tittle-container">
              <h1 className="offer-tittle">{item.title}</h1>
              <span className="offer-subtittle">{item.subtitle}</span>
            </div>
            <div className="offer-author-container">
              <img
                src={item.avatarImage}
                alt="Avatar"
                className="author-photo"
              />
              <div className="author-info">
                <h2 className="author-name">{item.authorName}</h2>
                <div className="date">
                  <i className="calendar--icon"></i>
                  <span className="date-text">{item.date}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LatestNewsSection
