import React, { useState, useEffect } from "react";
import axios from "axios";
import bootstrap from "bootstrap";
function Example5() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData("https://dummyjson.com/products");
  }, []);
  const fetchData = async (url) => {
    let result = await axios.get(url);
    console.log(result);
    setProducts(result.data.products);
  };
  return (
    <div>
      <h1
        style={{
          color: "#252424",
          textAlign: "center"
        }}
      >
        This is our shopping site
      </h1>
      <div className="container-fluid">
        <div className="row">
          {products.map((e) => {
            return (
              <>
                <div class="col-12 col-md-3 col-sm-6 text-center mt-1 mb-1 card d-flex flex-column justify-content-center align-items-center p-3" style={{
                  borderRadius:'25px'
                }}>
                  <img
                    style={{
                      borderRadius: "1.5rem",
                      boxShadow: "5px 5px 10px #ffffff",
                      height: "200px",
                      width: "200px"
                    }}
                    src={e.images[0]}
                    alt=""
                    className=" card-img-top"
                  />
                  <div class="card-body">
                    <h2>{e.brand}</h2>
                    <h3>{e.title}</h3>
                    <p>{e.description}</p>
                  </div>
                  <div
                    className="card-footer d-flex gap-2"
                    style={{ background: "none" }}
                  >
                    <button className="btn btn-warning">ADD TO CART</button>
                    <button className="btn btn-danger">BUY NOW</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Example5;
