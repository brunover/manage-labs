import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Base from './Base'
import $ from 'jquery'
import 'jquery-mask-plugin/dist/jquery.mask.min.js'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: false,
    }
  }

  componentDidMount() {
    $('.input-phone').mask('(00) 0000-0000');
    $('.input-cellphone').mask('(00) 00000-0000');
    $('.input-cnpj').mask('00.000.000/0000-00');
    $('.input-cpf').mask('000.000.000-00');
  }

  render() {
    return (
      <Base>
        <section className="view-internal register-page">
          <div className="cls-content">
            <div className="panel">
              <div className="panel-body">
                <div className="pad-btm">
                  <h2 className="h2 text-center">Criar nova conta</h2>
                </div>
                <form action="pages-login.html">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nome Solicitante" required name="name_user" maxLength="80" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control input-cpf" placeholder="CPF" required name="password" maxLength="12" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nome Empresa" required name="name_company" maxLength="45" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control input-cnpj" placeholder="CNPJ" required name="cnpj"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control input-phone" placeholder="Telefone" required name="phone"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control input-cellphone" placeholder="Celular" name="phone2"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required name="email" maxLength="60" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-group--select">
                        <select name="listbox" required>
                          <option value="">Selecione o Ramo</option>
                          <option value="1">Item 1</option>
                          <option value="2">Item 2</option>
                          <option value="3">Item 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="checkbox pad-btm text-left">
                    <input id="acceptTerms" required className="magic-checkbox" type="checkbox" name="accept_terms" />
                    <label htmlFor="acceptTerms">Eu li e concordo com os <Link to="/termos-uso" className="btn-link text-semibold">Termos e Condições de uso</Link></label>
                  </div>
                  <button className="btn btn-mint btn-lg btn-block" type="submit">Cadastrar</button>
                </form>
              </div>
              <div className="text-center">
                Já possui uma conta? <Link to="/" className="btn-link mar-rgt text-semibold">Entrar</Link>
              </div>
            </div>
          </div>
        </section>
      </Base>
    )
  }

}

export default Register