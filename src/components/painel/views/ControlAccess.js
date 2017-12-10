import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../Base'
import $ from 'jquery'
import 'jquery-mask-plugin/dist/jquery.mask.min.js'
import 'select2/dist/css/select2.min.css'
import 'select2/dist/js/select2.min.js'

class ControlAccess extends React.Component {

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
            <h1 className="page-header text-overflow">Controle de Acessos</h1>
          </div>
          <ol className="breadcrumb">
            <li><Link to="/painel">Home</Link></li>
            <li><a href="#!">Controle</a></li>
            <li className="active">Acessos</li>
          </ol>
          <section id="page-content">
            <div className="pad-btm">
              <form className="form-inline form--personalized">
                <div className="input-group form-group">
                  <span className="input-group-addon"><i className="demo-pli-magnifi-glass"></i></span>
                  <input type="text" className="form-control" placeholder="Pesquisar usuários" />
                </div>
              </form>
            </div>
            <h3>Lista de Usuários</h3>
            <div className="table-responsive">
              <table id="tableReservas" className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Usuário</th>
                    <th className="text-center">E-mail</th>
                    <th className="text-center">Matrícula</th>
                    <th className="text-center">Status</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-dark">
                    <td>Fulano de Silva Souza</td>
                    <td className="text-center">fulanosilva@email.com</td>
                    <td className="text-center">7492028389</td>
                    <td className="text-center"><strong className="text-warning text-uppercase">Ativo</strong></td>
                    <td className="text-center">
                      <a data-target="#modalEditUser_1" data-toggle="modal" className="btn btn-info">Editar acessos</a>
                      <div className="modal fade" id="modalEditUser_1" role="dialog" tabIndex="-1" aria-labelledby="modalEditUser_1" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal"><i className="pci-cross pci-circle"></i></button>
                              <h4 className="modal-title">Editar Acesso de usuário</h4>
                            </div>
                            <div className="modal-body">
                              <form className="form--personalized row">
                                <div className="col-md-6 form-group">
                                  <label>Senha</label>
                                  <input type="password" className="form-control" required name="user_password" maxLength="12" />
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Confirmar Senha</label>
                                  <input type="password" className="form-control" required name="user_confirm_password" maxLength="12" />
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Função</label>
                                  <select name="user_function" defaultValue="Coordenador" className="selects-personalized">
                                    <option value="">Função</option>
                                    <option value="Coordenador">Coordenador</option>
                                    <option value="Gerente">Gerente</option>
                                  </select>
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Nível de Acesso</label>
                                  <select name="user_nivel_access" defaultValue="Todos" className="selects-personalized">
                                    <option value="">Nível de Acesso</option>
                                    <option value="Todos">Todos</option>
                                    <option value="Acesso 1">Acesso 1</option>
                                  </select>
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Empresa</label>
                                  <select name="user_company" className="selects-personalized">
                                    <option value="">Empresa</option>
                                    <option value="Empresa 1">Empresa 1</option>
                                    <option value="Empresa 2">Emrpesa 2</option>
                                  </select>
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Status</label>
                                  <select name="user_status" defaultValue="Ativo" className="selects-personalized">
                                    <option value="">Status</option>
                                    <option value="Ativo">Ativo</option>
                                    <option value="Inativo">Inativo</option>
                                  </select>
                                </div>
                                <div className="col-md-12">
                                  <h4><strong>Permissões</strong></h4>
                                  <label><input type="checkbox" name="permission_check" /> Inclusão</label> &nbsp;&nbsp;
                                  <label><input type="checkbox" name="permission_check" /> Alteração</label> &nbsp;&nbsp;
                                  <label><input type="checkbox" name="permission_check" /> Aprovação</label> &nbsp;&nbsp;
                                  <label><input type="checkbox" name="permission_check" /> Reprovação</label> &nbsp;&nbsp;
                                  <label><input type="checkbox" name="permission_check" /> Consulta</label> &nbsp;&nbsp;
                                  <label><input type="checkbox" name="permission_check" /> Reserva</label>
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
      </Base>
    )
  }

}

export default ControlAccess