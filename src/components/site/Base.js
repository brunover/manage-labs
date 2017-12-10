import React from 'react'

import Header from './Header'
import Footer from '../painel/modules/Footer'
import banner from './img/banner-about.jpg'
import './styles/styles.css'

const Base = (props) => {

  let maskStyle = {
    'backgroundImage': 'url('+banner+')'
  }

	return (
    <section className="page site-page">
      <Header />
      <span className="about-page-mask" style={maskStyle}></span>
      <div className="container container-absolute">{ props.children }</div>
      <Footer />
    </section>
	)
}

export default Base