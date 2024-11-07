import { Link } from "react-router-dom";
import { useState } from "react";

const Save = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  return (
    <>
      <h2>Save.jsx</h2>
      <Link
        to={{
          pathname: "/param/save",
        }}
        회원가입
      ></Link>
      이름:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      이메일:
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      비밀번호:
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      전화번호:
      <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} />
    </>
  );
};
export default Save;
