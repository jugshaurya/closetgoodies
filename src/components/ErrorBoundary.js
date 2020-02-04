import React from "react";
import Image404 from "../assets/404.jpg";

// https://reactjs.org/docs/error-boundaries.html

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  // to render a fallback UI in case error happens inside any child component
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // to log error information
  componentDidCatch(error, info) {}

  render() {
    return this.state.hasError ? (
      <div style={{ width: "100vw", height: "100vh" }}>
        <img
          src={Image404}
          alt="404"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
