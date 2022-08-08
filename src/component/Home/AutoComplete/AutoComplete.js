import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "./style.css";

import { changeSearchValue } from "../../../Slices/books";

const AutoComplete = ({ options, value, setValue }) => {
  const dispatch = useDispatch();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = options?.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );

  const autocompleteRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSuggestionClick = (suggetion) => {
    setValue(suggetion);
    dispatch(changeSearchValue(suggetion));

    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete" ref={autocompleteRef}>
      <input
        value={value}
        onChange={handleChange}
        placeholder="Search"
        onFocus={() => (setShowSuggestions(true), setValue(""))}
      />
      {showSuggestions && (
        <div
          style={{
            maxHeight: "500px",
            overflow: "scroll",
            position: "absolute",
            zIndex: "100",
          }}
        >
          <ul className="suggestions">
            {suggestions?.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
            {suggestions.length === 0 && (
              <li style={{ color: "red" }}>
                There is no book with this info!!!
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
