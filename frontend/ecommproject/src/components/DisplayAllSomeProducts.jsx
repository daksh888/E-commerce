import React from "react";
import "./SomeProducts.scss";
import { useNavigate } from "react-router-dom";

const SomeProducts = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/home/product-details");
  };
  return (
    <>
      <div className="some-products-container">
        <div className="text">
          <h5 className="for-our-product-heading">Our Products</h5>
          <h3>Explore our products</h3>
        </div>
        <div className="products-container">
          <div className="product-container" onClick={handleCardClick}>
            <div className="img-container">
              <img className="img-for-hover" src="/src/assets/img-1.png" alt="" />
              {/* <img className="eye" src="./src/assets/open-eye.png" alt="" /> */}
              <b className="product-name">Product 1</b>
              <div className="prize-star">
                <p className="product-prize">$350</p>
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/star.png" alt="" />
                <p>(75)</p>
              </div>
            </div>  
          </div>
          <div className="product-container">
            <div className="img-container">
              <img className="img-for-hover" src="/src/assets/img-2.png" alt="" />
              <b className="product-name">Product 2</b>
              <div className="prize-star">
                <p className="product-prize">$300</p>
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/star.png" alt="" />
                <img src="/src/assets/star.png" alt="" />
                <p>(75)</p>
              </div>
            </div>
          </div>
          <div className="product-container">
            <div className="img-container">
              <img className="img-for-hover" src="/src/assets/img-3.png" alt="" />
              <b className="product-name">Product 3</b>
              <div className="prize-star">
                <p className="product-prize">$350</p>
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/star.png" alt="" />
                <img src="/src/assets/star.png" alt="" />
                <img src="/src/assets/star.png" alt="" />
                <p>(50)</p>
              </div>
            </div>
          </div>
          <div className="product-container">
            <div className="img-container">
              <img className="img-for-hover" src="/src/assets/img-4.png" alt="" />
              <b className="product-name">Product 4</b>
              <div className="prize-star">
                <p className="product-prize">$350</p>
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/star.png" alt="" />
                <p>(75)</p>
              </div>
            </div>
          </div>
          <div className="product-container">
            <div className="img-container">
              <img className="img-for-hover" src="/src/assets/img-5.png" alt="" />
              <b className="product-name">Product 5</b>
              <div className="prize-star">
                <p className="product-prize">$350</p>
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/star.png" alt="" />
                <p>(75)</p>
              </div>
            </div>
          </div>
          <div className="product-container">
            <div className="img-container">
              <img className="img-for-hover" src="/src/assets/img-6.jpg" alt="" />
              <b className="product-name">Product 6</b>
              <div className="prize-star">
                <p className="product-prize">$350</p>
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/color-star.png" alt="" />
                <img src="/src/assets/star.png" alt="" />
                <p>(75)</p>
              </div>
            </div>
          </div>
         
        </div>
        <button className="btn" >View All</button>
      </div>
    </>
  );
};

export default SomeProducts;
