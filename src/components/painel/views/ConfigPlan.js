import React from 'react'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import Base from '../Base'
import $ from 'jquery'
import 'jquery-mask-plugin/dist/jquery.mask.min.js'
import 'select2/dist/css/select2.min.css'
import 'select2/dist/js/select2.min.js'

class ConfigPlan extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: true,
      accepted: [],
      rejected: []
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
        <div className="view-internal plan-view">
          <div id="page-title">
            <h1 className="page-header text-overflow">Meu Plano</h1>
          </div>
          <ol className="breadcrumb">
            <li><Link to="/painel">Home</Link></li>
            <li><a href="#!">Configurações</a></li>
            <li className="active">Meu Plano</li>
          </ol>
          <section id="page-content">
            <div className="pad-btm">
              <form className="form-inline form--personalized">
                <div className="input-group form-group">
                  <span className="input-group-addon"><i className="demo-pli-magnifi-glass"></i></span>
                  <input type="text" className="form-control" placeholder="Pesquisar mês" />
                </div> &nbsp;&nbsp;
                <div className="input-group form-group">
                  <select name="searchByStatus" className="selects-personalized">
                    <option value="">Situação</option>
                    <option value="1">Pendentes</option>
                    <option value="2">Pagos</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="table-responsive">
              <table id="tableReservas" className="table table-bordered">
                <thead>
                  <tr>
                    <th>Mês / Ano</th>
                    <th className="text-center">Data de vencimento</th>
                    <th className="text-center">Valor</th>
                    <th className="min-tablet visible-lg text-center">Situação de Pgto.</th>
                    <th className="min-tablet">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-dark">
                    <td><strong className="text-mint">Fevereiro / 2018</strong></td>
                    <td className="text-center">15/02/2018</td>
                    <td className="text-center">R$ 100,00</td>
                    <td className="text-center visible-lg"><strong className="text-warning text-uppercase">Pendente</strong></td>
                    <td className="text-center">
                      <a data-target="#modalEditPlan_2" data-toggle="modal" className="btn btn-warning">Pagar</a>
                      <div className="modal fade" id="modalEditPlan_2" role="dialog" tabIndex="-1" aria-labelledby="modalEditPlan_2" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal"><i className="pci-cross pci-circle"></i></button>
                              <h4 className="modal-title">Pagamento do mês - Fevereiro / 2018</h4>
                            </div>
                            <div className="modal-body">
                              <div className="pad-btm">
                                <h4>Caso já tenha efetuado o pagamento, envie o comprovante abaixo:</h4>
                                  <form action="#" method="post" className="clearfix">
                                    <section className="dropzone mar-btm">
                                      <Dropzone
                                        className="dropzone-wrapper"
                                        accept="image/jpeg, image/png"
                                        onDrop={(accepted) => { this.setState({ accepted }); }}
                                      >
                                        <div className="dz-default dz-message">
                                            <div className="dz-icon">
                                              <i className="demo-pli-upload-to-cloud icon-5x"></i>
                                            </div>
                                            <div>
                                              <span className="dz-text">Arraste seus arquivos para essa área</span>
                                              <p className="text-sm text-muted">ou clique para escolher manualmente (apenas jpg e png)</p>
                                            </div>
                                        </div>
                                      </Dropzone>
                                      <aside className="dz-default dz-message">
                                        <ul className="list-group">
                                          {
                                            this.state.accepted.map(f => <li className="list-group-item" key={f.name}>{f.name} - {f.size} bytes</li>)
                                          }
                                        </ul>
                                      </aside>
                                    </section>
                                    <div className="pull-right"><button type="submit" className="btn btn-mint">Confirmar envio</button></div>
                                  </form>
                              </div>
                              <div className="detail-bank" id="bank_1">
                                <h4>Banco do Brasil</h4>
                                <p>Copie e salve esse dados para depósito</p>
                                <p><strong>Agência:</strong> 999-9 &nbsp;
                                <strong>Conta:</strong> 99999-9</p>
                                <p><strong>Tipo de conta:</strong> Conta Corrente</p>
                                <p><strong>Obs:</strong> Para facilitar, faça transferência TED ou DOC usando o CPF cadastrado da conta.</p>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button data-dismiss="modal" className="btn btn-default" type="button">Fechar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-dark">
                    <td><strong className="text-mint">Janeiro / 2018</strong></td>
                    <td className="text-center">15/01/2018</td>
                    <td className="text-center">R$ 100,00</td>
                    <td className="text-center visible-lg"><strong className="text-warning text-uppercase">Aprovado</strong></td>
                    <td className="text-center">
                      <a data-target="#modalEditPlan_1" data-toggle="modal" className="btn btn-info">Ver comprovante</a>
                      <div className="modal fade" id="modalEditPlan_1" role="dialog" tabIndex="-1" aria-labelledby="modalEditPlan_1" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal"><i className="pci-cross pci-circle"></i></button>
                              <h4 className="modal-title">Pagamento do mês - Janeiro / 2018</h4>
                            </div>
                            <div className="modal-body">
                              <p>imagem de comprovante aqui</p>
                            </div>
                            <div className="modal-footer">
                              <button data-dismiss="modal" className="btn btn-default" type="button">Fechar</button>
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

export default ConfigPlan