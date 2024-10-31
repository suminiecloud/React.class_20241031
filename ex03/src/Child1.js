function Child1(props) {
  console.log(props);
  return (
    <>
      <h2>Child1.js</h2>
      <h2>{props.p2}</h2>
    </>
  );
}
export default Child1;
