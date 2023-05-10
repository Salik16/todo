import React, { useEffect } from "react";
import { useCount } from "../contexts/CountContextProvider";
import List from "./List";

const ListProduct = () => {
  const { products, getProducts } = useCount();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products.map((item, index) => (
        <List key={index} {...item} />
      ))}
    </div>
  );
};

export default ListProduct;
