/* eslint-disable react/style-prop-object */
import React from "react";
import "./styles.css";

const myStyle = {};

export default class StylingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 15,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="div-class">My First React Component!</div>
      </div>
    );
  }
}
