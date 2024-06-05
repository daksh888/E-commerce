import Footer from "../../components/Footer";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import { Ripple, initMDB } from "mdb-ui-kit";
import "./VendorDeshboardStyle.scss";
import { useCreateCategoryMutation, useGetAllCategoryQuery,useCreateProductMutation,useGetAllProductQuery } from "../../serveces/auth";
import { useNavigate } from "react-router-dom";
import SomeProducts from "../../components/DisplayAllSomeProducts";

initMDB({ Ripple });

const VendorDeshboard = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [productShow, setProductShow] = useState(false);
  const [fadeType, setFadeType] = useState(""); // To manage the fade-in and fade-out
  const [createCategory, { isLoading: isCreating }] = useCreateCategoryMutation();
  const [createProduct, { isLoading: productCreating }] = useCreateProductMutation();
  const { data, error, isLoading ,refetch} =  useGetAllCategoryQuery();
  const { data: allProductData, error: allProductError, isLoading : allProductisLoading,refetch: allProductRefetch} =  useGetAllProductQuery();
  const token = localStorage.getItem("accessToken")
  console.log("token",token)
  if(allProductData){

    console.log("data product", allProductData)
  } 

  const [formData, setFormData] = useState({
    category: "",
    name: "",
    inStock: false,
    price: "",
    detail: "",
    img: "",
  });

  const handleShow = () => {
    setShow(true);
    setTimeout(() => setFadeType("show"), 10); // Delay to ensure the class is added after render
  };

  const handleClose = () => {
    setFadeType("");
    setTimeout(() => setShow(false), 300); // Match timeout with the CSS transition duration
  };

  const handleCategoryNameSubmit = async (e) => {
    e.preventDefault();
    console.log("categoryName", categoryName);
    const responseData = await createCategory({ category_name: categoryName });
    console.log(responseData);
    setCategoryName("");
    refetch();
    handleClose();

  };

  const inputChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        // Display a preview of the selected image
        const imgPreview = document.getElementById("img-preview");
        if (imgPreview) {
          imgPreview.src = reader.result;
        }

        // Set the image data to the formData
        setFormData({ ...formData, [name]: reader.result });
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      const { value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const responseData = await createProduct( formData );
    // You can send the formData to the backend or perform any other action here
    handleProductClose();
  };

  const handleProductShow = () => setProductShow(true);
  const handleProductClose = () => setProductShow(false);

  useEffect(() => {
    console.log("If token is  availabale then render vendor ", token)
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <>
      <Navbar></Navbar>

      <div className="d-grid gap-2 d-md-flex m-4 justify-content-md-end">
        {/*--------------------------- create category----------------------- */}
        <button
          type="button"
          className="btn btn-primary me-md-2"
          onClick={handleShow}
          style={{ backgroundColor: "rgb(246, 87, 28)" }}
        >
          Create Category +
        </button>

        {show && (
          <div
            className={`modal fade ${fadeType}`}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog d-flex justify-content-center">
              <div className="modal-content w-75">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel2">
                    Create Category
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body p-4">
                  <form onSubmit={handleCategoryNameSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="category-name"
                        value={categoryName}
                        onChange={inputChange}
                        className="form-control"
                        required
                      />
                      <label className="form-label" htmlFor="category-name">
                        Category Name
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={isCreating}
                    >
                      {isCreating ? "Creating..." : "Create"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*--------------------------- create product----------------------- */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleProductShow}
        >
          Add Product +
        </button>

        {productShow && (
          <div
            className="modal fade show"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="addProductModal"
            aria-hidden="true"
            style={{ backgroundColor: "rgba(0,0,0,0.5)", display: "block" }}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Product</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleProductClose}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        className="form-select"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Category</option>
                        {data && data.map((cat) => (
                          <option className="text-black" key={cat.id} value={cat.id}>
                            {cat.category_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        id="inStock"
                        name="inStock"
                        className="form-check-input"
                        checked={formData.inStock}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="inStock" className="form-check-label">
                        In Stock
                      </label>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="price" className="form-label">
                        Price
                      </label>
                      <input
                        type="text"
                        id="price"
                        name="price"
                        className="form-control"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="detail" className="form-label">
                        Details
                      </label>
                      <textarea
                        id="detail"
                        name="detail"
                        className="form-control"
                        value={formData.detail}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="img" className="form-label">
                        Image URL
                      </label>
                      <input
                        type="file"
                        id="img"
                        name="img"
                        className="form-control"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleProductClose}
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* -------------------- All Producs and Categories Section ----------------------------------------------------- */}
      <div className="product-category-container">
        <h2 className="title">All Products</h2>
        <div className="all-products">
        {allProductisLoading && <p>Loading...</p>}
          {allProductError && <p>Error fetching categories</p>}
          {allProductData && allProductData.map((product) => (
            <div className="products">
            <img src={product.image} alt="img" />
            <div className="product-text">
              <h5>{product.name}</h5>
              <p>{product.category}</p>
              <p>{product.in_stock}</p>
              <span>{product.price}</span>
            </div>
          </div>
          ))}
          
        
        </div>
        <aside className="all-category">
          <h3>Categories</h3>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error fetching categories</p>}
          {data && data.map((category) => (
            <div key={category.id} className="category-item text-center fs-4">
              {category.category_name}
            </div>
          ))}
        </aside>
      </div>

      <Footer></Footer>
    </>
  );
};

export default VendorDeshboard;
