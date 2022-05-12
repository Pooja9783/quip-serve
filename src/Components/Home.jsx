import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/action";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../style/Home.css";
import axios from "axios";
const Home = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [pageNumber, setPageNumber] = useState(0);
  const [value, setValue] = useState([]);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(value.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const [postAdd, setPostAdd] = useState({
    title: "",
    body: "",
  });

  function onInput(e) {
    setPostAdd({
      ...postAdd,
      [e.target.name]: e.target.value,
    });
  }

  function OnAddPost(e) {
    e.preventDefault();
    try {
      axios.post(`https://jsonplaceholder.typicode.com/posts`, postAdd);
    } catch (err) {
      console.log(err);
    }
    // setPostAdd(postAdd.data);
  }

  useEffect(() => {
    dispatch(getData);
  }, []);

  const data = useSelector((state) => state.dataReducer.data);
  // console.log(data);
  useEffect(() => {
    setValue(data);
  });

  return (
    <div>
      <div className="conatiner bg-dark" style={{ width: "100%" }}>
        <div className="conatiner bg-danger p-4 ">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control m-2"
                placeholder="Title"
                aria-label="title"
                aria-describedby="addon-wrapping"
                name="title"
                onChange={(e) => onInput(e)}
              />
              <input
                type="text"
                className="form-control m-2"
                placeholder="Body"
                aria-label="body"
                aria-describedby="addon-wrapping "
                name="body"
                onChange={(e) => onInput(e)}
              />
              <button
                onClick={(e) => OnAddPost(e)}
                className="btn btn-warning m-3 mb-2 text-start "
              >
                Add Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light p-5">
        <div className="row">
          <div className="col">
            {data
              .slice(pagesVisited, pagesVisited + usersPerPage)

              .map((e) => {
                return (
                  <div
                    className="container d-flex border flex-column mt-4 p-2 "
                    key={e.id}
                  >
                    <Link
                      to={`/view/${e.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="text-light">
                        <p className="fs-4 text-start">
                          {" "}
                          <b className="text-warning">Id : </b>
                          {e.id}
                        </p>
                        <p className="fs-4 text-start">
                          <b className="text-warning">Title : </b> {e.title}
                        </p>
                        <p className="fs-5 text-start">
                          <b className="text-warning">Body : </b> {e.body}
                        </p>
                      </div>
                    </Link>
                    <div className=" text-start ">
                      <button className="btn btn-danger me-3 mb-2 ">
                        Delete
                      </button>
                      <Link to={`/edit/${e.id}`}>
                        <button className="btn btn-info  me-3 mb-2">
                          Edit
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="page-flex">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
