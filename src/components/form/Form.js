import React from "react";
import "./Form.css";

function Form({ update }) {
  return (
    <form>
      <select name="manager" onChange={update}>
        <option value={"yarn"}>yarn</option>
        <option value={"npm"}>npm</option>
      </select>
      <input
        type="text"
        name="ghname"
        placeholder="GitHub Username"
        onChange={update}
      />
      <input
        type="text"
        name="repo"
        placeholder="GitHub repo name"
        onChange={update}
      />
    </form>
  );
}

export default Form;
