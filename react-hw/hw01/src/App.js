import { userData } from "./userData";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";

function App() {
  const [inputFinderName, setInputFinderName] = useState("");
  const [inputSelectAge, setInputSelectAge] = useState("default");

  const finderNameHandler = (event) => {
    setInputFinderName(event.target.value);
  };
  const selectAgeHandler = (event) => {
    setInputSelectAge(event.target.value);
  };
  const btnResetHandler = (event) => {
    setInputSelectAge("default");
    setInputFinderName("");
  };

  const renderHandler = () => {
    const resultArr = [...userData];
    const nameInLowerCase = inputFinderName.toLowerCase();
    const selectOpt = inputSelectAge;

    return resultArr
      .sort((a, b) => {
        return selectOpt === "asc"
          ? a.age === b.age
            ? 0
            : a.age > b.age
            ? 1
            : -1
          : selectOpt === "desc"
          ? b.age === a.age
            ? 0
            : b.age > a.age
            ? 1
            : -1
          : 0;
      })
      .filter((el) => {
        return el.name.toLowerCase().startsWith(nameInLowerCase);
      })
      .map((e) => {
        return <UserCard key={e._id} userInfo={e} />;
      });
  };

  return (
    <div className="App">
      <Header
        optionAge={inputSelectAge}
        onInputFinder={finderNameHandler}
        onInputSelect={selectAgeHandler}
        onBtnReset={btnResetHandler}
      />
      <div className="user-container">{renderHandler()}</div>
    </div>
  );
}

export default App;
