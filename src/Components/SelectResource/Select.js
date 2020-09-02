import React, { useState, useEffect } from "react";
import axios from "axios";

const Select = ({ name, endpoint, placeholder, lblAttributeKey }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("tokenUser");

    axios.get(endpoint, { headers: { Authorization: "Bearer " + token } })
        .then((response) => {
        const selectItems = response.data["hydra:member"];
        setItems(selectItems);
        })
        .catch((error) => {
        console.log(error);
      });
  }, [endpoint]);

  return (
    <div>
      <select
        placeholder={placeholder}
        name={name}
        id={name}
        className="form-control"
      >
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
