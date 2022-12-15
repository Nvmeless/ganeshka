import React from "react"
import { IconContext } from "react-icons"
import loadable from "@loadable/component"

import { Component } from "react";
 
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
 
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error,
    };
  }
 
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service like AppSignal
    // logErrorToMyService(error, errorInfo);
  }
 
  render() {
    const { hasError, error } = this.state;
 
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <p>Something went wrong 😭</p>
 
          {error.message && <span>Here's the error: {error.message}</span>}
        </div>
      );
    }
 
    return this.props.children;
  }
}



const Icon = ({ ...props }) => {
  const [library, iconComponent] = props.icon.split("/")
  if (!library || !iconComponent) return <div>Icon Library or Icon Name is missing</div>
  if (library.slice(0, 2) !== iconComponent.slice(0, 2)) return <div>Icon Library and Icon Name Mismatch</div>
  const lib = library.toLowerCase()
  const Icon = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: el => el[iconComponent]
  })

  const value = {
    color: props.color,
    size: props.size,
    className: props.className,
    style: props.style,
    attr: props.attr
  }

  return (
    <ErrorBoundary>
      <IconContext.Provider value={value}>
        <Icon />
      </IconContext.Provider>
    </ErrorBoundary>
  )
}

export default Icon
