function Child3(props) {
  const { p1, p2, p3, student } = props;
  return (
    <>
      <h2>Child3.js</h2>
      <h3>{p1}</h3>
      <h3>{p2}</h3>
      <h3>{p3}</h3>
      <h3>{student.name}</h3>
      <h3>{student.age}</h3>
    </>
  );
}
export default Child3;
