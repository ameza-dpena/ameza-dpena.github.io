import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
          Contacto +56 978-602-227
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Ver más
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Compromiso al cliente
          </h2>
          <p>
            Buscar el incremento del valor patrimonial en base a sus estados financieros y sus diferentes 
            partidas asociadas como el instrumento de financiamiento y el capital de trabajo como alma del negocio.
            <br /><br />
            Detección de riesgos, planificación de trabajo y aplicación de las mejoras con el fin de construir 
            viabilidad de la empresa en el trascurso del tiempo.
          </p>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Contabilidad
          </h2>
         
            <ul style={{listStyleType: 'none', textAlign: 'left'}}>
              <li>Servicio contable completo.</li>
              <li>Determinación del cálculo de IVA.</li>
              <li>Determinación de renta y sus obligaciones de asesorías anuales.</li>
              <li>Ingreso de compras y ventas electrónicas.</li>
              <li>Confección del presupuesto de la empresa.</li>
              <li>Reportabilidad.</li>
              <li>Balance proyectado (Reporte Mensual).</li>
            </ul>
          
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
          Asesoría legal y tributaria
            
          </h2>
          
            <ul style={{listStyleType: 'none', textAlign: 'left'}}>
              <li>Planificación tributaria.</li>
              <li>Asesoría en Regímenes Especiales.</li>
              <li>Utilización Reinversión de utilidades.</li>
              <li>Declaraciones tributarias de carácter legal.</li>
            </ul>
          
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Auditorias
          </h2>
          
            <ul style={{listStyleType: 'none', textAlign: 'left'}}>
              <li>Auditoria de estados financieros.</li>
              <li>Auditorias de control interno.</li>
              <li>Auditoria de clima organizacional.</li>
              <li>Auditoria en temas específicos.</li>
            </ul>
         
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Código de ética</h2>
          <p>
            El profesional de la contabilidad cumplirá los siguientes principios fundamentales
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-heart">
            <h3>Integridad</h3>
            <p>
            Ser franco y honesto en todas las relaciones profesionales y empresariales.
            </p>
          </li>
          <li className="icon solid fa-balance-scale">
            <h3>Objetividad</h3>
            <p>
            No permitir que prejuicios, conflicto de intereses o influencia indebida de terceros prevalezcan 
            sobre los juicios profesionales o empresariales.
            </p>
          </li>
          <li className="icon solid fa-flag">
            <h3>Competencia</h3>
            <p>
            Mantener el conocimiento y la aptitud profesionales al nivel necesario para asegurar que el cliente 
            o la entidad para la que trabaja reciben servicios profesionales competentes basados en los últimos 
            avances de la práctica, de la legislación y de las técnicas y actuar con diligencia y de conformidad 
            con las normas técnicas y profesionales aplicables.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Confidencialidad</h3>
            <p>
            Respetar la confidencialidad de la información obtenida como resultado de relaciones profesionales 
            y empresariales y, en consecuencia, no revelar dicha información a terceros 
            sin autorización adecuada y específica, salvo que exista un derecho o deber legal o profesional 
            de revelarla, ni hacer uso de la información en provecho propio o de terceros.
            </p>
          </li>
          <li className="icon solid fa-sign-language">
            <h3>Comportamiento profesional</h3>
            <p>
            Cumplir las disposiciones legales y reglamentarias aplicables y evitar cualquier 
            actuación que pueda desacreditar a la profesión. Cada uno de los principios 
            fundamentales se analiza con más detalle en las Secciones 110 a 150.
            </p>
          </li>
         
        </ul>
      </div>
    </section>

    {/* <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section> */}
  </Layout>
);

export default IndexPage;
