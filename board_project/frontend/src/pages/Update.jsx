import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [board, setBoard] = useState({
    boardTitle: "",
    boardWriter: "",
    boardPass: "",
    boardContents: "",
  });

  useEffect(() => {
    const board_db = axios
      .get(`http://localhost:8000/board/update/${id}`)
      .then((res) => {
        console.log("res", res.data[0]);
        setBoard(res.data[0]);
      });
  }, []);

  const inputUpdate = (e) => {
    const { name, value } = e.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const boardUpdate = async (e) => {
    e.preventDefault();
    let res = await axios.put("http://localhost:8000/board/update/${id}", {
      board: board,
    });
  };

  return (
    <>
      <h2>Update.jsx</h2>
      <form onSubmit={boardUpdate}>
        제목:{" "}
        <input
          type="text"
          name="boardTitle"
          value={board.boardTitle}
          onChange={inputUpdate}
        />
        작성자:{" "}
        <input
          type="text"
          name="boardWriter"
          value={board.boardWriter}
          onChange={inputUpdate}
          readOnly
        />
        내용:{" "}
        <input
          type="text"
          name="boardContents"
          value={board.boardContents}
          onChange={inputUpdate}
        />
        <input type="submit" value={"수정"} />
      </form>
    </>
  );
};
export default Update;
