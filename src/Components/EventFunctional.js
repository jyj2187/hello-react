import React, { useState } from "react";

const EventFunctional = () => {
  //   const [username, setUsername] = useState("");
  //   const [message, setMessage] = useState("");
  //   const onChangeUsername = (e) => setUsername(e.target.value);
  //   const onChangeMessage = (e) => setMessage(e.target.value);
  //   const initialize = () => {
  //     setUsername("");
  //     setMessage("");
  //   };

  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const printMessage = () => {
    alert(username + " : " + message);
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      printMessage();
    }
  };
  const initialize = () => {
    setForm({
      username: "",
      message: "",
    });
  };

  return (
    <div>
      <h1>이벤트 함수 컴포넌트</h1>
      <input
        type="text"
        name="username"
        placeholder="이름"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메시지"
        value={message}
        onChange={onChange}
        onKeyUp={handleKeyUp}
      />
      <button onClick={printMessage}>확인</button>
      <button onClick={initialize}>초기화</button>
    </div>
  );
};

export default EventFunctional;
