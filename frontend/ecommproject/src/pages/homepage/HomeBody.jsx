import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import "../homepage/Styles.scss";

const HomeBody = () => {
  return (
    <>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            className="d-block w-100 carousel-img"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            className="d-block w-100 carousel-img"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            className="d-block w-100 carousel-img"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
      <div className="by-category">
        <h3 className="category-heading">Category</h3>
        <h3 className="browser-by-category-heading">Browse By Category</h3>
        <div className="category-section">
          <section className="img-section ">
            <img src="./src/assets/iphone.png" alt="img" />
            <h4>Watch</h4>
          </section>
          <section className="img-section">
            <img src="./src/assets/computer.png" alt="img" />

            <h4>Watch</h4>
          </section>
          <section className="img-section">
            <img src="./src/assets/camera.png" alt="img" />
            <h4>Watch</h4>
          </section>
          <section className="img-section">
            <img src="./src/assets/headphones.png" alt="img" />
            <h4>Watch</h4>
          </section>
          <section className="img-section">
            <img src="./src/assets/gamepad.png" alt="img" />
            <h4>Watch</h4>
          </section>
        </div>
        <button type="button" class="btn ">
          Vew All
        </button>
      </div>
{/*-------------------------- All Productd -------------------------*/}
<div className="by-category">
  <h3 className="category-heading">Category</h3>
  <h3 className="browser-by-category-heading">Browse By Category</h3>
  <div className="category-section">
    <section style={{ backgroundColor: '#eee', height: "200px" }}>
      <div className="container py-5" style={{height:"50%"}}>
        <div className="row">
          <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div className="card">
              <div className="d-flex justify-content-between p-3">
                <p className="lead mb-0">Today's Combo Offer</p>
                <div
                  className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{ width: '35px', height: '35px' }}
                >
                  <p className="text-white mb-0 small">x4</p>
                </div>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                className="card-img-top"
                alt="Laptop"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1099</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Notebook</h5>
                  <h5 className="text-dark mb-0">$999</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">6</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div className="card">
              <div className="d-flex justify-content-between p-3">
                <p className="lead mb-0">Today's Combo Offer</p>
                <div
                  className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{ width: '35px', height: '35px' }}
                >
                  <p className="text-white mb-0 small">x2</p>
                </div>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
                className="card-img-top"
                alt="Laptop"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1199</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">HP Envy</h5>
                  <h5 className="text-dark mb-0">$1099</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">7</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div className="card">
              <div className="d-flex justify-content-between p-3">
                <p className="lead mb-0">Today's Combo Offer</p>
                <div
                  className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{ width: '35px', height: '35px' }}
                >
                  <p className="text-white mb-0 small">x3</p>
                </div>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
                className="card-img-top"
                alt="Gaming Laptop"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Laptops
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>$1399</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Toshiba B77</h5>
                  <h5 className="text-dark mb-0">$1299</h5>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                    Available: <span className="fw-bold">5</span>
                  </p>
                  <div className="ms-auto text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <button type="button" className="btn ">
    View All
  </button>
</div>


      {/* <style>{`
        
      `}</style> */}
    </>
  );
};

export default HomeBody;
