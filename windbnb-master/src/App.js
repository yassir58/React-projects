import React from "react";
import ReactDOM from "react-dom";
import CardList from "./components/CardList.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import DropDown from "./components/DropDown.jsx";
import data from "./stays.json";

const App = () => {
  const initialList = [...data];
  const [list, setList] = React.useState(initialList);
  const [dropState, setDrop] = React.useState(0);

  return (
    <div className="App">
      <DropDown
        dataProp={data}
        dataState={list}
        setState={setList}
        dropState={dropState}
        dropSetter={setDrop}
      />
      <Header dropSetter={setDrop} />
      <div className="main-section">
        <CardList dataState={list} setState={setList} />
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
