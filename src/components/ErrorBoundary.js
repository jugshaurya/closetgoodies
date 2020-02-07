import React from "react";
import Image404 from "../assets/404.jpg";
import { withRouter } from "react-router-dom";

// https://reactjs.org/docs/error-boundaries.html
class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  // https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }
  // to render a fallback UI in case error happens inside any child component
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // to log error information
  componentDidCatch(error, info) {}

  render() {
    return this.state.hasError ? (
      <div
        style={{
          paddingTop: "4rem",
          width: "100vw",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={Image404}
          alt="404"
          style={{ width: "60%", height: "70%", borderRadius: "5px" }}
        />
      </div>
    ) : (
      this.props.children
    );
  }
}

export default withRouter(ErrorBoundary);
