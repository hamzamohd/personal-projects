import Fruits from "./Fruits";

const GroceryCheckOut = () => {
  const fruitList = [
    { itemName: "apple", itemQuan: 20, itemRate: 5 },
    { itemName: "orange", itemQuan: 35, itemRate: 3 },
    { itemName: "banana", itemQuan: 24, itemRate: 6 },
  ];
  const veggieList = [
    { itemName: "tomato", itemQuan: 40, itemRate: 4 },
    { itemName: "onion", itemQuan: 20, itemRate: 5 },
    { itemName: "carrot", itemQuan: 50, itemRate: 2 },
  ];
  return (
    <>
      <Fruits title="Fruits" item="Fruit" values={fruitList} />
      <Fruits title="Vegetables" item="Vegetable" values={veggieList} />
    </>
  );
};
export default GroceryCheckOut;
