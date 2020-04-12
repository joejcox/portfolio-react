import React, { Component } from "react";
import "./App.scss";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Project from "./components/Project";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    projects: [
      {
        title: "Noita",
        description: "Video game website",
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
        img:
          "https://cdn.vox-cdn.com/thumbor/u934XKA55y3AYAcyITr7dQCq5GU=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/59121631/noita2.0.jpg",
        link: "http://www.coejox.com/portfolio/noita",
        github: "http://www.github.com",
        type: ["Bootstrap", "Vanilla JS"],
        data: "noita",
        name: "Noita",
      },
      {
        title: "LoL Stats",
        description: "League of Legends statistics",
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
        img: "https://cdn.mos.cms.futurecdn.net/G2VQ2CL9j4w6Jv5z3QwjuN.jpg",
        link: "http://lol-champion-rotation.herokuapp.com",
        github: "http://github.com",
        type: ["Bulma", "React", "API", "SPA"],
        data: "lolchampionrotation",
        name: "Lol-Champion-Rotation",
      },
      {
        title: "Weathered",
        description: "Weather application",
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
        img:
          "https://www.industryforum.co.uk/wp-content/uploads/sites/6/2018/10/Industial-Components.jpg",
        link: "http://www.coejox.com/weathered",
        type: ["App", "API"],
        data: "weathered",
        name: "Weathered",
      },
      {
        title: "RGB Slider",
        description: "RGB colour code generator",
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
        img: "https://miro.medium.com/max/1600/1*v7w3v2gsZbSUc7eQFZ_H4g.jpeg",
        link: "http://www.coejox.com/rgb",
        github: "http://github.com",
        type: ["Vanillajs"],
        data: "rgb",
        name: "RGB-Colour-Slider",
      },
      {
        title: "Calculator",
        description: "React calculator",
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
        img:
          "https://cdn1.vectorstock.com/i/1000x1000/49/35/maths-seamless-pattern-eps-8-vector-1204935.jpg",
        link: "#",
        github: "http://github.com",
        type: ["React"],
        data: "calculator",
        name: "React-Calculator",
      },
      {
        title: "Peter Parker",
        description: "Estate agent website",
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sem vel urna pretium congue ut at lectus. Maecenas vel lorem ipsum. Nunc id tellus gravida, vestibulum nisl pretium, facilisis nulla. Proin porta quis erat ut interdum. Quisque sollicitudin felis et sollicitudin varius. Praesent placerat magna maximus malesuada ullamcorper. Pellentesque in tempus felis. Aenean nec tellus interdum, molestie est a, convallis magna. Cras cursus enim id felis eleifend, non vehicula neque pharetra. Etiam pharetra sollicitudin tortor, aliquet efficitur nunc mattis ut.",
        img:
          "https://dwkujuq9vpuly.cloudfront.net/news/wp-content/uploads/2017/02/Estate-agent-investigation.jpg",
        link: "#",
        github: "http://github.com",
        type: ["API"],
        data: "peterparker",
        name: "Peter-Parker",
      },
    ],
  };

  render() {
    const { projects } = this.state;
    return (
      <HelmetProvider>
        <div className="wrapper">
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route
                exact
                path="/projects"
                render={(props) => <Projects {...props} data={projects} />}
              />
              <Route
                exact
                path="/projects/:ProjectId"
                render={(props) => <Project {...props} data={projects} />}
              />
            </Switch>
          </Router>
        </div>
      </HelmetProvider>
    );
  }
}

export default App;
