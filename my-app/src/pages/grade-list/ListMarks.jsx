import GradeList from "./GradeList";

const ListMarks = () => {
  const nameList = [
    { id: "1001", name: "Hamza", score: 75, grade: "", reaction: "" },
    { id: "1002", name: "Sharique", score: 82, grade: "", reaction: "" },
    { id: "1003", name: "Zaid", score: 36, grade: "", reaction: "" },
    { id: "1004", name: "Yahya", score: 65, grade: "", reaction: "" },
    { id: "1005", name: "Raghav", score: 33, grade: "", reaction: "" },
    { id: "1006", name: "Devansh", score: 43, grade: "", reaction: "" },
    { id: "1007", name: "Virat", score: 25, grade: "", reaction: "" },
    { id: "1008", name: "Vicky", score: 98, grade: "", reaction: "" },
    { id: "1009", name: "Kinzah", score: 71, grade: "", reaction: "" },
    { id: "1010", name: "Dhruv", score: 30, grade: "", reaction: "" },
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
