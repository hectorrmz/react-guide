import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux';

const Products = (props) => {
  const products = useSelector((state) => state.product.products);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
