import Product from "./Product";

const List = ({ products }) => {
  return (
    <div className="products__wrap">
      {products.map((el, idx) => (
        <Product
          key={idx}
          name={el.product}
          image={el.image}
          price={el.price}
          onSale={el.onSale}
        />
      ))}
    </div>
  );
};

export default List;
