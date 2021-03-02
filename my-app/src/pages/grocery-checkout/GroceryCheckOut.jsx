import Fruits from "./Fruits";

const GroceryCheckOut = () => {
  return (
    <>
      <Fruits
        title="Fruits"
        item="Fruit"
        firstItem="Apple 🍎"
        secondItem="Orange 🍊"
        thirdItem="Banana 🍌"
        fourthItem="Pineapple 🍍"
        firstQuan="20"
        firstRate="5"
        secondQuan="15"
        secondRate="4"
        thirdQuan="12"
        thirdRate="3"
        fourthQuan="5"
        fourthRate="30"
      />
      <Fruits
        title="Vegetables"
        item="Vegetable"
        firstItem="Tomato 🍅"
        secondItem="Carrot 🥕"
        thirdItem="Cabbage 🥬"
        fourthItem="Onion 🧅"
        firstQuan="30"
        firstRate="2"
        secondQuan="20"
        secondRate="3"
        thirdQuan="5"
        thirdRate="10"
        fourthQuan="50"
        fourthRate="4"
      />
    </>
  );
};
export default GroceryCheckOut;
