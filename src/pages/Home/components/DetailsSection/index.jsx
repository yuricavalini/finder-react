import { Link } from '../../../../components/Link'
import AutoCar from '../../../../assets/images/auto.svg'
import RoadLine from '../../../../assets/images/road-line.svg'

const DetailsSection = ({ ...props }) => {
  return (
    <section className="details-section center-content direction-column">
      <div className="details-header center-content center-page-content space-between">
        <h1>O que temos de diferente</h1>

        <Link
          to="#vender"
          className="details-section--link center-content"
          children={
            <>
              <span>Como vender carros no Finder</span>
              <i className="details-section--icon arrow-right-icon"></i>
            </>
          }
        />
      </div>

      <div className="details-container">
        <div className="details--centered-car center-content direction-column">
          <img src={AutoCar} alt="Ilustração de carro" className="auto-car" />

          <img
            src={RoadLine}
            alt="Ilustração de linhas de rodovia"
            className="road-line"
          />
        </div>

        <article className="details details-left">
          <div className="details--card">
            <div className="center-content direction-column title-left">
              <p className="card--title">Loren ipsun</p>
              <p className="card--content card-left">
                That's more than you'll find on any other major online
                automotive marketplace in the USA.
              </p>
            </div>
            <i className="icon-details icon-left icon-file"></i>
          </div>

          <div className="details--card">
            <div className="center-content direction-column title-left">
              <p className="card--title">Loren ipsun</p>
              <p className="card--content card-left">
                Our powerful search makes it easy to personalize your results so
                you only see the cars and features you care about.
              </p>
            </div>
            <i className="icon-details icon-left icon-search"></i>
          </div>

          <div className="details--card">
            <div className="center-content direction-column title-left">
              <p className="card--title">Loren ipsun</p>
              <p className="card--content card-left">
                Our team is constantly developing new features that make the
                process of buying and selling a car simpler.
              </p>
            </div>
            <i className="icon-details icon-left icon-settings"></i>
          </div>
        </article>

        <article className="details details-right">
          <div className="details--card">
            <i className="icon-details icon-right icon-info"></i>
            <div className="center-content direction-column title-right">
              <p className="card--title">Loren ipsun</p>
              <p className="card--content">
                We provide free access to key info like dealer reviews, market
                value, price drops.
              </p>
            </div>
          </div>

          <div className="details--card">
            <i className="icon-details icon-right icon-user"></i>
            <div className="center-content direction-column title-right">
              <p className="card--title">Loren ipsun</p>
              <p className="card--content">
                We focus on building the most transparent, trustworthy
                experience for our users, and we've proven that works for
                dealers, too.
              </p>
            </div>
          </div>

          <div className="details--card">
            <i className="icon-details icon-right icon-calculator"></i>
            <div className="center-content direction-column title-right">
              <p className="card--title">Loren ipsun</p>
              <p className="card--content">
                Specify the parameters of your car to form its market value on
                the basis of similar cars on Finder.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default DetailsSection
