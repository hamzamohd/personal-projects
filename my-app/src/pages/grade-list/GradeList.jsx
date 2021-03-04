const GradeList = ({ newList }) => {
  let reactions = [];
  let grades = [];
  for (let i = 0; i < newList.length; i++) {
    if (newList[i].score > 40) {
      reactions.push("😀");
    }
    if (newList[i].score < 40) {
      reactions.push("😞");
    }
  }

  for (let i = 0; i < newList.length; i++) {
    if (newList[i].score > 80) {
      grades.push("A");
    }
    if (newList[i].score > 60 && newList[i].score < 80) {
      grades.push("B");
    }
    if (newList[i].score > 40 && newList[i].score < 60) {
      grades.push("C");
    }
    if (newList[i].score < 40) {
      grades.push("D");
    }
  }

  const nameList = [];
  for (let i = 0; i < newList.length; i++) {
    nameList.push(
      <li>{`ID = ${newList[i].id} Name = ${newList[i].name} Score = ${newList[i].score}  ${reactions[i]} Grade = ${grades[i]}`}</li>
    );
  }
  return <ul>{nameList}</ul>;
};
export default GradeList;
