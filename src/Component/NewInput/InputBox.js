import React, { useState } from "react";
import style from "./InputBox.module.css";

const InputBox = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  const AddInput = (event) => {
    setEnteredTitle(event.target.value);
  };

  const AddAmount = (event) => {
    setEnteredAmount(event.target.value);
  };

  const AddDate = (event) => {
    setEnteredDate(event.target.value);
  };

  const DataSubmit = (event) => {
    event.preventDefault();
    const EnteredValue = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };

    props.onLiftingInput(EnteredValue);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const CancelHandler = () => {
    props.onStopInputBoxHandler();
  };

  return (
    <form onSubmit={DataSubmit}>
      <div className={style.Input}>
        <div className={style.Input}>
          <label>Title</label>
          <input type="text" value={EnteredTitle} onChange={AddInput} />
        </div>

        <div className={style.Input}>
          <label>Amount</label>
          <input type="number" value={EnteredAmount} onChange={AddAmount} />
        </div>

        <div className={style.Input}>
          <label>Date</label>
          <input type="date" value={EnteredDate} onChange={AddDate} />
        </div>
        <div>
          <button className={style.button_cancel} onClick={CancelHandler}>
            Cancel
          </button>
          <button className={style.button_add} type="submit">
            Add Items
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputBox;
