// import "./DrinkButtons.css";
// // import { Button } from "./ui/Button";
// import { useState } from "react";
// export const DrinkButtons = () => {
//   const [selectDrink, setSelectDrink] = useState("Tea1");
//   return (
//     <p>Your choice: {selectDrink}</p>
//     //     <> <h2>
//     //     Would you like {drinkOne} or {drinkTwo}?
//     //   </h2>
//     //   <div className="button-group">
//     //     <Button text={drinkOne} />
//     //     <Button text={drinkTwo} />
//     //   </div>
//     // </>
//   );
// };
import "./DrinkButtons.css";
import { Button } from "./ui/Button";

export const DrinkButtons = () => {
  const [drinkSelected, setDrinkSelect] = useState(false);

  return (
    <>
      {/* <h2>
        Would you like {drinkOne} or {drinkTwo}?
      </h2> */}
      <div className="button-group">
        <button className="Button" onClick={() => setDrinkSelect(true)}>
          Tea
        </button>
        {/* <Button text={drinkOne} />
        <Button text={drinkTwo} /> */}
      </div>
    </>
  );
};
