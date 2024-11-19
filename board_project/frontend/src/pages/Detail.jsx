import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [board, setBoard] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const [showDeletePass, setShowDeletePass] = useState(false);
  useEffect(() => {
    const board_db = axios
      .get(`http://localhost:8000/board/${id}`)
      .then((res) => {
        console.log(res.data[0]);
        setBoard(res.data[0]);
      });
  }, []);

  const updateReq = () => {
    setShowPass(true);
  };

  const deleteReq = () => {
    setShowDeletePass(true);
  };

  const passInput = (e) => {
    const { name, value } = e.target;
    setPassword(value);
  };

  const navigate = useNavigate();
  const passCheck = () => {
    if (password == board.boardPass) {
      navigate(`/update/${board.id}`);
    } else {
      alert("비밀번호가 일치하지 않습니다!");
    }
  };

  const deletePassCheck = () => {
    if (password == board.boardPass) {
      let res = axios
        .delete("http://localhost:8000/board/${id}")
        .then((res) => {
          navigate("/list");
        });
    } else {
      alert("비밀번호가 일치하지 않습니다!");
    }
  };

  return (
    <>
      <h2>Detail.jsx</h2>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>{board.id}</td>
          </tr>
          <tr>
            <td>title</td>
            <td>{board.boardTitle}</td>
          </tr>
          <tr>
            <td>writer</td>
            <td>{board.boardWriter}</td>
          </tr>
          <tr>
            <td>contents</td>
            <td>{board.boardContents}</td>
          </tr>
          <tr>
            <td>hits</td>
            <td>{board.boardHits}</td>
          </tr>
          <tr>
            <td>date</td>
            <td>{board.createdAt}</td>
          </tr>
        </thead>
      </table>
      <button onClick={updateReq}>수정</button>
      {showPass && (
        <div>
          <input type="text" value={password} onChange={passInput} />
          <button onClick={passCheck}>확인</button>
        </div>
      )}
      <button onClick={deleteReq}>삭제</button>
      {showDeletePass && (
        <div>
          <input type="text" value={password} onChange={passInput} />
          <button onClick={deletePassCheck}>확인</button>
        </div>
      )}
    </>
  );
}
