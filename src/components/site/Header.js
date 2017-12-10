import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
    <header className="site-header">
      <h1 className="site-logo"><NavLink activeClassName="active" exact to="/">Reserva Lab</NavLink></h1>
      <nav className="site-nav">
        <NavLink activeClassName="active" to="/sobre">Sobre</NavLink>
        <NavLink activeClassName="active" to="/cadastro">Cadastrar</NavLink>
        <NavLink activeClassName="active" to="/contato">Contato</NavLink>
      </nav>
    </header>
	)
}

export default Header