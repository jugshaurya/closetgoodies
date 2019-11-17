import React from "react";
import { connect } from "react-redux";
// other Component Import
import SectionItem from "./sectionItem";
// style Import
import "./homepage.styles.css";

const HomePage = props => {
  const { sections } = props;
  return (
    <div className="home-page">
      <div className="menu">
        {sections.map(menuItem => (
          <SectionItem item={menuItem} key={menuItem.id} {...props} />
        ))}
      </div>

      {/* Website-logo */}
      <div style={{ background: "rgba(10,10,10,0.1)" }}>
        <img src="./icon.png" alt="Logo" />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  sections: state.data.sections
});

export default connect(mapStateToProps)(HomePage);
