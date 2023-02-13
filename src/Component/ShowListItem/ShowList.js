import { useState } from "react";
import Card from "../Card/Card";
import ShowListDate from "./ShowItemDate";
import style from "./ShowList.module.css";

const ShowList = (props) => {
  const [CheckBoxValue, setCheckBoxValue] = useState("");

  let box;
  let dueText;
  let date1 = new Date();
  let date2 = new Date(props.date);
  console.log("date1", date1);
  console.log("date2", date2);

  if (date1.getDate() > date2.getDate()) {
    box = `${style["border"]}`;
    dueText = <p style={{ color: "yellow" }}>Due Date Passed</p>;
  } else {
    box = "sandeep manja";
    dueText = (
      <Card>
        <p style={{ color: "white" }}>Upcoming Task</p>
      </Card>
    );
  }

  const CheckBoxHandler = (event) => {
    console.log(CheckBoxValue);
    if (event.target.checked) {
      setCheckBoxValue(true);
    } else {
      setCheckBoxValue(false);
    }
  };

  return (
    <Card className={`${style.ShowList} ${box}`}>
      <label>
        <input onChange={CheckBoxHandler} type="checkbox" />
        {CheckBoxValue ? (
          <strike>
            <h1 className={style.ShowList_title}>{props.title}</h1>
          </strike>
        ) : (
          <h1 className={style.ShowList_title}>{props.title}</h1>
        )}
      </label>

      <div>
        <ShowListDate date={props.date} />
      </div>
      <div className={style.ShowList_control}>
        <div></div>
        {dueText}
        <Card className={style.ShowList_amount}>${props.amount}</Card>
      </div>
      <button
        className={style.delete}
        onClick={() => {
          props.ondeleteHandler(props.id);
        }}
        type="button"
      >
        Delete
      </button>
    </Card>
  );
};

export default ShowList;
