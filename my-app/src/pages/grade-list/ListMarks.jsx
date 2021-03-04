import GradeList from "./GradeList";

const ListMarks = () => {
  const nameList = [
    { id: "1001", name: "Hamza", score: 75 },
    { id: "1002", name: "Sharique", score: 82 },
    { id: "1003", name: "Zaid", score: 36 },
    { id: "1004", name: "Yahya", score: 65 },
    { id: "1005", name: "Raghav", score: 33 },
    { id: "1006", name: "Devansh", score: 43 },
    { id: "1007", name: "Virat", score: 25 },
    { id: "1008", name: "Vicky", score: 98 },
    { id: "1009", name: "Kinzah", score: 71 },
    { id: "1010", name: "Dhruv", score: 30 },
  ];

  return (
    <>
      <div>
        <GradeList newList={nameList} />
      </div>
    </>
  );
};
export default ListMarks;
