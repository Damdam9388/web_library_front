import React, { useState, useEffect } from "react";
import axios from "axios";

const Select = ({ name, endpoint, placeholder, lblAttributeKey }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("tokenUser");
    const config = { headers: { Authorization: "Bearer " + token } };

    axios.get(endpoint, config).then(
      (response) => {
        const selectItems = response.data["hydra:member"];
        setItems(selectItems);
        console.log("******ITEM*****");
        console.log(selectItems);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [endpoint]);

  return (
    <div>
      <select
        variant="outline"
        name={name}
        id={name}
        className="form-control"
      >
        <option value={placeholder}>{placeholder}</option>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item[lblAttributeKey]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
