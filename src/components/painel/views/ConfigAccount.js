import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Base from '../Base'
import 'jquery-mask-plugin/dist/jquery.mask.min.js'

class ConfigAccount extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: true,
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
        <div className="view-internal home-view">
          <div id="page-title">
            <h1 className="page-header">Minha Conta</h1>
          </div>
          <ol className="breadcrumb">
            <li><Link to="/painel">Home</Link></li>
            <li><a href="#!">Configurações</a></li>
            <li className="active">Minha Conta</li>
          </ol>
          <section id="page-content">
            <div className="row">
              <div className="col-md-12 col-lg-5">
                <form className="form--personalized row">
                  <div className="col-md-6 form-group">
                    <label>Nome Solicitante</label>
                    <input type="text" className="form-control" defaultValue="Fulano Silva" required name="account_name" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>CPF</label>
                    <input type="text" className="form-control input-cpf" defaultValue="999.999.999-99" required name="account_" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>CNPJ</label>
                    <input type="text" className="form-control input-cnpj" defaultValue="99.999.999/9999-99" required name="account_" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Telefone</label>
                    <input type="text" className="form-control input-phone" defaultValue="(99) 9999-9999" required name="account_" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Celular</label>
                    <input type="text" className="form-control input-cellphone" defaultValue="(99) 99999-9999" required name="account_" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" defaultValue="fulano@email.com" required name="account_email" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" defaultValue="*******" required name="account_password" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Confirmar senha</label>
                    <input type="password" className="form-control" defaultValue="*******" required name="account_password_confirm" />
                  </div>
                  <div className="col-md-12 button-group">
                    <button className="btn btn-mint">Salvar alterações</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </Base>
    )
  }

}

export default ConfigAccount