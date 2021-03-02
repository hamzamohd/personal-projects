import "./Fruits.css";
const Fruits = ({
  title,
  item,
  firstItem,
  secondItem,
  thirdItem,
  fourthItem,
  firstQuan,
  secondQuan,
  thirdQuan,
  fourthQuan,
  firstRate,
  secondRate,
  thirdRate,
  fourthRate,
}) => {
  const totalFruitsQuan =
    firstQuan * 1 + secondQuan * 1 + thirdQuan * 1 + fourthQuan * 1;
  const totalFruitsPrice =
    firstQuan * firstRate +
    secondQuan * secondRate +
    thirdQuan * thirdRate +
    fourthQuan * fourthRate;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event.target);
    const name = event.target.elements.nameInput.value;
    const adhaar = event.target.elements.adhaarInput.value;

    alert(
      `Name:${name}\nAdhaar Number:${adhaar}\n${title} Receipt:₹${totalFruitsPrice}`
    );
  };

  //   const handleQuan = (event) => {
  //     // const firstQuan = event.target.elements.firstQuan.value;
  //     // const secondQuan = event.target.elements.secondQuan.value;
  //     // const thirdQuan = event.target.elements.thirdQuan.value;
  //     // const fourthQuan = event.target.elements.fourthQuan.value;
  //   };

  return (
    <>
      <div className="title">{title}</div>
      <div className="container-row">
        <div className="table-container">
          <table>
            <tr>
              <th>{item}</th>
              <th>Quantity </th>
              <th>Rate</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>{firstItem}</td>
              <td>{firstQuan} </td>
              <td>{`₹${firstRate}`}</td>
              <td>{`₹${firstQuan * firstRate}`}</td>
            </tr>
            <tr>
              <td>{secondItem}</td>
              <td>{secondQuan} </td>
              <td>{`₹${secondRate}`}</td>
              <td>{`₹${secondQuan * secondRate}`}</td>
            </tr>
            <tr>
              <td>{thirdItem}</td>
              <td>{thirdQuan} </td>
              <td>{`₹${thirdRate}`}</td>
              <td>{`₹${thirdQuan * thirdRate}`}</td>
            </tr>
            <tr>
              <td>{fourthItem}</td>
              <td>{fourthQuan} </td>
              <td>{`₹${fourthRate}`}</td>
              <td>{`₹${fourthQuan * fourthRate}`}</td>
            </tr>
            <tr>
              <th>Total</th>
              <th>{`₹${totalFruitsQuan}`}</th>
              <th>🖕</th>
              <th>{`₹${totalFruitsPrice}`}</th>
            </tr>
          </table>
        </div>
      </div>

      <div className="container-row">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nameInput">Name:</label>
              <input id="nameInput" type="text" />
            </div>
            <div>
              <label htmlFor="adhaarInput">Adhaar Number:</label>
              <input id="adhaarInput" type="string" />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Fruits;
