import React, { Component } from 'react'
// import profile1 from "/images/profile1.jpg"

export default class Sidebar extends Component {
  render() {

    const mystyle = {
      color: "white",
      // maxWidth: "100px",
      // backgroundImage: 'url(images/ww.jpg)',
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
                {/* <div className="author-img" style={mystyle} /> */}
                <img
                  style={mystyle}
                  className="imgArea"
                  src={"/images/profile1.jpg"}
                  alt="Card image cap"
                />              </div>
              <h1 id="colorlib-logo"><a href="index.html">Avi Levin</a></h1>
              <span className="email"><i className="icon-mail"></i> avremi89@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/avi-levin-86a192a3/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/AviLevin" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://twitter.com/avremi89" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>

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
