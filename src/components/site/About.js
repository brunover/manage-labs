import React from 'react'
import Base from './Base'

class About extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: false,
    }
  }

  render() {
    return (
      <Base>
        <section className="view-internal about-page">
          <div className="row">
            <div className="col-sm-4">
              logo
            </div>
            <div className="col-sm-8 login-welcome-col">
              <h2>Sobre a ReservaLab</h2>
              <p className="about-page-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <p className="about-page-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
          </div>
        </section>
      </Base>
    )
  }

}

export default About