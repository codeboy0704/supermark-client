import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import Manimg from "../images/avatars/man_1.svg";
function Personal({ data }) {
  const info = useContext(UserContext);
  console.log(info);
  const getFamilyDetails = async () => {
    try {
      const req = await axios.get(`/api/family`, {
        user: data.data.name,
        id: data.data.family,
      });
      console.log(req);
      const res = await res.data;
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (data) {
      getFamilyDetails();
    }
  }, [data]);
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
              <h2>{data.data.name}</h2>
            </div>
            <div>
              <h2>ID:</h2>
              <h2>{data.data._id}</h2>
            </div>
          </div>
          <div className="family_info">
            {data.data.family ? (
              <>
                <div>
                  <h2>Family Name:</h2>
                  <h2>{data.data.family.name}</h2>
                </div>
                <div>
                  <h2>Family ID:</h2>
                  <h2>{data.data.family}</h2>
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
