import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { getData } from "../context/DataContext";

const Category = () => {
  // const { categoryOnlyData } = getData();
  const navigatae = useNavigate();
  const { data } = getData();

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };
  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
        {categoryOnlyData?.map((item, index) => {
          return (
            <button
              onClick={() => navigatae(`/category/${item}`)}
              key={index}
              className="bg-gradient-to-r from-yellow-400 to-yellow-900 
             hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400 
             transition-all duration-300 transform hover:scale-105 text-white px-3 py-1 rounded-md cursor-pointer"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
