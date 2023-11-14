
import { useContext, useEffect, useState } from "react";
import Manimg from "../images/avatars/man_1.svg";
import Loading from "./Loading";
import Cookies from "js-cookie";
import getUserDataByToken from "../utils/getUserByToken";
import { UserContext } from "../context/UserContext";
function Personal() {
  const data = useContext(UserContext)
  return (
    <div className="personal_container">
      {data ? (
        <>
          <div className="personal_data">
            <picture>
              <img src={Manimg} alt="" />
            </picture>
            <div className="metadata">
              <div>
                <h2><span>Username: </span>{data.name}</h2>
              </div>
              <div>
                <h2><span>ID:</span> {data._id}</h2>
              </div>
              <div>
                <h2><span>Email:</span> {data.email}</h2>
              </div>
              <div>
                <h2><span>Created at: </span>{data.createdAt}</h2>
              </div>
            </div>
          </div>
        </>
      ) : <Loading />}
    </div>
  );
}

export default Personal;
