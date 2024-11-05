import { useSearchParams } from "react-router-dom";

const Param2 = () => {
  const [params] = useSearchParams(); //params는 배열형식으로써 대괄호로 받음
  const q = params.get("q");
  const page = params.get("page");
  return (
    <>
      <h2>Param2.jsx</h2>
      <h3>
        전달받은 값 : {q}, {page}
      </h3>
    </>
  );
};
export default Param2;
