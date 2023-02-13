import React, { useState } from "react";
import NewInput from "./Component/NewInput/NewInput";
import ShowListItem from "./Component/ShowListItem/ShowListItem";

const DummyData = [
  { id: "id1", title: "School", amount: 10000, date: new Date(2023, 11, 31) },
  { id: "id2", title: "Education", amount: 50000, date: new Date(2023, 0, 1) },
  { id: "id3", title: "Coading", amount: 400000, date: new Date(2023, 0, 2) },
  { id: "id4", title: "Business", amount: 200000, date: new Date(2021, 1, 3) },
  { id: "id5", title: "Home", amount: 1000000, date: new Date(2020, 8, 11) },
  { id: "id6", title: "Land", amount: 1000000, date: new Date(2019, 6, 25) },
  {
    id: "id7",
    title: "Education",
    amount: 10000,
    date: new Date(2022, 11, 31),
  },
];

function App() {
  const [EnteredShowItem, setEnteredInput] = useState(DummyData);

  const deleteHandler = (deleteId) => {
    const UpdateValue = EnteredShowItem.filter((goalId) => {
      return deleteId != goalId.id;
    });
    setEnteredInput(UpdateValue);
  };

  const GetDataFromInput = (GetInpuData) => {
    setEnteredInput((previousData) => {
      return [GetInpuData, ...previousData];
    });
  };

  return (
    <div>
      <NewInput onGetDataFromInput={GetDataFromInput} />
      <ShowListItem items={EnteredShowItem} ondeleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
