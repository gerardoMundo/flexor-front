import { useProductContext } from "../context/ProductsContext";
import { useForm } from "../hooks";

export const NewProduct = () => {
  const { addProduct } = useProductContext();

  const { form, onInputChange, resetForm } = useForm({
    _id: "",
    description: "",
    quantity: "",
    price: "",
    discount: "",
  });

  const { _id, description, quantity, price, discount } = form;

  const onNewProduct = (event) => {
    event.preventDefault();

    //Métodos complementarios para spinner loading, animaciones, etc.

    const newProduct = {
      _id,
      description,
      quantity,
      price,
      discount,
    };

    addProduct(newProduct);

    //postNewProduct(newProduct)...

    resetForm();
  };

  return (
    <>
      <h3 className="text-secondary">Agrega un nuevo producto</h3>
      <form onSubmit={onNewProduct}>
        <div>
          <label className="form-label" htmlFor="_id">
            Id del producto
          </label>
          <input
            className="form-control"
            name="_id"
            value={_id}
            onChange={onInputChange}
            id="_id"
            placeholder="ID"
            type="number"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="description">
            Desccripción
          </label>
          <input
            className="form-control"
            name="description"
            value={description}
            onChange={onInputChange}
            id="description"
            placeholder="Describe el producto"
            type="text"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="quantity">
            Cantidad
          </label>
          <input
            className="form-control"
            name="quantity"
            value={quantity}
            onChange={onInputChange}
            id="quantity"
            placeholder="Número"
            type="number"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="price">
            Precio
          </label>
          <input
            className="form-control"
            name="price"
            value={price}
            onChange={onInputChange}
            id="price"
            placeholder="Precio"
            type="number"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="discount">
            Descuento
          </label>
          <input
            className="form-control"
            name="discount"
            value={discount}
            onChange={onInputChange}
            id="discount"
            placeholder="Descuento"
            type="number"
          />
        </div>
        <div className="d-grid d-md-block mb-4">
          <button className="btn btn-primary mt-2 ">Enviar</button>
        </div>
      </form>
    </>
  );
};
