import React, { Component } from 'react'
import Chatbot from '../components/chatbot';


export default class Sidebar extends Component {
  render() {

    const mystyle = {
      color: "white",
      padding: "10px",
      fontFamily: "Arial",
      transition: "transform 0.5s ease"
    };
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="img-hover-zoom">

                <img
                  style={mystyle}
                  className="imgArea"
                  src={"/images/profile1.jpg"}
                  alt="Card image cap"
                />              </div>
              <h1 id="colorlib-logo"><a href="index.html">Avi Levin</a></h1>
              <p className="sidebar">REACT | FrontEnd Web Developer | Fullstack | Redux | Node | Express </p>
              <span className="email"><i className="icon-mail"></i> avremi89@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#projects" data-nav-section="projects">projects</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>

                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/avi-levin-86a192a3/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/AviLevin" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=+972549246843&text=Hi Avi, we wants your services!! " target="_blank" rel="noopener noreferrer"><i className="icon-whatsapp" /></a></li>
                <li><a href="mailto:avremi89@gmail.com?subject=Hi Avi, we wants your services!!" target="_blank" rel="noopener noreferrer"><i className="icon-mail" /></a></li>
                <li><a href="tel:054-9246843" target="_blank" rel="noopener noreferrer"><i className="icon-phone" /></a></li>

              </ul>


            </nav>



            <div className="colorlib-footer">


            </div>

          </aside>

        </div>


      </div>
    )
  }
}
