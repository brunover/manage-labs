import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../Base'
import $ from 'jquery'
import 'select2/dist/css/select2.min.css'
import 'select2/dist/js/select2.min.js'

class RegisterLabs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: true,
    }
  }

  componentDidMount() {
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
            <h1 className="page-header text-overflow">Laboratórios cadastrados</h1>
          </div>
          <ol className="breadcrumb">
            <li><Link to="/painel">Home</Link></li>
            <li><a href="#!">Cadastros</a></li>
            <li className="active">Laboratórios</li>
          </ol>
          <section id="page-content">
            <div className="pad-btm">
              <form className="form-inline form--personalized">
                <div className="input-group form-group">
                  <span className="input-group-addon"><i className="demo-pli-magnifi-glass"></i></span>
                  <input type="text" className="form-control" placeholder="Pesquisar laboratórios" />
                </div> &nbsp;&nbsp;
                <div className="input-group form-group">
                  <select name="searchByStatus" className="selects-personalized">
                    <option value="">Filtrar por Status</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                </div> &nbsp;&nbsp;
                <a data-target="#modalNewLab" data-toggle="modal" className="btn btn-info">Novo Laboratório</a>
              </form>
            </div>
            <div className="table-responsive">
              <table id="tableReservas" className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th className="text-center">Status</th>
                    <th className="">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-dark">
                    <td>Laboratórios B-12</td>
                    <td className="text-center"><strong className="text-warning text-uppercase">Ativo</strong></td>
                    <td className="text-center">
                      <a href="/laboratorios/editar" className="btn btn-info">Editar</a> &nbsp;
                      <a data-event="deleteCourse" className="btn btn-danger">Deletar</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div className="modal fade" id="modalNewLab" role="dialog" tabIndex="-1" aria-labelledby="modalNewLab" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><i className="pci-cross pci-circle"></i></button>
                <h4 className="modal-title">Novo Laboratório</h4>
              </div>
              <div className="modal-body">
                <form className="form--personalized row">
                  <div className="col-md-6 form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Nome" required name="lab_name" maxLength="50" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Status</label>
                    <select name="course_status" className="selects-personalized">
                      <option value="">Status</option>
                      <option value="Ativo">Ativo</option>
                      <option value="Inativo">Inativo</option>
                    </select>
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

export default RegisterLabs