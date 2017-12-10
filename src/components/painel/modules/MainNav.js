import React from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

class MainNav extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      auth: false,
    }
  }

	componentDidMount() {

		$('.mainnav--item').find('a.active').each(function(){
			$(this).parents('.mainnav--item').addClass('active-link active-sub');
			$(this).parents('.mainnav--item').find('>a').addClass('active');
			$(this).parents('.mainnav--item').find('.mainnav-submenu').show();
		})

		$('.mainnav--item-sub >a').on('click', function(e){
			e.preventDefault();
			$(this).parent().toggleClass('active');
			$(this).parents('.mainnav--item').find('.mainnav-submenu').slideToggle();
		})

		$('.mainnav-toggle').on('click', function(e){
			$('#mainnav-container').toggleClass('active');
		})
  }


	render() {

		return (
			<nav id="mainnav-container">
				<div id="mainnav">
					<div id="mainnav-menu-wrap">
						<div className="nano">
							<div className="nano-content">
								<div className="mainnav-logo-top">
									<a href="/index">
										{/* <img src="img/logo.png" alt="Reserva Lab" /> */}
									</a>
								</div>
								<div id="mainnav-profile" className="mainnav-profile">
									<div className="profile-wrap">
										<a href="#profile-nav" className="box-block" data-toggle="collapse" aria-expanded="false">
											<span className="pull-right dropdown-toggle">
													<i className="dropdown-caret"></i>
											</span>
											<p className="mnp-name">Fulano Silva</p>
											<span className="mnp-desc">fulano@email.com</span>
										</a>
									</div>
									<nav id="profile-nav" className="collapse list-group bg-trans">
										<a href="/minha-conta" className="list-group-item">
											<i className="demo-pli-male icon-lg icon-fw"></i> Minha Conta
										</a>
										<a href="/ajuda" className="list-group-item">
											<i className="demo-pli-information icon-lg icon-fw"></i> Ajuda
										</a>
										<a href="/login" className="list-group-item">
											<i className="demo-pli-unlock icon-lg icon-fw"></i> Logout
										</a>
									</nav>
								</div>
								<ul className="mainnav-new">
									<li className="list-header">Menu</li>

									<li className="mainnav--item">
										<NavLink activeClassName='active' to='/painel'>
											<i className="demo-psi-home"></i>
											<span className="menu-title">
												<strong>Início</strong>
											</span>
										</NavLink>
									</li>

									<li className="mainnav--item mainnav--item-sub">
										<a href="#!">
											<i className="demo-psi-receipt-4"></i>
												<span className="menu-title">
												<strong>Reservas</strong>
											</span>
											<i className="arrow"></i>
										</a>
										<ul className="mainnav-submenu">
											<li><NavLink exact activeClassName='active' to='/reservas'>Minhas reservas</NavLink></li>
											<li><NavLink activeClassName='active' to='/reservas/pendentes'>Pendentes</NavLink></li>
											<li><NavLink activeClassName='active' to='/reservas/adicionar'>Nova Reserva</NavLink></li>
											<li><NavLink activeClassName='active' to='/reservas/relatorio'>Relatório</NavLink></li>
										</ul>
									</li>

									<li className="mainnav--item mainnav--item-sub">
										<a href="#!">
											<i className="demo-psi-file-html"></i>
												<span className="menu-title">
												<strong>Cadastros</strong>
											</span>
											<i className="arrow"></i>
										</a>
										<ul className="mainnav-submenu">
											<li><NavLink activeClassName='active' to='/cursos'>Cursos</NavLink></li>
											<li><NavLink activeClassName='active' to='/laboratorios'>Laboratórios</NavLink></li>
											<li><NavLink activeClassName='active' to='/requisitos'>Requisitos</NavLink></li>
											<li><NavLink activeClassName='active' to='/turnos'>Turnos</NavLink></li>
										</ul>
									</li>

									<li className="mainnav--item mainnav--item-sub">
										<a href="#!">
											<i className="demo-pli-male"></i>
												<span className="menu-title">
												<strong>Controle</strong>
											</span>
											<i className="arrow"></i>
										</a>
										<ul className="mainnav-submenu">
											<li><NavLink exact activeClassName='active' to='/usuarios'>Usuários</NavLink></li>
											<li><NavLink exact activeClassName='active' to='/acessos'>Acessos</NavLink></li>
											<li><NavLink exact activeClassName='active' to='/funcoes'>Funções</NavLink></li>
										</ul>
									</li>

									<li className="mainnav--item mainnav--item-sub">
										<a href="#!">
											<i className="demo-psi-gear-2"></i>
												<span className="menu-title">
												<strong>Configurações</strong>
											</span>
											<i className="arrow"></i>
										</a>
										<ul className="mainnav-submenu">
											<li><NavLink activeClassName='active' to='/minha-conta'>Minha Conta</NavLink></li>
											<li><NavLink activeClassName='active' to='/meu-plano'>Meu Plano</NavLink></li>
										</ul>
									</li>

								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default MainNav