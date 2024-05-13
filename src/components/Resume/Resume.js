import React    from "react";
import template from "./Resume.jsx";

class Resume extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Resume;
