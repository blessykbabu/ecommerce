import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "./admin.css";
import SuccessComponent from "./SuccessComponent";
import urls from "../../Urls/url";

export default function AdViewProducts() {
  const HOSTED_SERVER_URL=urls();
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const [deletedata, setDeletedata] = useState(false);
  const [error, setError] = useState(false);

  const [validationMessage, setValidationMessage] = useState();

 
  
  const handledelete = () => {
    
    setDeletedata(false);
  };
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
 
  const onDelete = async (id) => {
    setLoading(true)
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`${HOSTED_SERVER_URL}/userproducts/delete/${id}`,  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );;
      if (response.data.success) {
        setDeletedata(true); // Set deletedata to true upon successful deletion
        setValidationMessage(response.data.message);
      } else {
        setError(true); // Set error in case of deletion failure
      }
      setUpdate(false);
    } catch (error) {
      setError(true); // Set error in case of request failure
      console.log("Error in delete", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };
  

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            {productsInRows.map((rowProducts, rowIndex) => (
              <div className="row" key={rowIndex}>
                {rowProducts.map((list, index) => (
                  <div className="col-12 d-flex m-3" key={index}>
                    <div className="product">
                      <img src={`${HOSTED_SERVER_URL}/${list.pimage}`} height={300} width={300} />
                    </div>
                    <div className="prodata">
                      <table className=" mx-auto">
                        <tbody>
                          <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>{list.name}</td>
                          </tr>
                          <tr>
                            <td>Category</td>
                            <td>:</td>
                            <td>{list.category}</td>
                          </tr>
                          <tr>
                            <td>Price</td>
                            <td>:</td>
                            <td>${list.price}</td>
                          </tr>
                          <tr>
                            <td style={{ verticalAlign: "top" }}>
                              Description
                            </td>
                            <td style={{ verticalAlign: "top" }}>:</td>
                            <td style={{ verticalAlign: "top" }}>
                              {list.description}
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="3" className="text-center">
                              <button className="btn btn-primary m-2" onClick= {() => onDelete(list._id)}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
      {deletedata && (
        <SuccessComponent message={validationMessage} onClose={handledelete} />
      )}  
    </>
  );
}
