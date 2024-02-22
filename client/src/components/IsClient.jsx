import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default function IsClient() {
  const navigate = useNavigate();
  const token = cookies.get("token");
  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    phoneNumber: "",
    profilePicture: "arstarst",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "profilePicture" ? files[0] : value,
    }));
  };
  const handleSubmit = async () => {
    const response = await axios.post(
      "http://localhost:3000/tourist",

      formData,
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
    console.log(response);
    navigate("/home");
  };
  return (
    <div>
      <h1>LOCAL</h1>
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
