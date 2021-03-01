import "./Fruits.css";
const Fruits = ({ appleQuan, orangeQuan, bananaQuan, pineappleQuan }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event.target);
    const name = event.target.elements.nameInput.value;
    const adhaar = event.target.elements.adhaarInput.value;

    alert(`Name:${name}\nAdhaar Number:${adhaar}`);
  };

  //   const handleQuan = (event) => {
  //     // const appleQuan = event.target.elements.appleQuan.value;
  //     // const orangeQuan = event.target.elements.orangeQuan.value;
  //     // const bananaQuan = event.target.elements.bananaQuan.value;
  //     // const pineappleQuan = event.target.elements.pineappleQuan.value;
  //   };

  return (
    <>
      <div className="title">Fruits</div>
      <div className="container-row">
        <div className="table-container">
          <table>
            <tr>
              <th>Fruit</th>
              <th>Quantity </th>
              <th>Rate</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>Apple 🍎</td>
              <td>{appleQuan} </td>
            </tr>
            <tr>
              <td>Orange 🍊</td>
              <td>{orangeQuan} </td>
            </tr>
            <tr>
              <td>Banana 🍌</td>
              <td>{bananaQuan} </td>
            </tr>
            <tr>
              <td>Pineapple 🍍</td>
              <td>{pineappleQuan} </td>
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Fruits;
