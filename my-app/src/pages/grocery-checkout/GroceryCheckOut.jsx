import Groceries from "./Groceries";

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
    <div className="page-div">
      <Groceries title="Fruits" item="Fruit" values={fruitList} />
      <Groceries title="Vegetables" item="Vegetable" values={veggieList} />
    </div>
  );
};
export default GroceryCheckOut;
