const Questions = () => {
  return (
    <>
      <div>
        <h1>Question 1 : </h1>
        <h2>
          Explain the object approach. Why it wasn’t working? What you learnt
          about destructuring through this?
        </h2>
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
          destructuring the objects in the forEach loop and provided a local
          "reaction and "grade" variable to store the respective reaction
          emojies and grades of each individual objects, which was same as
          saying :
          <h4>
            reaction = obj.reaction
            <br />
            grade = obj.grade,
          </h4>
          and then the code was changing the local variables based on the score
          of each individual object. So,then when the object was being called it
          was rendering the original object with the original properties,
          "obj.grade/obj.reaction".
          <br />
          Through this I learned the concept of destructuring. Destructuring
          basically helps you store the propertie of the object in a local
          variable with the same name. This is preferred by coders as it saves a
          lot of time and you don't have to add the prefix "obj." everytime you
          want to use it.
          <br />
          For Example:
          <h4>
            const value = {`{index: 1001, name : Chris, age : 22}`}
            <br />
            Now, "value" is an object with the properties, "index", "name", and
            "age"
            <br />
            If we had to destructure this object we would say:
            <br />
            let {`{index, name, age}`} = value
            <br />
          </h4>
          which infact is same as saying,
          <h4>
            let index = value.index;
            <br />
            let name = value.name;
            <br />
            let age = value.age;
          </h4>
          and now we can manipulate the index, name and age variables without
          changing the original object and its properties.
        </p>
        <h1>Question 2 :</h1>
        <h2>
          How map works? How to convert map to for loop? How forEach works? How
          to convert for loop to forEach?
        </h2>
        <h1>Answer 2 :</h1>
        <p>
          The map() method is applied on an array with multiple elements. It
          accepts a function which is then applied to each and every element of
          the original array and the returns the array with the new elements.{" "}
          <br />
          The map() method is actually a form of a loop which is applying the
          function it has been passed to every single element of the array.
          <br />
          However, it does not change the original array.
          <br />
          Syntax for map() is :
          <h4>
            const newArray = [1,2,3,4,5];
            <br />
            const modifiedArray = newArray.map((num)=>num*10)
          </h4>
          Shown above, newArray is an array of five numbers.
          <br />
          In the next line, newArray.map() is accepting a function which is
          passing every element(number) to a local variable "num" and then
          multiplying num by 10.
          <br />
          Now if we do console.log(modifiedArray), the result would still be
          <h4>[10, 20, 30, 40 , 50]</h4>
          However, if we do console.log(newArray), the result would still be
          <h4>[1, 2, 3, 4, 5]</h4>
        </p>
        <p>
          The work that map() does can also be done through other forms of loop.
          <br />
          Taking the example shown above, we would now be converting
          newArray.map() into a for loop:
          <h4>
            const newArray= [1, 2, 3, 4, 5];
            <br />
            const modifiedArray=[];
            <br />
            for (let i =0; {`i < newArray.length`}; i++ )
            <br />
            {`{`}
            <br />
            const num = newArray[i]*10;
            <br />
            modifiedArray.push(num);
            <br />}
          </h4>
          Above, newArray is an array of 5 numbers, and modifiedArray is an
          empty array that doesn't have any elements yet.
          <br />
          The, we are running a for loop, with the condition, (
          {`i < newArray.length`}), and then a variable, num, is computing
          newArray*10 and in the next line we are pushing num into the
          modifiedArray, using the push() method, which is currently an empty
          array.
          <br />
          We are doing this for every element of the original array, newArray,
          without changing the original array.
          <br />
          After this, if we do console.log(modifiedArray), the result would be :
          <br />
          <h4>[10, 20, 30, 40, 50]</h4>
          and if we do console.log(newArray), the result would be :
          <h4>[1, 2, 3, 4, 5]</h4>
          Hence, we have succesfully converted the map() method into a for loop.
          <h2>Use of forEach() :</h2>
          forEach() method, just like map() method is also a form of a loop that
          is applied on an array. It also acceopts a function that is applied on
          each individual element of an array.
          <br />
          The only major difference between forEach() and map() is that map
          accepts a function and returns a new array with new elements(comouted
          by the function), while forEach() does not return a new array.
          <br />
          Below, is an example of a forEach() loop :
          <h4>
            const newArray = [1,2,3,4,5];
            <br />
            newArray.forEach((num)=>console.log(num*10))
          </h4>
          The result of this forEach statement in console would be:
          <h4>
            10
            <br />
            20
            <br />
            30
            <br />
            40
            <br />
            50
          </h4>
          <h2>Converting forEach() to for loop :</h2>
          If we had to convert the above forEach() statement into a for loop, it
          would go as follows:
          <h4>
            const newArray = [1, 2, 3, 4, 5];
            <br />
            for (let i = 0; {`i < newArray.length`}; i++)
            <br />
            {`{`}
            console.log(newArray[i]*10) ;
            <br />}
          </h4>
          The result of this for lopp in console would be:
          <h4>
            10
            <br />
            20
            <br />
            30
            <br />
            40
            <br />
            50
          </h4>
          Hence, we have succesfully converted the forEach() method into a for
          loop.
        </p>
      </div>
    </>
  );
};

export default Questions;
