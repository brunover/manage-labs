import React from 'react'
import Base from '../Base'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: true,
    }
  }

  render() {
    return (
      <Base>
        <div className="view-internal home-view">
          <div id="page-title">
            <h1 className="page-header text-overflow">Início</h1>
            <h4>Bem vindo ao painel adminstrativo da Manage Labs!</h4>
          </div>
          <section id="page-content">
            <div className="row">
              <div className="col-sm-6 col-lg-3">

              </div>
            </div>
          </section>
        </div>
      </Base>
    )
  }

}

export default Home