import React, { useEffect, useState } from "react";
import { Input, Select, Checkbox } from "@mantine/core";
import { IMaskInput } from "react-imask";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase/firebase-config";
import axios from "axios";
export default function Register() {
  const cookies = new Cookies(null, { path: "/" });
  const { state } = useLocation();
  const naigate = useNavigate();
  const auth = getAuth(app);

  const [isClient, setIsClient] = useState(true);
  const [isAuth, setAuth] = useState(cookies.get("auth") || "false");

  let userUid = cookies.get("userUid");

  //INPUT FIELDS VARIABLES
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    firstName: state?.name || "",
    lastName: "",
    mobileNumber: "",
    email: state?.email || "",
    nationality: "",
  });
  // REGISTER  LOGIC
  const handleEmailRegister = (userEmail, userPass) => {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, userEmail, userPass)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          resolve(user.uid);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          reject(errorMessage);
          // ..
        });
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;

        user.getIdToken().then((token) => {
          cookies.set("userToken", token);
          cookies.set("userUid", uid);
          cookies.set("auth", "true");
        });
      } else {
        // window.localStorage.setItem("auth", "false");
        cookies.set("userToken", "");
        cookies.set("userUid", "");
        cookies.set("auth", "false");

        // ...
      }
    });
  }, []);
  //--

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini (fmr. 'Swaziland')",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia (formerly Macedonia)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City (Holy See)",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const countriesData = countries.map((country) => ({
    value: country,
    label: country,
  }));
  //INPUT FIELDS TO BE SENT
  // const {
  //   UUID,
  //   firstName,`
  //   lastName,`
  //   email,`
  //   nationality,`
  //   phoneNumber,`
  //   isTourist,`
  // } = req.body;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNationalityChange = (value) => {
    setFormData({ ...formData, nationality: value });
  };
  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      console.log(userUid);
      if (userUid == "") {
        console.log("No Uid found attempting to register the user");
        if (password != confirmPassword) {
          throw "PasswordNotMatch";
        }
        userUid = await handleEmailRegister(formData.email, password);
      }
    } catch (error) {
      console.log(error);
    }

    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      nationality: formData.nationality,
      phoneNumber: formData.mobileNumber,
      isTourist: isClient,
      UUID: userUid,
    };
    console.log(data);
    await axios.post("http://localhost:3000/users", data);
    naigate("..");
  };
  return (
    <div className="flex justify-center items-center bg-slate-200 h-screen">
      <div className="flex rounded-md gap-8 border bg-white items-center">
        <img src="images/register_main.png" alt="" className="w-1/2" />
        <div className="p-12 flex justify-center text-[#903B4B]">
          <div>
            <h1 className="font-semibold text-3xl mb-4 text-center text-black">
              Hi,{" "}
              <span
                style={{ fontFamily: "DM Serif Display" }}
                className="text-3xl w-1/3 text-center text-[#BC6C25] italic"
              >
                {formData.firstName}
              </span>
            </h1>
            <form onSubmit={handleRegistration}>
              <div className="mb-3">
                <label htmlFor="firstName" className="text-[#903B4B] font-bold">
                  First Name:
                </label>
                <Input
                  placeholder="Your first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  maxLength={10}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="text-[#903B4B] font-bold">
                  Last Name:
                </label>
                <Input
                  placeholder="Your last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="text-[#903B4B] font-bold">
                  Email:
                </label>
                <Input
                  placeholder="Your email address"
                  name="email"
                  className=""
                  value={
                    state?.authMethod === "google"
                      ? state.email
                      : formData.email
                  }
                  disabled={state?.authMethod === "google" ? true : false}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="mobileNumber"
                  className="text-[#903B4B] font-bold"
                >
                  Mobile Number:
                </label>
                <Input
                  component={IMaskInput}
                  mask="(000) 000-00-00"
                  placeholder="Your phone"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
              </div>
              {/* password  */}
              {isAuth == "false" ? (
                <div>
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="text-[#903B4B] font-bold"
                    >
                      Password
                    </label>
                    <Input
                      placeholder="Your password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="text-[#903B4B] font-bold"
                    >
                      Confirm Password
                    </label>
                    <Input
                      placeholder="Confirm password"
                      type="password"
                      className={
                        password != confirmPassword
                          ? "active:border-2 active:rounded-lg focus:border-red-600  "
                          : ""
                      }
                      name="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              <div>
                <label
                  htmlFor="nationality"
                  className="text-[#903B4B] font-bold"
                >
                  Nationality:
                </label>
                <Select
                  placeholder="Pick value"
                  data={countriesData}
                  searchable
                  value={formData.nationality}
                  onChange={handleNationalityChange}
                  nothingFoundMessage="Nothing found..."
                />
              </div>
              <div className="flex gap-8 w-96 mt-8">
                <div
                  className={`border-2 p-2 w-1/2 rounded-xl ${
                    isClient ? "border-[#A9E34B] shadow-xl" : "border-black"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold mt-2 text-l">CLIENT</p>
                    <Checkbox
                      defaultChecked
                      color="lime.4"
                      iconColor="dark.8"
                      size="md"
                      checked={isClient}
                      onChange={(event) =>
                        setIsClient(event.currentTarget.checked)
                      }
                    />
                  </div>
                  <p className="font-light mt-2">Explore local culture.</p>
                </div>
                <div
                  className={`border-2 p-2 w-1/2 rounded-xl ${
                    !isClient ? "border-[#A9E34B]  shadow-xl" : "border-black"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold mt-2 text-l">FREELANCER</p>
                    <Checkbox
                      defaultChecked
                      color="lime.4"
                      iconColor="dark.8"
                      size="md"
                      checked={!isClient}
                      onChange={(event) =>
                        setIsClient(!event.currentTarget.checked)
                      }
                    />
                  </div>
                  <p className="font-light mt-2">Showcase your culture.</p>
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <Checkbox
                  defaultUnchecked
                  color="lime.4"
                  iconColor="dark.8"
                  size="md"
                />
                <p>
                  By click you agrees to our{" "}
                  <span className="underline font-semibold">
                    Terms and Conditions
                  </span>
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#903B4B] mt-4 p-2 rounded-md font-semibold"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
