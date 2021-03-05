const Questions = () => {
  return (
    <>
      <div>
        <h1>Question 1 : </h1>
        <p>
          Explain the object approach. Why it wasn’t working? What you learnt
          about destructuring through this?
        </p>
        <h1>Answer 1 :</h1>
        <p>
          At first I made an array of 10 objects called "nameList" in which each
          object had the following properties: "id", "name", "score",
          "reaction", "grade".
          <br />
          While I was providing values to all of the properties of the objects,
          I did not provide any value to the "reaction", and the "grade"
          property, but provided them with an empty string, because I wanted
          those properties to be computed by the code.
          <br />
          Later, when I duplicated the array, I applied a forEach loop on it to
          change the value of the "reaction" and "grade" properties, based on
          the score of each individual object.
          <br />
          Unfortunately, this wasn't working intitally, becuase I was
          destructuring the objects in the forEach loop and provide a local
          "reaction and "grade" variable to store the respective reaction
          emojies and grades of each individual objects, which was same as
          saying : <br />
          "reaction = obj.reaction"
          <br />
          "grade = obj.grade"
        </p>
      </div>
    </>
  );
};

export default Questions;
