// import { useState, useEffect, useContext } from "react";

// import { UserContext } from "../context/UserContext";
import Manimg from "../images/avatars/man_1.svg";
function Personal({ data }) {
  console.log(data);
  return (
    <div className="personal_container">
      {data ? (
        <>
          <div className="personal_data">
            <picture>
              <img src={Manimg} alt="" />
            </picture>
            <div>
              <h2>Username:</h2>
              <h2>{data.user.name}</h2>
            </div>
            <div>
              <h2>ID:</h2>
              <h2>{data.user._id}</h2>
            </div>
          </div>
          <div className="family_info">
            {data.family ? (
              <>
                <div>
                  <h2>Family Name:</h2>
                  <h2>{data.family.name}</h2>
                </div>
                <div>
                  <h2>Family ID:</h2>
                  <h2>{data.family._id}</h2>
                </div>
              </>
            ) : (
              <div className="create_family_cont">
                <button onClick={() => console.log("Create Family btn")}>
                  Create family
                </button>
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Personal;
