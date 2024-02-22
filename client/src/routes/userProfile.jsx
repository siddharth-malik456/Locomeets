import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const uuid = cookies.get("uuid");
const user = cookies.get("user");
const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user == "freelancer") {
          const response = await axios.get(
            `http://localhost:3000/freelancer/${uuid}`
          );
          setUserData(response.data);
        }
        if (user == "tourist") {
          const response = await axios.get(
            `http://localhost:3000/tourist/${uuid}`
          );
          setUserData(response.data);
        }
        setUserData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        userData && (
          <div>
            {Object.keys(userData).map((key) => (
              <div key={key}>
                <p>
                  <strong>{key}:</strong> {userData[key]}
                </p>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default UserProfile;
