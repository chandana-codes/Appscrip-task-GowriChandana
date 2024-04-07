import ECommerceHeader from "../ECommerceHeader";
import ProductsContainer from "../ProductsContainer";

import "./styles.css";

const ECommerceContainer = () => {
  return (
    <div className="ecommerce-container">
      <ECommerceHeader />
      <ProductsContainer />
    </div>
  );
};

export default ECommerceContainer;
