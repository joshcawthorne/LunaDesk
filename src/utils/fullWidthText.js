import React from "react";
import PropTypes from "prop-types";
import { isEqual } from "lodash";

class FullWidthText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewBox: "0 0 1000 1000",
    };
    this.textEl = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (String(prevProps.children) !== String(this.props.children)) {
      // Recalculate on text change
      this.calculateBox();
    } else if (!isEqual(prevProps.textStyle, this.props.textStyle)) {
      // Recalculate on style change
      this.calculateBox();
    }
  }

  componentDidMount() {
    this.calculateBox();

    // If FontFace set is supported, recalculate when fonts have loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        this.calculateBox();
      });
    }
  }

  calculateBox() {
    const box = this.textEl.current.getBBox();

    // Crop vertically by given factor if passed
    if (this.props.cropTop) {
      box.y += box.height * this.props.cropTop;
      box.height -= box.height * this.props.cropTop;
    }
    if (this.props.cropBot) {
      box.height -= box.height * this.props.cropBot;
    }

    this.setState(
      {
        viewBox: `${box.x} ${box.y} ${box.width} ${box.height}`,
      },
      () => {
        if (this.props.onFit) {
          this.props.onFit(this.state.viewBox);
        }
      }
    );
  }

  render() {
    const {
      children,
      textStyle,
      svgStyle,
      textClassName,
      svgClassName,
      font,
      width,
      height,
      title,
      preserveAspectRatio,
    } = this.props;

    // Merge all text object styles together in one object
    const fullTextStyle = {
      ...textStyle,
      fill: "#fff",
    };
    if (title) {
      fullTextStyle.fill = "url(#rainbow)";
    }
    if (font) {
      fullTextStyle.fontFamily = font;
    }

    return (
      <svg
        className={svgClassName}
        style={svgStyle}
        viewBox={this.state.viewBox}
        width={width}
        height={height}
        preserveAspectRatio={preserveAspectRatio}
      >
        <defs>
          <linearGradient
            id="rainbow"
            x1="0"
            x2="100%"
            y1="0"
            y2="0%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E523BB" offset="0%" />
            <stop stopColor="#F8B84F" offset="100%" />
          </linearGradient>
        </defs>
        <text
          x={0}
          y={0}
          style={fullTextStyle}
          className={textClassName}
          ref={this.textEl}
          fill="url(#rainbow)"
        >
          {children}
        </text>
      </svg>
    );
  }
}

FullWidthText.propTypes = {
  children: PropTypes.node,
  textStyle: PropTypes.object,
  svgStyle: PropTypes.object,
  textClassName: PropTypes.string,
  svgClassName: PropTypes.string,
  font: PropTypes.string,
  onFit: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string,
  preserveAspectRatio: PropTypes.string,
  cropTop: PropTypes.number,
  cropBot: PropTypes.number,
};

FullWidthText.defaultProps = {
  children: null,
  textStyle: {},
  svgStyle: {},
  textClassName: null,
  svgClassName: null,
  font: null,
  onFit: null,
  width: "100%",
  height: "100%",
  preserveAspectRatio: "xMidYMid meet",
  cropTop: null,
  cropBot: null,
};

export default FullWidthText;
