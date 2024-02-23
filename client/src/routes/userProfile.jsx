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
    // <div>
    //   <h1>User Profile</h1>
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     userData && (
    //       <div>
    //         {Object.keys(userData).map((key) => (
    //           <div key={key}>
    //             <p>
    //               <strong>{key}:</strong> {userData[key]}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     )
    //   )}
    // </div>
    <div className="flex flex-col items-center mt-20 min-h-screen">
      <div className="p-4 bg-white rounded shadow-xl w-3/6">
        <h1 className="text-2xl font-bold text-center mb-4">User Profile</h1>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-40 w-40 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          userData && (
            <div className="grid gap-2">
              {Object.keys(userData).map((key) => (
                <div key={key} className="flex justify-between gap-x-4">
                  <p className="font-semibold">{key}</p>
                  <p className="">{userData[key]}</p>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default UserProfile;
