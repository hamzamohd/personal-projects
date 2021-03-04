const GradeList = ({ newList }) => {
  // let reaction = "";
  // let grade = "";

  newList.forEach(({ score, reaction }) => {
    if (score > 40) {
      reaction = "😀";
    }
    if (score < 40) {
      reaction = "😞";
    }
  });
  newList.forEach(({ score, grade }) => {
    if (score > 80) {
      grade = "A";
    }
    if (score > 60 && score < 80) {
      grade = "B";
    }
    if (score > 40 && score < 60) {
      grade = "C";
    }
    if (score < 40) {
      grade = "D";
    }
  });
  return (
    <>
      <ul>
        {newList.map(({ id, name, score, grade, reaction }) => (
          <>
            <li>{`ID = ${id} Name = ${name} Score = ${score} ${reaction} Grade = ${grade} `}</li>
          </>
        ))}
      </ul>
    </>
  );
};
export default GradeList;
