import React, { useState } from "react";
import ShowList from "./ShowList";
import style from "./ShowItemList.module.css";
import Card from "../Card/Card";
import FilterData from "./filterData";

const ShowListItem = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <h1>No Data Present Here</h1>;

  if (filteredExpenses.length !== 0) {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ShowList
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          id={expense.id}
          ondeleteHandler={props.ondeleteHandler}
        />
      );
    });
  }

  // const [DeleteElement,setDeleteElement] = useState(props.items)

  // const deleteHandler = (deletId)=>{
  //   console.log("adjask", deletId);

  //   setDeleteElement((prevGoals) => {
  //     const updatedGoals = prevGoals.filter((goal) => goal.id !== deletId);
  //     return updatedGoals;
  //   });
  // }

  return (
    <div>
      <Card className={style.ShowItem}>
        <FilterData
          selected={filteredYear}
          onfilterChangeHandler={filterChangeHandler}
        />

        {expenseContent}
      </Card>
    </div>
  );
};

export default ShowListItem;
