import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredusername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredusername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1
    ) {
      return;
    }

    // console.log(enteredusername, enteredAge);
    props.onAddUser(enteredusername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const userChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={AddUserHandler} className="userform">
        <lable htmlFor="username">Username</lable>
        <input
          id="username"
          type="text"
          className="userInput"
          onChange={userChangeHandler}
          value={enteredusername}
        />
        <lable htmlFor="age">age (years)</lable>
        <input
          id="age"
          type="number"
          className="userInput"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
