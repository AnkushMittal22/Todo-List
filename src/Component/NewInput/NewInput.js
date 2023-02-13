import React, { useState } from "react";
import InputBox from "./InputBox";
import style from "./NewInput.module.css";
import Card from "../Card/Card";
const NewInput = (props) => {
  const [ShowInput, setShowInput] = useState(true);

  const LiftingInput = (dataOfInput) => {
    const enterFormValue = {
      ...dataOfInput,
      id: Math.random().toString(),
    };
    props.onGetDataFromInput(enterFormValue);
    setShowInput(true);
  };

  const ShowInputBoxHandler = () => {
    setShowInput(false);
  };
  const StopInputBoxHandler = () => {
    setShowInput(true);
  };

  return (
    <div>
      <Card className={style.newinput}>
        {ShowInput ? (
          <Card>
            <button className={style.button} onClick={ShowInputBoxHandler}>
              Show Input Box
            </button>{" "}
          </Card>
        ) : (
          <InputBox
            onLiftingInput={LiftingInput}
            onStopInputBoxHandler={StopInputBoxHandler}
          />
        )}
      </Card>
    </div>
  );
};
export default NewInput;
