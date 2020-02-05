import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GithubSvg } from "../../assets/github.svg";
import { ReactComponent as FacebookSvg } from "../../assets/facebook.svg";
import { ReactComponent as TwitterSvg } from "../../assets/twitter.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/linkedin.svg";

import "./footer.scss";
class Footer extends React.Component {
  state = {
    githubLink: "https://github.com/jugshaurya",
    facebookLink: "https://www.facebook.com/jugshaurya",
    twitterLink: "https://twitter.com/jugshaurya",
    linkedinLink: "https://www.linkedin.com/in/shaurya-singhal-5b6a8a133",
    sections: [
      {
        title: "About Us >>",
        values: [
          "A Personal Project focusing over the ecommerce Fashion idea to fill the beautiful people Closet."
        ],
        links: null
      },
      {
        title: "Quick Links >>",
        values: ["Women", "Men", "Girls", "Boys", "New Closet"],
        links: [
          "/shop/women",
          "/shop/men",
          "/shop/girls",
          "/shop/boys",
          "/shop"
        ]
      },
      {
        title: "Help >>",
        values: ["Contact", "FAQ"],
        links: ["/contact", "/faq"]
      },
      {
        title: "Contacts >>",
        values: ["@shaurya"],
        links: ["mailto:shauryasinghal84@gmail.com"]
      }
    ]
  };

  renderSocialLinks = () => {
    return (
      <div className="extra-links social-links">
        <h4> Follow Me >> </h4>
        <ul>
          <li>
            <a
              href={this.state.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubSvg className="githubsvg" />
            </a>
          </li>

          <li>
            <a
              href={this.state.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookSvg />
            </a>
          </li>
          <li>
            <a
              href={this.state.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterSvg />
            </a>
          </li>
          <li>
            <a
              href={this.state.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInSvg />
            </a>
          </li>
        </ul>
      </div>
    );
  };

  render() {
    const { sections } = this.state;
    return (
      <div className="footer-section">
        <a href="#top" className="backtotop">
          Back to Top
        </a>
        <div className="container">
          {sections.map((section, i) => (
            <div className="extra-links" key={100 + i}>
              <h4>{section.title}</h4>
              <ul>
                {section.values.map((value, i) => (
                  <li key={700 + i}>
                    {section.title === "Contacts >>" ? (
                      <a href={section.links[i]}>{value}</a>
                    ) : (
                      <Link to={section.links ? section.links[i] : "#"}>
                        {value}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {this.renderSocialLinks()}
        </div>
        <div className="footer-bottom">
          &copy; 2020 - Created with{" "}
          <span role="img" aria-labelledby="emoji">
            {" "}
            💙{" "}
          </span>{" "}
          by Shaurya Singhal
        </div>
      </div>
    );
  }
}

export default Footer;
