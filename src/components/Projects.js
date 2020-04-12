import React, { Component } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

class Projects extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    const tl = gsap.timeline();
    const projects = document.querySelectorAll(".projects .column");
    tl.fromTo(
      "main",
      0.6,
      { opacity: 0, y: "20" },
      { opacity: 1, y: 0, ease: "Power2.easeOut" }
    );
    tl.fromTo(
      projects,
      0.8,
      { maxHeight: 0 },
      { maxHeight: "100%", ease: "Power2.easeInOut", stagger: 0.2 },
      0.2
    );
  }
  render() {
    const { data } = this.props;

    const projects = data.map(({ data, img, description, name, title }) => {
      return (
        <div key={data} className="column">
          <div className="column-wrapper">
            <figure className="image">
              <img src={img} alt={description} />
            </figure>
            <Link
              to={`/projects/${name}`}
              className="overlay-link"
              data-page={data}
            >
              <div className="card-content is-overlay">
                <p className="button is-primary view-project">{title}</p>
              </div>
            </Link>
          </div>
        </div>
      );
    });

    return (
      <>
        <Helmet>
          <title>{`Joe Cox | Projects - Frontend Web Developer`}</title>
        </Helmet>
        <main className="section">
          <div className="container container-isflex">
            <div className="level">
              <div className="level-left">
                <div className="pageinfo">
                  <h2 className="title is-1">Projects</h2>
                  <h1 className="subtitle is-5">Frontend Web Development</h1>
                </div>
              </div>
              <div className="level-right">
                <div className="buttons is-grouped">
                  <button className="button is-primary orange back-btn">
                    <i className="fa fa-chevron-left"></i> Go Back
                  </button>

                  <a
                    className="button is-warning has-text-white"
                    href="mailto:joecoxwebdev@outlook.co.uk"
                  >
                    <i className="fa fa-envelope"></i>Email Me
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className="projects columns">{projects}</div>
          </div>
        </main>
      </>
    );
  }
}

export default Projects;
