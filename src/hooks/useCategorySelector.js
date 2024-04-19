import {useState} from "react";

export function useCategorySelector(initialCategory) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  
  const handleSelectCategory = category => {
    setSelectedCategory(category);
  };

  return {selectedCategory, handleSelectCategory};
}