import React from "react";
import PropTypes from "prop-types";

const MyComponetFunctional = ({ name, favoriteNum, children }) => {
  // const { name, children } = props; // 비구조화 할당
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children}입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNum}입니다.
    </div>
  );
};

MyComponetFunctional.defaultProps = {
  name: "기본 이름",
};

MyComponetFunctional.propTypes = {
  // PropTypes는 다양하다. 숙지해두고 상황에 따라 맞는 것을 사용하자.
  // https://github.com/facebook/prop-types
  name: PropTypes.string, // 값은 출력되지만, String이 아닐 경우 콘솔에 경고 메시지 출력
  favoriteNum: PropTypes.number.isRequired, // 필수 필드.
};

export default MyComponetFunctional;
