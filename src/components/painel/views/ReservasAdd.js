import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
// import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'
// import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
import 'fullcalendar/dist/fullcalendar.min.css'
import 'fullcalendar/dist/fullcalendar.min.js'
import 'fullcalendar/dist/locale/pt-br.js'
import 'jquery-mask-plugin/dist/jquery.mask.min.js'
import 'select2/dist/css/select2.min.css'
import 'select2/dist/js/select2.min.js'
import Base from '../Base'

class ReservasAdd extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: true,
    }
  }

  componentDidMount() {
    // $.fn.datepicker.dates['pt-BR'] = {
    //   days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    //   daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    //   daysMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    //   months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    //   monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    //   today: "Hoje",
    //   clear: "Limpar",
    //   format: "mm/dd/yyyy",
    //   titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
    //   weekStart: 0
    // };

    // $('#reservation-calendar').datepicker({
    //   format: "dd/mm/yyyy",
    //   todayBtn: "linked",
    //   autoclose: false,
    //   language: 'pt-BR',
    //   startDate: new Date(),
    //   todayHighlight: true
    // });

    $('.input-hour').mask('00:00');

    $(".selects-personalized").select2({
      width: '100%',
      minimumResultsForSearch: -1
    });

    $('#calendarAvailableLabs').fullCalendar({
      header: {
        left: '',
        center: 'title',
        // right: 'month,agendaWeek,agendaDay'
      },
      locale: 'pt-br',
      editable: false,
      droppable: false, // this allows things to be dropped onto the calendar
      // drop: function() {
      //   // is the "remove after drop" checkbox checked?
      //   if ($('#drop-remove').is(':checked')) {
      //     // if so, remove the element from the "Draggable Events" list
      //     $(this).remove();
      //   }
      // },
      defaultDate: new Date(),
      eventLimit: true, // allow "more" link when too many events
      dayClick: function(date, jsEvent, view) {

        // alert('Clicked on: ' + date.format());

        // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

        // alert('Current view: ' + view.name);

        // change the day's background color just for fun
        $(this).css('backgroundColor', 'rgb(27, 58, 84)');

      },
      events: [
        {
          title: 'Lab B-12',
          start: '2017-12-05T10:30:00',
          className: 'purple'
        },
        {
          title: 'Lab Química II',
          start: '2017-12-15T10:30:00',
          className: 'mint'
        },
        {
          title: 'Lab Física III',
          start: '2017-12-15T10:30:00',
          className: 'warning'
        },
        {
          title: 'Lab B-31',
          start: '2017-12-20T10:30:00',
          className: 'danger'
        },
        {
          title: 'Lab Física III',
          start: '2017-12-01T10:30:00',
          className: 'warning'
        },
        {
          id: 999,
          title: 'Lab Biologia A',
          start: '2017-12-09T14:00:00'
        },
        {
          id: 999,
          title: 'Lab Biologia A',
          start: '2017-12-16T14:00:00',
          className: 'success'
        },
        {
          title: 'Lab Física II',
          start: '2017-12-11T10:30:00',
          className: 'dark'
        },
        {
          title: 'Lab B-31',
          start: '2017-12-12T10:00:00',
        },
        {
          title: 'Lab Biologia',
          start: '2017-12-12T12:00:00',
          className: 'pink'
        },
        {
          title: 'Lab VII',
          start: '2017-12-12T14:30:00'
        },
        {
          title: 'Lab Química II',
          start: '2017-12-13T07:00:00'
        },
        {
          title: 'Lab VIII',
          // url: 'http://google.com/',
          start: '2017-12-28T10:30:00'
        }
      ]
    });
  }

  render() {
    return (
      <Base>
        <div className="view-internal home-view">
          <div id="page-title">
            <h1 className="page-header">Nova Reserva</h1>
          </div>
          <ol className="breadcrumb">
            <li><Link to="/painel">Home</Link></li>
            <li><a href="#!">Reservas</a></li>
            <li className="active">Nova Reserva</li>
          </ol>
          <section id="page-content">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="panel">
                  <div className="panel-heading">
                    <h3 className="panel-title">Escolha uma data</h3>
                  </div>
                  <div className="panel-body">
                    <div className="section-scroll-horiz">
                      <div id="calendarAvailableLabs" className="calendar-labs section-scroll-horiz-item"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <form className="form--personalized row">
                  <div className="col-md-12 form-group">
                    <label>Laboratório</label>
                    <select name="reserva_courses" required defaultValue="Lab Biologia" className="selects-personalized">
                      <option value="">Selecione</option>
                      <option value="2">Lab B-12</option>
                      <option value="3">Lab VIII</option>
                      <option value="4">Lab Biologia</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Turno</label>
                    <select name="reserva_courses" required defaultValue="Manhã" className="selects-personalized">
                      <option value="">Selecione o turno</option>
                      <option value="2">Manhã</option>
                      <option value="3">Tarde</option>
                      <option value="4">Noite</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Curso</label>
                    <select name="reserva_courses" required defaultValue="Biologia" className="selects-personalized">
                      <option value="">Selecione o Curso</option>
                      <option value="2">Física</option>
                      <option value="3">Biologia</option>
                      <option value="4">Administração</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Hora Inicial</label>
                    <input type="text" className="form-control input-hour" placeholder="Hora Inicial" required name="reserva_hourStart" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Hora Final</label>
                    <input type="text" className="form-control input-hour" placeholder="Hora Final" required name="reserva_hourEnd" />
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Requisitos</label>
                    <div className="list-group">
                      <p className="list-group-item list-item-sm">- Dapibus ac facilisis in</p>
                      <p className="list-group-item list-item-sm">- Morbi leo risus</p>
                      <p className="list-group-item list-item-sm">- Porta ac consectetur ac</p>
                      <p className="list-group-item list-item-sm">- Vestibulum at eros</p>
                      <p className="list-group-item list-item-sm">- Dapibus ac facilisis in</p>
                      <p className="list-group-item list-item-sm">- Porta ac consectetur ac</p>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Observações</label>
                    <textarea className="form-control" placeholder="Observações" defaultValue="dfsdf sdf sdf ssdf sdfsdf" required name="reserva_info" rows="7" />
                  </div>
                  <div className="col-md-12 button-group">
                    <button className="btn btn-mint">Confirmar</button>
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

export default ReservasAdd