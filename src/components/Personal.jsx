// import { useState, useEffect, useContext } from "react";

// import { UserContext } from "../context/UserContext";
import Manimg from "../images/avatars/man_1.svg";
function Personal({ data }) {
  const deleteFamily = () => {
    console.log("Delete Family btn");
  };
  console.log(data);
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
                <h2>Username: {data.user.name}</h2>
              </div>
              <div>
                <h2>ID: {data.user._id}</h2>
              </div>
              <div>
                <h2>Role: Admi</h2>
              </div>
            </div>
          </div>
          <div className="family_info">
            <>
              <div>
                <h2>Family Name:</h2>
                <h2>Los Torres</h2>
              </div>
              <div>
                <h2>Family ID:</h2>
                <h2>34343434343hb4kjk34k34</h2>
              </div>
              <div className="family_options">
                <button
                  style={{ background: "red" }}
                  onClick={(e) => {
                    deleteFamily();
                  }}
                >
                  Delete Family
                </button>
                <button style={{ background: "green" }}>Rename Family</button>
              </div>
            </>
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
              // <div className="create_family_cont">
              //   <button onClick={() => console.log("Create Family btn")}>
              //     Create family
              //   </button>
              // </div>
              ""
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Personal;
