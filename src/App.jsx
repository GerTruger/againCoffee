import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { useState } from "react";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const [userDrink, setUserDrink] = useState();

  const greeting = "Hoi , welcome on the site";
  const description = <p>This app is going to change your life</p>;

  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <h1>Welcome in de winc class</h1>
          <p>{greeting}</p>
          {description}
          <DrinkSearch onClick={setUserDrink} />
        </>
      )}
    </div>
  );
};
