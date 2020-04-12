import React, { Component } from "react";

class Project extends Component {
  constructor(props) {
    super();
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    const { data } = this.props;
    data.map(
      ({ name, title, description, information, img, link, github, type }) => {
        if (`/projects/${name}` === this.props.match.url) {
          this.setState({
            title: title,
            description: description,
            information: information,
            image: img,
            link: link,
            github: github,
            type: type,
          });
        }
        return 0;
      }
    );
  }
  render() {
    const {
      title,
      description,
      information,
      image,
      link,
      github,
      type,
    } = this.state;
    let tags;
    if (type) {
      tags = type.map((tag, index) => {
        return (
          <span key={`tag${index}`} className="tag is-dark">
            {tag}
          </span>
        );
      });
    }
    return (
      <section className="section page">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="pageinfo">
                <h2 className="title is-1">{title}</h2>
              </div>
            </div>
            <div className="level-right">
              <div className="buttons is-grouped">
                <button className="button is-primary orange project-back-btn">
                  <i className="fa fa-chevron-left"></i>
                </button>

                <a
                  className="button is-warning has-text-white"
                  href="mailto:joecoxwebdev@outlook.co.uk">
                  <i className="fa fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="container project-container">
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={image} alt={description} />
              </figure>
            </div>
            <div className="column is-half">
              <div className="buttons project-buttons">
                <a
                  href={link}
                  className="button is-primary orange"
                  target="_blank"
                  rel="noopener noreferrer">
                  View Site
                </a>
                <a
                  href={github}
                  className="button is-primary"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fab fa-github"></i>View on Github
                </a>
              </div>

              <div className="tags are-small">{tags}</div>
              <p className="content is-large">{information}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
