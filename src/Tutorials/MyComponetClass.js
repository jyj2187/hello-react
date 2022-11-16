import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponetClass extends Component {
  static defaultProps = {
    name: "기본 이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNum: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNum, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {favoriteNum}입니다.
      </div>
    );
  }
}

// MyComponetClass.defaultProps = {
//   name: "기본이름",
// };

// MyComponetClass.propTypes = {
//   name: PropTypes.string,
//   favoriteNum: PropTypes.number.isRequired,
// };

export default MyComponetClass;
