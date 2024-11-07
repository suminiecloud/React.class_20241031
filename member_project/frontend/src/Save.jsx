import { Link } from "react-router-dom";

const Save = () => {
  return (
    <>
      <h2>Save.jsx</h2>
      <Link
        to={{
          pathname: "/param/save",
        }}
        회원가입
      ></Link>
    </>
  );
};
export default Save;
