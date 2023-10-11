import { NewProduct, ProductsList } from "../components";

export const MainPage = () => {
  return (
    <div className="container">
      <h1 className="text-primary">Carrito de compras</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <NewProduct />
        </div>
        <div className="col-12 col-md-6">
          <ProductsList />
        </div>
      </div>
    </div>
  );
};
