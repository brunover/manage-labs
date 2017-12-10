import React, {Component} from 'react'
import { Link } from 'react-router-dom'
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
        <section className="view-internal forgetpass-page">
          <div className="cls-content">
            <div className="panel">
              <div className="panel-body">
                <h2 className="text-center">Esqueci a senha</h2>
                <p className="text-center">Insira o email cadastrado para resetar a senha.</p>
                <form action="index.html">
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Nova Senha" required />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Repetir Senha" required />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-mint btn-lg btn-block" type="submit">Enviar</button>
                  </div>
                </form>
              </div>
              <div className="text-center">
                <Link to="/" className="btn-link mar-rgt">Voltar para Login</Link>
                <Link to="/cadastro" className="btn-link mar-lft">Teste gratuito por 14 dias</Link>
              </div>
            </div>
          </div>
        </section>
      </Base>
    )
  }

}

export default ResetPass