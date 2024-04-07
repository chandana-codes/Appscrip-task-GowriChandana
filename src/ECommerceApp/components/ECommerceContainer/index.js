import { Helmet } from "react-helmet";
import ECommerceHeader from "../ECommerceHeader";
import ProductsContainer from "../ProductsContainer";

import "./styles.css";
import ECommerceFooter from "../ECommerceFooter";

const ECommerceContainer = () => {
  return (
    <div className="ecommerce-container">
      <Helmet>
        <title>E-Commerce Website</title>
        <meta name="description" content="E-Commerce Website" />
      </Helmet>
      <ECommerceHeader />
      <ProductsContainer />
      <ECommerceFooter />
    </div>
  );
};

export default ECommerceContainer;
