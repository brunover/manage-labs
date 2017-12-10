import React, {Component} from 'react'
import Base from './Base'

class ResetPass extends Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: false,
    }
  }

  render() {

    return (
      <Base>
        <section className="contact-page">
          <div className="cls-content">
            <div className="cls-content-sm panel">
              <div className="panel-body">
                <h2 className="text-center">Resetar sua senha</h2>
                <p className="text-center">Escolha uma nova senha para sua conta.</p>
                <form action="index.html">
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Nova Senha" required autoFocus/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Repetir Senha" required />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-mint btn-lg btn-block" type="submit">Confirmar nova senha</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Base>
    )
  }

}

export default ResetPass