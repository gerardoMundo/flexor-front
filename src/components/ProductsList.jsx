import { useEffect } from "react";
import { useProductContext } from "../context/ProductsContext";
import { Product } from "./Product";

export const ProductsList = () => {
  const { productsArr } = useProductContext();

  useEffect(() => {
    console.log(productsArr);
  }, [productsArr]);

  // Acá traería data de la api para obtener la lista de los productos dados de alta
  // al momento de renderizar el componente
  // useEffect(() => {
  //   getProductsList().then(({ data }) => {
  //     setList(data.rows);
  //   });
  // }, [list]);

  return (
    <div>
      <h3 className="text-secondary">Lista de productos</h3>
      <div>
        {productsArr.map((product) => {
          return <Product key={product._id} {...product} />;
        })}
      </div>
    </div>
  );
};
