const Examples = () => {
  let info = { language: "Hindi", nationality: "Indian" };
  let { language } = info;
  language = "English";
  console.log(language);
  console.log(info);

  const newArray = [
    { name: "Hamza", height: "6'3", age: "22" },
    { name: "Sharique", height: "6'2", age: "26" },
    { name: "Zaid", height: "6'0", age: "24" },
  ];
  //   const newArray = newArray;
  newArray.forEach(({ name }) => {
    name = name + "Zaman";
    console.log(name);
  });
  console.log(newArray);
  newArray.forEach((n) => console.log(n));
  newArray.forEach((n) => {
    n.name += " Zaman";
  });
  console.log(newArray);
  return null;
};
export default Examples;
