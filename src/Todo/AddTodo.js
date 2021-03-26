import React, { useState } from "react";
import PropTypes from "prop-types";

//
//Создание собственного hooks
//
function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
    clear: () => {
      setValue("");
    },
    value: () => {
      return value;
    },
  };
}

function AddTodo({ onCreate }) {
  /*   
    const [value, setValue] = useState("");
  function submitHendler(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={submitHendler} style={{ marginBottom: "24px" }}>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button type="submit">+ Add todo</button>
    </form>
  ); */
  //
  // ниже тот же код, но улучшитый
  //

  let input = useInputValue();

  function submitHendler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form onSubmit={submitHendler} style={{ marginBottom: "24px" }}>
      <input {...input.bind} />
      <button type="submit">+ Add todo</button>
    </form>
  );
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodo;
