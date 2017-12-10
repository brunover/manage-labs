import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Base from './Base'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: false,
    }
  }

  render() {

    return (
      <Base>
        <section className="view-internal login-page">
          <div className="row">
            <div className="col-sm-6">
              <div className="login-welcome-col">
                <h2>Seja bem vindo ao Manager Labs!</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
                <p><Link to="/cadastro" className="btn btn-mint btn-lg btn-block" type="submit">Testar por 14 dias</Link></p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="cls-content">
                <div className="cls-content-sm panel">
                  <div className="panel-body">
                    <div className="pad-btm">
                      <h1 className="h3 text-center">Acessar minha conta</h1>
                    </div>
                    <form action="/painel" method="post">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email ou Login" required autoFocus/>
                      </div>
                      <div className="form-group form-group--select">
                        <select name="listbox" required>
                          <option value="">Selecione o Ramo</option>
                          <option value="1">Item 1</option>
                          <option value="2">Item 2</option>
                          <option value="3">Item 3</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Senha" required />
                      </div>
                      <div className="checkbox pad-btm">
                        <input id="rememberLogin" type="checkbox"/>
                        <label htmlFor="rememberLogin">Lembrar login</label>
                      </div>
                      <button className="btn btn-mint btn-lg btn-block" type="submit">Entrar</button>
                    </form>
                  </div>
                  <div className="text-center">
                    <Link to="/esqueci-senha" className="btn-link mar-rgt">Esqueceu a senha?</Link>
                    <Link to="/cadastro" className="btn-link mar-lft">Teste gratuito por 14 dias</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Base>
    )
  }

}

export default Login