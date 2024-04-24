import {useState} from "react";

export function useSelection(initialValue) {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  
  const handleSelectValue = value => {
    setSelectedValue(value);
  };

  return {selectedValue, handleSelectValue};
}