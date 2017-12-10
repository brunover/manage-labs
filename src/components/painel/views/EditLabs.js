import React from 'react'
import Base from '../Base'
import { Draggable, Droppable } from 'react-drag-and-drop'
import $ from 'jquery'
import 'select2/dist/css/select2.min.css'
import 'select2/dist/js/select2.min.js'

class EditLabs extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      auth: true,
			droppedList: ["Internet","Janelas Altas"],
    }

		this.dropped = this.state.droppedList
  }

  componentDidMount() {
    $(".selects-personalized").select2({
      width: '100%',
      minimumResultsForSearch: -1
    });
  }

	onDrop(data) {
		this.dropped.push(data.requirements)
		this.setState({ droppedList: this.dropped  })
		console.log(this.dropped)
	}

  render() {
    return (
      <Base>
        <div className="view-internal home-view">
          <div id="page-title">
            <h1 className="page-header text-overflow">Editar <strong className="text-mint">Laboratório B-12</strong></h1>
          </div>
          <section id="page-content">
            <form className="form--personalized">
              <div className="row">
                <div className="col-lg-4 col-sm-6 form-group">
                  <label>Nome</label>
                  <input className="form-control" placeholder="Nome" defaultValue="Laboratório B-12" required name="curso_name" maxLength="50" />
                </div>
                <div className="col-lg-2 col-sm-6 form-group">
                  <label>Status</label>
                  <select name="lab_status" className="selects-personalized">
                    <option value="">Status</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <h3 className="panel-title">Vincular Requisitos</h3>
                </div>
                <div className="panel-body">
					        <div className="row nest-lists-admin">
									<div className="col-sm-5">
										<h4>Requisitos inseridos</h4>
										<div className="bord-all pad-all mar-btm">
												<div className="dd">
													<Droppable
															types={['requirements']} // <= allowed drop types
															onDrop={this.onDrop.bind(this)}>
															<ol className="dd-list">
																{this.state.droppedList.map((item,index) => (
																	<li key={item+index}><div className="dd-handle dd-bg dd-anim">{item}</div></li>
																))}
															</ol>
													</Droppable>
												</div>
											</div>
										</div>
										<div className="col-sm-2">
											<div className="row text-center mar-top pad-all">
												<div className="col-xs-12"><div className="pad-top"><i className="demo-psi-arrow-left icon-2x"></i></div></div>
												{/* <div className="col-xs-6"><div className="pad-top"><i className="demo-psi-arrow-right icon-2x"></i></div></div> */}
											</div>
										</div>
										<div className="col-sm-5">
											<h4>Arraste para inserir novos requisitos</h4>
											<div className="bord-all pad-all mar-btm">
												<div className="dd">
													<ol className="dd-list">
														<Draggable type="requirements" data="mac" className="dd-item"><li><div className="dd-handle dd-bg dd-anim">MAC</div></li></Draggable>
														<Draggable type="requirements" data="linux" className="dd-item"><li><div className="dd-handle dd-bg dd-anim">Linux</div></li></Draggable>
														<Draggable type="requirements" data="Tubos de ensaio" className="dd-item"><li><div className="dd-handle dd-bg dd-anim">Tubos de ensaio</div></li></Draggable>
														<Draggable type="requirements" data="Computadores" className="dd-item"><li><div className="dd-handle dd-bg dd-anim">Computadores</div></li></Draggable>
														<Draggable type="requirements" data="Wifi" className="dd-item"><li><div className="dd-handle dd-bg dd-anim">Wifi</div></li></Draggable>
														<Draggable type="requirements" data="Ventilação" className="dd-item"><li><div className="dd-handle dd-bg dd-anim">Ventilação</div></li></Draggable>
													</ol>
												</div>
											</div>
					          </div>
					        </div>
					      </div>
								<div className="panel-footer">
									<button className="btn btn-mint">Salvar alterações</button>
								</div>
					    </div>{/*panel*/}
            </form>
          </section>
        </div>
      </Base>
    )
  }

}

export default EditLabs