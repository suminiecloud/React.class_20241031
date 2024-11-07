import express from "express";
import mysql from "mysql";

const app = express();
app.use(express.json()); //json data를 주고받기 위한 설정

app.listen(8000, () => {
  //서버구동 셋팅
  console.log("서버시작!");
});

const db = mysql.createConnection({
  host: "1237.0.0.1",
  user: "user_ex",
  password: "1234",
  port: "3306",
  database: "db_ex",
});

db.connect((err) => {
  console.log("db연결 성공");
  console.log("err", err);
});

app.get("/", () => {
  console.log("기본주소 요청");
});
//hello get 요청이 오면 콘솔에  hello 주소 요청 출력
app.get("/hello", () => {
  console.log("hello 주소 요청");
});

app.get("/qs", (req) => {
  console.log(req.query);
  const { p1, p2 } = req.query;
  console.log("p1: " + p1 + ", p2: " + p2);

  console.log(`p1: ${p1}, p2: ${p2}`);
});

//board/10, prodect/6
app.get("/:id", (req) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
});

app.post("/hello", () => {
  console.log("hello post 요청");
});

app.post("/post-req", (req) => {
  console.log(req.body);
  console.log(req.body.name);
  const { name, age } = req.body;
  console.log(`name: ${name}, age: ${age}`);
});
