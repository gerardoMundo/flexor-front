import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [productsArr, setProductsArr] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const addProduct = (newProduct) => {
    setProductsArr([...productsArr, newProduct]);
    localStorage.setItem(
      "products",
      JSON.stringify([...productsArr, newProduct])
    );
  };

  return (
    <ProductContext.Provider value={{ productsArr, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
