import React, { useEffect, useState } from "react";

const FruitsData = [
  "Apple",
  "Banana",
  "Cherry",
  "Dragon Fruit",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Ugli Fruit",
  "Vanilla",
  "Watermelon",
  "Xigua",
  "Yellow Passion Fruit",
  "Zucchini",
];

const Autocomplete = () => {
  const [input, setInput] = useState("");
  const [sugestions, setSugestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.length > 0) {
        const filterSugestion = FruitsData.filter((item) =>
          item.toLowerCase().includes(input.toLowerCase()),
        );
        setSugestions(filterSugestion);
      } else {
        setSugestions([]);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const handleSelect = (selectedItem) => {
    setInput(selectedItem);
    setSugestions([]);
  };
  console.log("input", input);
  console.log("ss", sugestions);
  return (
    <div>
      <input
        value={input}
        placeholder="Search..."
        onChange={(e) => handleChange(e)}
      />
      <ul>
        {sugestions.map((item, index) => (
          <li key={index} onClick={() => handleSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
