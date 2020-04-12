import React, { Component } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    const tl = gsap.timeline();
    tl.fromTo(
      ".overlay",
      2,
      { opacity: 1 },
      { opacity: 0, ease: "Power2.easeOut" }
    ).fromTo(
      ".intro",
      0.6,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "Power1.easeOut",
      },
      0.2
    );
  }
  render() {
    return (
      <header className="hero is-fullheight">
        <div className="hero-body has-text-centered">
          <div className="container">
            <p className="socials buttons is-centered intro">
              <button className="button is-large">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
              </button>
              <button className="button is-large">
                <span className="icon">
                  <i className="fab fa-linkedin"></i>
                </span>
              </button>
            </p>
            <div className="siteinfo">
              <h1 className="title has-text-white intro">JOE COX</h1>
              <h2 className="subtitle is-3 has-text-white intro">
                frontend web developer
              </h2>
            </div>
            <div className="ctas buttons is-centered">
              <Link className="button is-primary orange intro" to="/projects">
                View Work
              </Link>
              <a
                className="button is-outlined intro"
                id="get-in-touch"
                href="mailto:joecoxwebdev@outlook.co.uk">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </header>
    );
  }
}

export default Home;
