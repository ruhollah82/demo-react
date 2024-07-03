import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "@mui/material/Button";
import ErrorModal from "../UI/ErrorModal";
import TextField from "@mui/material/TextField";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredusername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredusername.trim().length === 0) {
      setError({
        title: "Invalid input !",
        message: "Please enter username !",
      });
      return;
    }
    if (enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input !",
        message: "Please enter Age !",
      });
      return;
    }
    if (+enteredAge <= 0) {
      setError({
        title: "Invalid input !",
        message: "Age must be a positive number !",
      });
      return;
    }

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
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.card}>
        <form onSubmit={AddUserHandler} className={classes.userform}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={enteredusername}
            onChange={userChangeHandler}
          />
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit" variant="contained" size="small">
            Add user
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
