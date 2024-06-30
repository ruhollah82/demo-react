import React from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={AddUserHandler} className="userform">
        <lable htmlFor="username">Username</lable>
        <input id="username" type="text" className="userInput" />
        <lable htmlFor="age">age (years)</lable>
        <input id="age" type="number" className="userInput" />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
