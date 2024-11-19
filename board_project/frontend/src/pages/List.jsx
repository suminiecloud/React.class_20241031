import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const list_db = axios
      .get("http://localhost:8000/board/list")
      .then((res) => {
        console.log("res", res.data);
        setList(res.data);
      });
  }, []);
  return (
    <>
      <h2>List.jsx</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>writer</th>
            <th>date</th>
            <th>hits</th>
          </tr>
        </thead>
        <tbody>
          {list.map((board) => (
            <tr key={board.id}>
              <td>{board.id}</td>
              <td>
                <Link
                  to={{
                    pathname: `/board/${board.id}`,
                  }}
                >
                  {board.boardTitle}
                </Link>
              </td>
              <td>{board.boardWriter}</td>
              <td>{board.createdAt}</td>
              <td>{board.boardHits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default List;
