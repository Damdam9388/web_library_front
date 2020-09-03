import React, { useState, useEffect } from "react";
import {axiosInstance} from "../../Axios";

const Select = ({ name, endpoint, placeholder, lblAttributeKey }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosInstance.get(endpoint)
        .then((response) => {
        const selectItems = response.data["hydra:member"];
        setItems(selectItems);
        },(error) => {
        console.log(error);
      });
  }, [endpoint]);

  return (
    <div>
      <select
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
