import React from "react";
import { connect } from "react-redux";
// other Component Import
// import SectionItem from "./sectionItem";
// style Import
import Section from "./Section/section";
import "./homepage.styles.css";

const HomePage = props => {
  // const { sections } = props;
  return (
    <div className="homepage">
      <div className="reviews"></div>
      <div className="homepage-sections">
        <Section type={"Men"} data={"later"} />
        <Section type={"Women"} data={"later"} />
        <Section type={"Boys"} data={"later"} />
        <Section type={"Girls"} data={"later"} />
      </div>

      {/* <div className="menu">
        {sections.map(menuItem => (
          <SectionItem item={menuItem} key={menuItem.id} {...props} />
        ))}
      </div>

      <div style={{ background: "rgba(10,10,10,0.1)" }}>
        <img src="./icon.png" alt="Logo" />
      </div> */}
    </div>
  );
};

const mapStateToProps = state => ({
  sections: state.data.sections
});

export default connect(mapStateToProps)(HomePage);
