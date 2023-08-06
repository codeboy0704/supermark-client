// import { useState, useEffect, useContext } from "react";

// import { UserContext } from "../context/UserContext";
import Manimg from "../images/avatars/man_1.svg";
function Personal({ data }) {
  const { _id, name, email, createdAt } = data;
  return (
    <div className="personal_container">
      {data && (
        <>
          <div className="personal_data">
            <picture>
              <img src={Manimg} alt="" />
            </picture>
            <div className="metadata">
              <div>
                <h2><span>Username: </span>{name}</h2>
              </div>
              <div>
                <h2><span>ID:</span> {_id}</h2>
              </div>
              <div>
                <h2><span>Email:</span> {email}</h2>
              </div>
              <div>
                <h2><span>Created at: </span>{createdAt}</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Personal;
