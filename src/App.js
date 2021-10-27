import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";
import Projects from "./components/projects";
import Tags from "./components/tags";
import WhatsApp from "./components/whatsappBotton";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>

          <div id="colorlib-main">
            <WhatsApp></WhatsApp>
            <Introduction></Introduction>
            
            <Projects></Projects>
            <About></About>
            <Tags></Tags>

            <Timeline></Timeline>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
