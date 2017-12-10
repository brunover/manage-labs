import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// from site non-users
import Login from './components/site/Login'
import Register from './components/site/Register'
import ForgetPass from './components/site/ForgetPass'
import ResetPass from './components/site/ResetPass'
import About from './components/site/About'
import Contact from './components/site/Contact'

// from painel - logged users
import Home from './components/painel/views/Home'
import Reservas from './components/painel/views/Reservas'
import ReservasAdd from './components/painel/views/ReservasAdd'
import ReservasPendents from './components/painel/views/ReservasPendents'
import ReservasRelatorio from './components/painel/views/ReservasRelatorio'
import RegisterCourses from './components/painel/views/RegisterCourses'
import RegisterLabs from './components/painel/views/RegisterLabs'
import EditLabs from './components/painel/views/EditLabs'
import RegisterRequires from './components/painel/views/RegisterRequires'
import RegisterPeriod from './components/painel/views/RegisterPeriod'
import ControlUsers from './components/painel/views/ControlUsers'
import ControlAccess from './components/painel/views/ControlAccess'
import ControlFunctions from './components/painel/views/ControlFunctions'
import ConfigAccount from './components/painel/views/ConfigAccount'
import ConfigPlan from './components/painel/views/ConfigPlan'

const Page = (props) => (
  <CSSTransition
    {...props}
    classNames="fade"
    timeout={400}
  />
)

const MainApp = (props) => {
  const locationKey = props.location.pathname
  return (
    <TransitionGroup>
      <Page key={locationKey}>
        <Switch location={props.location}>
          {/* Views from site */}
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route path="/sobre" component={About} />
          <Route path="/cadastro" component={Register} />
          <Route path="/contato" component={Contact} />
          <Route path="/esqueci-senha" component={ForgetPass} />
          <Route path="/resetar-senha" component={ResetPass} />
          {/* Views from painel */}
          <Route exact path="/painel" component={Home} />
          <Route exact path="/ajuda" component={Home} />
          <Route exact path="/reservas" component={Reservas} />
          <Route exact path="/reservas/adicionar" component={ReservasAdd} />
          <Route exact path="/reservas/pendentes" component={ReservasPendents} />
          <Route exact path="/reservas/relatorio" component={ReservasRelatorio} />
          <Route exact path="/cursos" component={RegisterCourses} />
          <Route exact path="/laboratorios" component={RegisterLabs} />
          <Route exact path="/laboratorios/editar" component={EditLabs} />
          <Route exact path="/requisitos" component={RegisterRequires} />
          <Route exact path="/turnos" component={RegisterPeriod} />
          <Route exact path="/usuarios" component={ControlUsers} />
          <Route exact path="/acessos" component={ControlAccess} />
          <Route exact path="/funcoes" component={ControlFunctions} />
          <Route exact path="/minha-conta" component={ConfigAccount} />
          <Route exact path="/meu-plano" component={ConfigPlan} />
        </Switch>
      </Page>
    </TransitionGroup>
  )
}

const App = () => (
  <BrowserRouter>
    <Route path="/" component={MainApp} />
  </BrowserRouter>
)

export default App
