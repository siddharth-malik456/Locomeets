import React, { useState } from "react";
import { Input, Select, Checkbox } from "@mantine/core";
import { IMaskInput } from "react-imask";

export default function Register() {
  const [isClient, setIsClient] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "example123@gmail.com",
    nationality: "",
  });

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNationalityChange = (value) => {
    setFormData({ ...formData, nationality: value });
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
                value={formData.email}
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
            <div>
              <label htmlFor="nationality" className="text-[#903B4B] font-bold">
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
              <Checkbox color="lime.4" iconColor="dark.8" size="md" />
              <p>
                By click you agrees to our{" "}
                <span className="underline font-semibold">
                  Terms and Conditions
                </span>
              </p>
            </div>
            <button className="w-full text-white bg-[#903B4B] mt-4 p-2 rounded-md font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
