import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Edit = () => {
  const { id } = useParams();

  const [edit, setEdit] = useState({
    title: "",
    body: "",
  });
  console.log(edit);
  useEffect(() => {
    async function getPost() {
      try {
        const postUpdate = await axios(
          `https://jsonplaceholder.typicode.com/post/`
        );
        setEdit(edit);
      } catch (err) {
        console.log(err);
      }
    }
    getPost();
  }, []);

  return (
    <div>
      <div
        className="conatiner bg-dark "
        style={{ width: "100%", height: "100vh" }}
      >
        <h1 className="text-warning">Edit Post</h1>
        <div className="conatiner bg-danger p-4  ">
          <div className="row">
            <div className="col m-5">
              <input
                type="text"
                className="form-control m-2"
                placeholder="Title"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                value={edit.title}
              />
              <input
                type="text"
                className="form-control m-2"
                placeholder="Body"
                aria-label="Username"
                aria-describedby="addon-wrapping "
                value={edit.body}
              />
              <button className="btn btn-warning m-3 mb-2 text-start ">
                Update
              </button>
              <Link to="/">
                <button className="btn btn-info  m-3 mb-2 text-start">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
