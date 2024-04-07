import "./styles.css";

const ECommerceHeader = () => {
  return (
    <div className="ecommerce-header-container">
      <div className="ecommerce-header">
        <h1 className="ecommerce-header-logo">LOGO</h1>
      </div>
      <ul className="ecommerce-navbar">
        <li className="ecommerce-nav-routes">SHOP</li>
        <li className="ecommerce-nav-routes">SKILLS</li>
        <li className="ecommerce-nav-routes">STORIES</li>
        <li className="ecommerce-nav-routes">ABOUT</li>
        <li className="ecommerce-nav-routes">CONTACT US</li>
      </ul>
    </div>
  );
};

export default ECommerceHeader;
