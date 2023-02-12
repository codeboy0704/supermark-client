// import { useState, useEffect, useContext } from "react";

// import { UserContext } from "../context/UserContext";
import Manimg from "../images/avatars/man_1.svg";
import Add from "../images/add.svg";
import Search from "../images/search.svg";
function Personal({ data }) {
  const { _id, name, email, families } = data.user;

  console.log(families.length);
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
                <h2>Username: {name}</h2>
              </div>
              <div>
                <h2>ID: {_id}</h2>
              </div>
              <div>
                <h2>Email: {email}</h2>
              </div>
            </div>
          </div>
          {families.length ? (
            <div className="family_info">
              <h2>Family</h2>
            </div>
          ) : (
            <div className="new_family_container">
              <div>
                <button onClick={() => console.log("create family")}>
                  <picture>
                    <img src={Add} />
                  </picture>
                  <h4>Create family</h4>
                </button>
              </div>
              <div>
                <button>
                  <picture>
                    <img src={Search} style={{ color: "fff" }} />
                  </picture>
                  <h4>Search family</h4>
                </button>
              </div>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}

export default Personal;
