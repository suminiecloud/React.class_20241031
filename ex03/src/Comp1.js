function Comp1() {
  const name = "박수민";
  const student = {
    name: "학생1",
    age: 20,
    mobile: "010-1111-1111",
  };
  return (
    <>
      <h1>Helllo Comp1</h1>
      <h2>hello {name}</h2>
      <h3>학생이름: {student.name}</h3>
      <h3>학생나이: {student.age}</h3>
      <h3>전화번호: {student.mobile}</h3>
    </>
  );
}
export default Comp1;
