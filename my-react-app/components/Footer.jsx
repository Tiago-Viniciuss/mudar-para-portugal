import React from 'react'
import '../style/Footer.css'

const Footer = () => {
  return (
    <div>
      <footer id='footer'>
        <h3>
          Entre em contato através das redes abaixo:
        </h3>
        <section id='socialMedia'>
          <a href="https://wa.me/351911905251">
            <div id='whatsapp' className='footerImg'></div>
          </a>
          <a href="https://www.instagram.com/_razorman/" target='_blank'>
            <div id='instagram' className='footerImg'></div>
          </a>
          <a href="https://www.linkedin.com/in/tiago-vinicius/" target='_blank'>
            <div id='linkedin' className='footerImg'></div>
          </a>
        </section>
        <p className='copyright'>
          &copy;
          <a href="https://github.com/Tiago-Viniciuss" target='_blank'>Tiago Razorman. </a>
          Todos os direitos reservados, 2024<span></span>
        </p>
      </footer>
    </div>
  )
}

export default Footer