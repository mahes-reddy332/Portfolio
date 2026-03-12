import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiltX: 0,
      tiltY: 0,
      glow: 0.55,
    };
  }

  handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;

    const tiltY = ((x - halfW) / halfW) * 9;
    const tiltX = -((y - halfH) / halfH) * 9;

    this.setState({
      tiltX,
      tiltY,
      glow: 0.92,
    });
  };

  handleLeave = () => {
    this.setState({
      tiltX: 0,
      tiltY: 0,
      glow: 0.55,
    });
  };

  render() {
    const theme = this.props.theme;
    const markStyle = {
      "--mark-color": theme.body,
      "--rx": `${this.state.tiltX}deg`,
      "--ry": `${this.state.tiltY}deg`,
      "--glow": this.state.glow,
    };

    return (
      <div className="raw_logo" aria-label="Splash logo">
        <div
          className="logo-mark"
          style={markStyle}
          onMouseMove={this.handleMove}
          onMouseLeave={this.handleLeave}
        >
          <span className="mark-ring ring-1"></span>
          <span className="mark-ring ring-2"></span>
          <span className="mark-core" style={{ color: theme.body }}>
            MR
          </span>
        </div>
        <h1 className="logo-fullname" style={{ color: theme.body }}>
          <span className="brand-primary">MaheshReddy</span>
          <span className="brand-gap"> </span>
          <span className="brand-secondary">Mula</span>
        </h1>
      </div>
    );
  }
}

export default LogoLoader;
