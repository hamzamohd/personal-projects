import "./Groceries.css";

const Groceries = ({ title, item, values }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event.target);
    const name = event.target.elements.nameInput.value;
    const adhaar = event.target.elements.adhaarInput.value;

    alert(
      `Name:${name}\nAdhaar Number:${adhaar}\n${title} Receipt:₹ ${totalPrice}`
    );
  };
  let totalQuan = 0;

  let totalPrice = 0;
  values.map(({ itemQuan, itemRate }) => (
    <>
      {(totalQuan += itemQuan)};{(totalPrice += itemRate * itemQuan)};
    </>
  ));
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

            {values.map(({ itemName, itemQuan, itemRate }) => (
              <>
                <tr>
                  <td>{itemName}</td>
                  <td>{itemQuan}</td>
                  <td>{itemRate}</td>
                  <td>{itemQuan * itemRate}</td>
                </tr>
              </>
            ))}

            <tr>
              <th>Total</th>
              <th>{totalQuan}</th>
              <th></th>
              <th>{totalPrice}</th>
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
export default Groceries;
