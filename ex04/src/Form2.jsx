import { useState } from "react";

function Form2() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    email: "",
  });
  const inputUpdate = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
    console.log(profile);
  };
  return (
    <>
      <h2>Form2.jsx</h2>
      이름: <input type="text" name="name" onChange={inputUpdate} />
      <br></br>
      나이: <input type="text" name="age" onChange={inputUpdate} />
      <br></br>
      이메일: <input type="text" name="email" onChange={inputUpdate} />
    </>
  );
}
export default Form2;
