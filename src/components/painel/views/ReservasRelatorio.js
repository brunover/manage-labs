import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../Base'
import $ from 'jquery'
import 'jquery-mask-plugin/dist/jquery.mask.min.js'
import 'select2/dist/css/select2.min.css'
import 'select2/dist/js/select2.min.js'

class ReservasPendents extends React.Component {

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
            <h1 className="page-header text-overflow">Relatório das Reservas</h1>
          </div>
          <ol className="breadcrumb">
            <li><Link to="/painel">Home</Link></li>
            <li><a href="#!">Reservas</a></li>
            <li className="active">Relatório</li>
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
                    <option value="">Por Situação</option>
                    <option value="1">Aprovadas</option>
                    <option value="2">Reprovadas</option>
                    <option value="3">Canceladas</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="table-responsive">
              <table id="tableReservas" className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Laboratório</th>
                    <th className="text-center">Solicitante</th>
                    <th className="text-center">Data solicitação</th>
                    <th className="text-center">Data reserva</th>
                    <th className="min-tablet text-center">Hora Início</th>
                    <th className="min-tablet text-center">Hora Final</th>
                    <th className="min-tablet visible-lg text-center">Curso</th>
                    <th className="min-tablet text-center">Situação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-dark">
                    <td><strong className="text-mint">Laboratório 1-B</strong></td>
                    <td className="text-center">João Silva Souza</td>
                    <td className="text-center">02/01/2018</td>
                    <td className="text-center">15/02/2018</td>
                    <td className="text-center">13:00h</td>
                    <td className="text-center">15:00h</td>
                    <td className="text-center visible-lg">Química</td>
                    <td className="text-center">
                      <strong className="text-success text-uppercase">Aprovada</strong>
                    </td>
                  </tr>
                  <tr className="text-dark">
                    <td><strong className="text-mint">Laboratório 1-B</strong></td>
                    <td className="text-center">João Silva Souza</td>
                    <td className="text-center">02/01/2018</td>
                    <td className="text-center">15/02/2018</td>
                    <td className="text-center">13:00h</td>
                    <td className="text-center">15:00h</td>
                    <td className="text-center visible-lg">Química</td>
                    <td className="text-center">
                      <strong className="text-warning text-uppercase">Cancelada</strong>
                    </td>
                  </tr>
                  <tr className="text-dark">
                    <td><strong className="text-mint">Laboratório 1-B</strong></td>
                    <td className="text-center">João Silva Souza</td>
                    <td className="text-center">02/01/2018</td>
                    <td className="text-center">15/02/2018</td>
                    <td className="text-center">13:00h</td>
                    <td className="text-center">15:00h</td>
                    <td className="text-center visible-lg">Química</td>
                    <td className="text-center">
                      <strong className="text-danger text-uppercase">Reprovada</strong>
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

export default ReservasPendents