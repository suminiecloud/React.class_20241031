import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const up = () => {
    // alert("up함수 호출!");
    setCount(count + 1);
  };
  const down = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>count값: {count}</h2>
      {/*클릭하면 count 값을 하나 올리는 Up 함수 호출 */}
      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
    </>
  );
}

export default App;
