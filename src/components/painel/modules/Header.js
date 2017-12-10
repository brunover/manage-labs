import React from 'react'

// component style
import '../styles/Header.css'

const Header = () => {

	let progressStyle = {
		width: "70%"
	}

	return (
		<header id="navbar">
			<div id="navbar-container" className="boxed">
				<div className="navbar-header">
					<a href="index.html" className="navbar-brand">
						<div className="brand-title text-center">
							<span className="brand-text">Manage Labs</span>
						</div>
					</a>
				</div>
				<div className="navbar-content clearfix">
					<ul className="nav navbar-top-links pull-left">
						<li className="tgl-menu-btn">
							<a className="mainnav-toggle" href="#!">
								<i className="demo-pli-view-list"></i>
							</a>
						</li>
					</ul>
					<ul className="nav navbar-top-links pull-right">
						<li id="dropdown-user" className="dropdown">
							<a href="#!" data-toggle="dropdown" className="dropdown-toggle text-right">
								<span className="pull-right">
									<i className="demo-pli-male ic-user"></i>
								</span>
								<div className="username hidden-xs">Fulano Silva</div>
							</a>
							<div className="dropdown-menu dropdown-menu-md dropdown-menu-right panel-default">
								<div className="pad-all bord-btm">
									<p className="text-main mar-btm">Seu plano expira em <span className="text-bold">22 dias</span></p>
									<div className="progress progress-sm">
										<div className="progress-bar" style={progressStyle}>
											<span className="sr-only">70%</span>
										</div>
									</div>
								</div>
								<ul className="head-list">
									<li>
										<a href="/meu-plano">
											<i className="demo-pli-computer-secure icon-lg icon-fw"></i> Meu Plano
										</a>
									</li>
									<li>
										<a href="/minha-conta">
											<i className="demo-pli-male icon-lg icon-fw"></i> Minha conta
										</a>
									</li>
									<li>
										<a href="#!">
											<span className="badge badge-danger pull-right">9</span>
											<i className="demo-pli-mail icon-lg icon-fw"></i> Notificações
										</a>
									</li>
									<li>
										<a href="/ajuda">
											<i className="demo-pli-information icon-lg icon-fw"></i> Ajuda
										</a>
									</li>
								</ul>
								<div className="pad-all text-right">
									<a href="/login" className="btn btn-primary">
										<i className="demo-pli-unlock"></i> Logout
									</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header