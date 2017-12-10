import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../Base'

class ReservasPendents extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: true,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <Base>
        <div className="view-internal reservas-view">
          <div id="page-title">
            <h1 className="page-header text-overflow">Reservas Pendentes</h1>
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
                    <th className="text-center">Solicitante</th>
                    <th className="text-center">Data solicitação</th>
                    <th className="text-center">Data reserva</th>
                    <th className="min-tablet text-center">Hora Início</th>
                    <th className="min-tablet text-center">Hora Final</th>
                    <th className="min-tablet visible-lg text-center">Curso</th>
                    <th className="min-tablet">&nbsp;</th>
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
                      <a data-approved="true" className="btn btn-danger">Reprovar</a> &nbsp;
                      <a data-approved="false" className="btn btn-success">Aprovar</a>
                    </td>
                  </tr>
                  <tr className="text-dark">
                    <td><strong className="text-mint">Laboratório 2-B</strong></td>
                    <td className="text-center">João Silva Souza</td>
                    <td className="text-center">02/01/2018</td>
                    <td className="text-center">15/02/2018</td>
                    <td className="text-center">13:00h</td>
                    <td className="text-center">15:00h</td>
                    <td className="text-center visible-lg">Química</td>
                    <td className="text-center">
                      <a data-approved="true" className="btn btn-danger">Reprovar</a> &nbsp;
                      <a data-approved="false" className="btn btn-success">Aprovar</a>
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