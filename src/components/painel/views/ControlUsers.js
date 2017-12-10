import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../Base'
import $ from 'jquery'
import 'jquery-mask-plugin/dist/jquery.mask.min.js'
import 'select2/dist/css/select2.min.css'
import 'select2/dist/js/select2.min.js'

class ControlUsers extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: true,
    }
  }

  componentDidMount() {
    $('.input-cpf').mask('000.000.000-00');
    $('.input-phone').mask('(00) 0000-0000');
    $('.input-cellphone').mask('(00) 00000-0000');

    $(".selects-personalized").select2({
      width: '100%',
      minimumResultsForSearch: -1
    });
  }

  render() {
    return (
      <Base>
        <div className="view-internal reservas-view">
          <div id="page-title">
            <h1 className="page-header text-overflow">Usuários cadastrados</h1>
          </div>
          <ol className="breadcrumb">
            <li><Link to="/painel">Home</Link></li>
            <li><a href="#!">Controle</a></li>
            <li className="active">Usuários</li>
          </ol>
          <section id="page-content">
            <div className="pad-btm">
              <form className="form-inline form--personalized">
                <div className="input-group form-group">
                  <span className="input-group-addon"><i className="demo-pli-magnifi-glass"></i></span>
                  <input type="text" className="form-control" placeholder="Pesquisar Usuários" />
                </div> &nbsp;&nbsp;
                <a data-target="#modalNewUser" data-toggle="modal" className="btn btn-info">Novo Usuário</a>
              </form>
            </div>
            <div className="table-responsive">
              <table id="tableReservas" className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th className="text-center">Matrícula</th>
                    <th className="text-center">CPF</th>
                    <th className="text-center">Status</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-dark">
                    <td>Fulano de Silva Souza</td>
                    <td className="text-center">7492028389</td>
                    <td className="text-center">999.999.999-99</td>
                    <td className="text-center"><strong className="text-warning text-uppercase">Ativo</strong></td>
                    <td className="text-center">
                      <a data-target="#modalEditUser_1" data-toggle="modal" className="btn btn-info">Editar</a> &nbsp;
                      <a data-event="blockUser" className="btn btn-warning">Bloquear</a> &nbsp;
                      <a data-event="deleteUser" className="btn btn-danger">Deletar</a>
                      <div className="modal fade" id="modalEditUser_1" role="dialog" tabIndex="-1" aria-labelledby="modalEditUser_1" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal"><i className="pci-cross pci-circle"></i></button>
                              <h4 className="modal-title">Editar Usuário</h4>
                            </div>
                            <div className="modal-body">
                              <form className="form--personalized row">
                                <div className="col-md-6 form-group">
                                  <label>Nome</label>
                                  <input type="text" className="form-control" defaultValue="Fulano de Silva Souza" required name="user_name" maxLength="80" />
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>CPF</label>
                                  <input type="text" className="form-control input-cpf" defaultValue="999.999.999-99" required name="user_cpf" />
                                </div>
                                <div className="col-md-12 form-group">
                                  <label>E-mail</label>
                                  <input type="email" className="form-control" defaultValue="email@email.com" required name="user_email" maxLength="60" />
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Matrícula</label>
                                  <input type="text" className="form-control" defaultValue="7492028389" required name="user_matricula" maxLength="25" />
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Status</label>
                                  <select name="User_status" defaultValue="Ativo" className="selects-personalized">
                                    <option value="">Status</option>
                                    <option value="Ativo">Ativo</option>
                                    <option value="Inativo">Inativo</option>
                                  </select>
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Telefone</label>
                                  <input type="text" className="form-control input-phone" defaultValue="(99) 9999-9999" required name="user_phone" />
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Celular</label>
                                  <input type="text" className="form-control input-cellphone" defaultValue="(99) 99999-9999" required name="user_cellphone" />
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button data-dismiss="modal" className="btn btn-default" type="button">Cancelar</button>
                              <button className="btn btn-mint">Confirmar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div className="modal fade" id="modalNewUser" role="dialog" tabIndex="-1" aria-labelledby="modalNewUser" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><i className="pci-cross pci-circle"></i></button>
                <h4 className="modal-title">Novo Usuário</h4>
              </div>
              <div className="modal-body">
                <form className="form--personalized row">
                  <div className="col-md-6 form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Nome" required name="user_name" maxLength="80" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>CPF</label>
                    <input type="text" className="form-control input-cpf" placeholder="CPF" required name="user_cpf" />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" placeholder="E-mail" required name="user_email" maxLength="60" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Matrícula</label>
                    <input type="text" className="form-control" placeholder="Matrícula" required name="user_matricula" maxLength="25" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Status</label>
                    <select name="User_status" className="selects-personalized">
                      <option value="">Status</option>
                      <option value="Ativo">Ativo</option>
                      <option value="Inativo">Inativo</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Telefone</label>
                    <input type="text" className="form-control input-phone" placeholder="Telefone" required name="user_phone" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Celular</label>
                    <input type="text" className="form-control input-cellphone" placeholder="Celular" required name="user_cellphone" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button data-dismiss="modal" className="btn btn-default" type="button">Cancelar</button>
                <button className="btn btn-mint">Confirmar</button>
              </div>
            </div>
          </div>
        </div>
      </Base>
    )
  }

}

export default ControlUsers