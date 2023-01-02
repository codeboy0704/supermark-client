import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Personal() {
  const personalData = useContext(UserContext);
  console.log(personalData);
  return (
    <div className="personal_container">
      <div className="personal_data">
        <picture>
          <img src="" alt="" />
        </picture>
        <div>
          <h2>Username:</h2>
          <h2>{personalData.data.name}</h2>
        </div>
        <div>
          <h2>ID:</h2>
          <h2>{personalData.data._id}</h2>
        </div>
      </div>
      <div className="family_info">
        {personalData.data.family ? (
          <>
            <div>
              <h2>Family Name:</h2>
              <h2>{personalData.data.family.name}</h2>
            </div>
            <div>
              <h2>Family ID:</h2>
              <h2>{personalData.data.family._id}</h2>
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
    </div>
  );
}

export default Personal;
