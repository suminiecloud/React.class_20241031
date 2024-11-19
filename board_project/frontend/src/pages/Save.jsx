import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Save = () => {
  const navigate = useNavigate();
  const [board, setBoard] = useState({
    boardTitle: "",
    boardWriter: "",
    boardPass: "",
    boardContents: "",
  });

  const inputUpdate = (e) => {
    const { name, value } = e.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const boardSave = async (e) => {
    e.preventDefault();
    console.log(board);
    let res = await axios.post("http://localhost:8000/board/save", {
      board: board,
    });
    navigate("/list");
  };
  return (
    <>
      <h2>Save.jsx</h2>
      <form onSubmit={boardSave}>
        제목:{" "}
        <input
          type="text"
          name="boardTitle"
          value={board.boardTitle}
          onChange={inputUpdate}
        />
        <br />
        작성자:{" "}
        <input
          type="text"
          name="boardWriter"
          value={board.boardWriter}
          onChange={inputUpdate}
        />
        <br />
        비밀번호:{" "}
        <input
          type="text"
          name="boardPass"
          value={board.boardPass}
          onChange={inputUpdate}
        />
        <br />
        내용:{" "}
        <input
          type="text"
          name="boardContents"
          value={board.boardContents}
          onChange={inputUpdate}
        />
        <br />
        <input type="submit" value={"작성"} />
      </form>
    </>
  );
};
export default Save;
