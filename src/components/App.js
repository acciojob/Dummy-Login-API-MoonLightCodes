import React, { useRef, useState } from "react";

const App = () => {
  const db = [
    {
      id: 1,
      name: "ABC",
      email: "abc@gmail.com",
      password: "12",
    },
    {
      id: 2,
      name: "DEF",
      email: "def@gmail.com",
      password: "1234",
    },
    {
      id: 3,
      name: "GHI",
      email: "ghi@gmail.com",
      password: "123456",
    },
  ];
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loginData, setLoginData] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  if (loginData) {
    return <h5>{JSON.stringify(loginData)}</h5>;
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTimeout(() => {
            let us = db.find((ele) => ele.email === emailRef.current.value);
            if (!us) {
              setErrMsg(<p id="user-error">User not found</p>);
              console.log("User not found");
            }
            if (us.password === passwordRef.current.value) {
              setLoginData(us);
              console.log(us);
            } else {
              setErrMsg(<p id="password-error">Password Incorrect</p>);
              console.log("Password Incorrect");
            }
          }, 3000);
        }}
      >
        <label htmlFor="input-email">Email: </label>
        <input ref={emailRef} type="text" id="input-email" />

        <label htmlFor="input-password">Password: </label>
        <input ref={passwordRef} type="text" id="input-password" />

        <button type="submit" id="submit-form-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default App;
