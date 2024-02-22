import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default function IsClient() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    phoneNumber: "",
    profilePicture: "arsietnaisrt",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "profilePicture" ? files[0] : value,
    }));
  };
  const handleSubmit = async () => {
    const token = cookies.get("token");
    const response = await axios.post(
      "http://localhost:3000/freelancer",
      formData,
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
    cookies.set("user", "freelancer", { path: "/" });
    navigate("/freelancerDashboard");
  };
  return (
    <div>
      <h1>FREELANCER</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="nationality">Nationality:</label>
      <input
        type="text"
        id="nationality"
        name="nationality"
        value={formData.nationality}
        onChange={handleChange}
      />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
