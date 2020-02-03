import React from "react";
import "./pageSpinner.scss";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";

// HOC - a function taking wrappedComponent as input and returns a component with additional Functionality.
const pageSpinner = WrappedComponent => {
  return class DecoratedComponent extends React.Component {
    render() {
      return this.props.isLoading ? (
        <div className="loading-spinner">
          <Spinner />
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default pageSpinner;
