export const Product = ({ _id, description, quantity, price, discount }) => {
  return (
    <div className="card border-primary my-2">
      <div className="col card-body">
        <p className="card-subtitle">
          ID: <span className="card-text">{_id}</span>
        </p>
        <p className="card-subtitle">
          Descripción:{" "}
          <span className="card-text text-body-secondary">{description}</span>
        </p>
        <p className="card-subtitle">
          Cantidad: <span className="card-text">{quantity}</span>
        </p>
        <p className="card-subtitle">
          Precio: <span className="card-text">{price}</span>
        </p>
        <p className="card-subtitle">
          Descuento: <span className="card-text">{discount}</span>
        </p>
      </div>
    </div>
  );
};
