import React, { useEffect, useState } from "react";
import { storeData } from "../Redux/action";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/action";

const Post = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    dispatch(getData);
  }, []);

  const data = useSelector((state) => state.dataReducer.data);
  console.log(data);
  return (
    <div>
      {data
        .filter((e) => e.id == `${id}`)
        .map((e) => {
          return (
            <div>
              <div
                className="container d-flex border flex-column mt-3 p-4 "
                key={e.id}
              >
                <Link to={`/view/${e.id}`} style={{ textDecoration: "none" }}>
                  <div className="text-dark">
                    <p>{e.id}</p>
                    <p className="fs-4 text-start">
                      <b className="text-warning">Title :</b> {e.title}
                    </p>
                    <p className="fs-5 text-start">
                      <b className="text-warning">Body :</b> {e.body}
                    </p>
                  </div>
                </Link>
              </div>
              <Link to="/">
                <button className="btn btn-dark m-5">Back to Home</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Post;
