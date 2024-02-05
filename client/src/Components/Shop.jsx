import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import urls from "../../utils/url";
import Loader from "./Loader";
import { ToastContainer } from 'react-toastify';
export default function Shop() {
  const HOSTED_SERVER_URL = urls();
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      // console.log("token in shop",token)
      axios
        .get(
          `${HOSTED_SERVER_URL}/fetch/products?page=${currentPage}&pageSize=${pageSize}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setLists(response.data.data.datas);
          console.log("total_pages", response.data.data.total_pages);
          setTotalPages(response.data.data.total_pages);
        })
        .catch((error) => {
          console.log("get error:", error.message ? error.message : error);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [currentPage, pageSize, loading]);

  const productsInRows = [];
  for (let i = 0; i < lists.length; i += 4) {
    const rowProducts = lists.slice(i, i + 4);
    productsInRows.push(rowProducts);
  }
  const handleOrderClick = (list) => {
    // const token = localStorage.getItem("token");

    // if (token) {
      navigate(`/order/product/${list._id}`);
    // } else {
    //   navigate("/login");
    // }
  };

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="container">
            {productsInRows.map((rowProducts, rowIndex) => (
              <div className="row" key={rowIndex}>
                {rowProducts.map((list, index) => (
                  <div className="col-md-3 mt-5" key={index}>
                    <div className="product card mb-3">
                      <span className="product__price">${list.price}</span>
                      <img
                        className="product__image"
                        src={`${HOSTED_SERVER_URL}/${list.pimage}`}
                        height={300}
                        width={300}
                      />
                      <h4 className="product__title">{list.name}</h4>
                      <hr />

                      <button className="product__btn btn view" onClick={() => handleOrderClick(list)}>
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <nav
              className="d-flex justify-content-center"
              aria-label="Page navigation"
            >
              <ul className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index + 1}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <Link
                      // to={`?page=${index + 1}`}
                      className="page-link"
                      onClick={() => (
                        setCurrentPage(index + 1), setLoading(true)
                      )}
                    >
                      {index + 1}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
