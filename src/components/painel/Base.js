import React from 'react'

import Header from './modules/Header'
import Footer from './modules/Footer'
import MainNav from './modules/MainNav'

// common styles
import './styles/common.min.css'
import './styles/styles.css'


const Base = (props) => {
	return (
    <section id="container" className="effect aside-float aside-bright mainnav-lg navbar-fixed">
      <Header />
      <main className="boxed">
        <div id="content-container">
          <section className="page admin-page">
            {props.children}
          </section>
        </div>
        <MainNav />
      </main>
      <Footer />
    </section>
	)
}

export default Base