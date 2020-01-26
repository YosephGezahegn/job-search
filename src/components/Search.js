import React, { useState, useEffect } from "react";

const Search = () => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alert("empty field");
    } else {
      console.log(text);
    }
  };

  const handleChange = e => {
    setText(e.target.value);
    console.log(text);
  };
  return (
    <form>
      <label className="sr-only" htmlFor="inlineFormInputName2">
        Name
      </label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        id="inlineFormInputName2"
        placeholder="Jane Doe"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />

      <button
        type="submit"
        className="btn btn-primary mb-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Search;
