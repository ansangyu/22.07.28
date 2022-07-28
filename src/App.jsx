import React, { useState } from "react";
import Counter from "./components/Counter";
import Converter from "./components/Converter";
import Mybtn from "./components/Mybtn";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Converter counter={counter} />
      <hr />
      <Mybtn
        text={"1번 버튼"}
        fontSize={"10px"}
        isChecked={true}
        alertMsg={"1번버튼 클릭됨"}
      />
      <Mybtn
        text={"2번 버튼"}
        fontSize={"15px"}
        isChecked={false}
        alertMsg={"2번버튼 클릭됨"}
      />
      <Mybtn
        text={"3번 버튼"}
        fontSize={"20px"}
        isChecked={false}
        alertMsg={"3번버튼 클릭됨"}
      />
    </>
  );
}
export default App;
