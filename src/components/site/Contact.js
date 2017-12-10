import React, {Component} from 'react'
import Base from './Base'
import $ from 'jquery'
import 'jquery-mask-plugin/dist/jquery.mask.min.js'

class Contact extends Component {

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
  }

  render() {

    return (
      <Base>
        <section className="view-internal contact-page">
          <div className="row">
            <div className="col-sm-6">
              <div className="login-welcome-col">
                <h2>Entre em contato consoco!</h2>
                <h4 className="h4">Para dúvidas, sugestões ou reclamações, envie-nos um email preenchendo o formulário ao lado.</h4>
                <p><strong>Siga-nos nas redes sociais!</strong></p>
                <div className="pad-top">
                  <a href="https://facebook.com" target="_blank" className="pad-rgt" rel="noopener noreferrer"><i className="fa fa-facebook-official"></i></a>
                  <a href="https://facebook.com" target="_blank" className="pad-rgt" rel="noopener noreferrer"><i className="fa fa-instagram text-pink"></i></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="cls-content">
                <div className="cls-content-lg panel">
                  <div className="panel-body">
                    <form action="index.html" className="row">
                      <div className="form-group col-sm-12">
                        <input type="text" className="form-control" placeholder="Seu Nome" required maxLength="80" />
                      </div>
                      <div className="form-group col-sm-12">
                        <input type="email" className="form-control" placeholder="Seu Email" required maxLength="80" />
                      </div>
                      <div className="form-group col-sm-6">
                        <input type="text" className="form-control input-cellphone" placeholder="Telefone" />
                      </div>
                      <div className="form-group col-sm-6">
                        <div className="form-group--select">
                          <select name="listbox" required>
                            <option value="">Assunto relacionado</option>
                            <option value="Dúvidas">Dúvidas</option>
                            <option value="Sugestões">Sugestões</option>
                            <option value="Reclamações">Reclamações</option>
                            <option value="Outros">Outros</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group col-sm-12">
                        <textarea rows="9" className="form-control" placeholder="Mensagem" required maxLength="255" />
                      </div>
                      <div className="form-group col-sm-12">
                        <button className="btn btn-mint btn-lg btn-block" type="submit">Enviar</button>
                      </div>
                    </form>
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

export default Contact