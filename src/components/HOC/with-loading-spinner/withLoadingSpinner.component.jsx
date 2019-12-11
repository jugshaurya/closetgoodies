import React from "react";
import "./withLoadingSpinner.styles.css";
import { ReactComponent as Spinner } from "./Spinner.svg";

// HOC - a function taking wrappedComponent as input and returns a component with additional Functionality.
const withLoadingSpinner = WrappedComponent => {
  return class DecoratedComponent extends React.Component {
    render() {
      const { isLoading } = this.props;
      return isLoading ? (
        <div className="loading-spinner">
          <Spinner />
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default withLoadingSpinner;
