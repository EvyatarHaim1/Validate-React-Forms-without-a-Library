import "./App.css";
import React, { useState } from 'react';
import FormInput from "./components/FormInput";

function App() {

  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    birthday: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: "Username should be 3-16 characters and shoudn't include any special characters!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "Password should be 8-20 characters and it should include at least 1 letter, 1 number and 1 special character!",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm Password",
      label: "ConfirmPassword",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be a valid email address ",
      required: true,
    },
    {
      id: 5,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      errorMessage: "Enter your birthday Please!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("The form is submitted!");
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  console.log(values)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
