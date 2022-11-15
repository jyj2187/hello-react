import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState(""); // 초깃값 설정
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("꺼지세요~");

  const [color, setColor] = useState("aqua");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
      <button onClick={() => setColor("aqua")}>초기화</button>
    </div>
  );
};

export default Say;
