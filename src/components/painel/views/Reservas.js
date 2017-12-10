import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../Base'
import $ from 'jquery'
import 'jquery-mask-plugin/dist/jquery.mask.min.js'
import 'select2/dist/css/select2.min.css'
import 'select2/dist/js/select2.min.js'

class Reservas extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: true,
    }
  }

  componentDidMount() {
    $('.input-date').mask('00/00/0000');

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
            <h1 className="page-header text-overflow">Minhas Reservas</h1>
          </div>
          <ol className="breadcrumb">
            <li><Link to="/painel">Home</Link></li>
            <li><a href="#!">Reservas</a></li>
            <li className="active">Lista de Reservas</li>
          </ol>
          <section id="page-content">
            <div className="table-responsive">
              <table id="tableReservas" className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Laboratório</th>
                    <th className="text-center">Data</th>
                    <th className="min-tablet visible-lg text-center">Turno</th>
                    <th className="min-tablet text-center">Hora Início</th>
                    <th className="min-tablet text-center">Hora Final</th>
                    <th className="min-tablet visible-lg text-center">Curso</th>
                    <th className="min-tablet text-center">Status</th>
                    <th className="min-tablet">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-dark">
                    <td><strong className="text-mint">Laboratório 1-B</strong></td>
                    <td className="text-center">15/02/2018</td>
                    <td className="text-center visible-lg">Tarde</td>
                    <td className="text-center">13:00h</td>
                    <td className="text-center">15:00h</td>
                    <td className="text-center visible-lg">Química</td>
                    <td className="text-center"><strong className="text-warning text-uppercase">Pendente</strong></td>
                    <td className="text-center">
                      <a data-target="#modalEditReserva_1" data-toggle="modal" className="btn btn-info">Editar</a>
                      <div className="modal fade" id="modalEditReserva_1" role="dialog" tabIndex="-1" aria-labelledby="modalEditReserva_1" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal"><i className="pci-cross pci-circle"></i></button>
                              <h4 className="modal-title">Alterar reserva - <strong className="text-mint">ID: KM9887ASKAD</strong></h4>
                            </div>
                            <div className="modal-body">
                              <form className="form--personalized row">
                                <div className="col-md-6 form-group">
                                  <label>Laboratório</label>
                                  <select name="reserva_periods" required defaultValue="Laboratório 1-B" className="selects-personalized">
                                    <option value="">Selecione o Laboratório</option>
                                    <option value="2">Laboratório 1-B</option>
                                    <option value="3">Laboratório 2-B</option>
                                    <option value="3">Laboratório 2-B</option>
                                    <option value="3">Laboratório 2-B</option>
                                  </select>
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Data planejada</label>
                                  <input type="text" className="form-control input-date" placeholder="Data" required name="reserva_date" defaultValue="15/02/2018" />
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Curso</label>
                                  <select name="reserva_courses" required defaultValue="Química" className="selects-personalized">
                                    <option value="">Selecione o Curso</option>
                                    <option value="2">Física</option>
                                    <option value="3">Biologia</option>
                                    <option value="4">Administração</option>
                                  </select>
                                </div>
                                <div className="col-md-6 form-group">
                                  <label>Turno</label>
                                  <select name="reserva_periods" required defaultValue="Tarde" className="selects-personalized">
                                    <option value="">Selecione o Turno</option>
                                    <option value="2">Manhã</option>
                                    <option value="3">Noite</option>
                                  </select>
                                </div>
                                <div className="col-md-12 form-group">
                                  <label>Observações</label>
                                  <textarea className="form-control" placeholder="Observações" defaultValue="dfsdf sdf sdf ssdf sdfsdf" required name="reserva_info" rows="5" />
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

export default Reservas