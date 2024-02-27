import React, { useState, useCallback } from "react";
import { Input, Select, Checkbox } from "@mantine/core";
import { IMaskInput } from "react-imask";
import { Group, Text, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

export default function CreateService() {
  const indianStates = {
    "Andaman and Nicobar Islands": [
      "Port Blair",
      "Car Nicobar",
      "Hut Bay",
      "Diglipur",
    ],
    "Andhra Pradesh": [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Tirupati",
      "Nellore",
      "Kurnool",
      "Kakinada",
      "Rajahmundry",
      "Anantapur",
      "Eluru",
      "Vizianagaram",
      "Ongole",
      "Nandyal",
      "Machilipatnam",
    ],
    "Arunachal Pradesh": [
      "Itanagar",
      "Tawang",
      "Naharlagun",
      "Bomdila",
      "Ziro",
      "Pasighat",
      "Aalo",
      "Roing",
      "Tezu",
      "Daporijo",
      "Anini",
    ],
    Assam: [
      "Guwahati",
      "Silchar",
      "Dibrugarh",
      "Jorhat",
      "Tezpur",
      "Nagaon",
      "Lakhimpur",
      "Karimganj",
      "Sibsagar",
      "Diphu",
      "North Lakhimpur",
    ],
    Bihar: [
      "Patna",
      "Gaya",
      "Bhagalpur",
      "Muzaffarpur",
      "Darbhanga",
      "Arrah",
      "Bihar Sharif",
      "Purnia",
      "Sitamarhi",
      "Chhapra",
      "Bettiah",
      "Motihari",
      "Saharsa",
      "Hajipur",
    ],
    Chandigarh: ["Chandigarh"],
    Chhattisgarh: [
      "Raipur",
      "Bhilai",
      "Bilaspur",
      "Korba",
      "Durg",
      "Raigarh",
      "Rajnandgaon",
      "Jagdalpur",
      "Ambikapur",
      "Dhamtari",
      "Mahasamund",
      "Durg-Bhilai Nagar",
      "Bhilai Nagar",
    ],
    "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
    Delhi: [
      "New Delhi",
      "Delhi",
      "Noida",
      "Gurgaon",
      "Faridabad",
      "Ghaziabad",
      "Greater Noida",
    ],
    Goa: ["Panaji", "Vasco da Gama", "Margao", "Mapusa"],
    Gujarat: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
      "Junagadh",
      "Gandhinagar",
      "Anand",
      "Nadiad",
      "Morbi",
      "Surendranagar",
      "Bharuch",
      "Vapi",
    ],
    Haryana: [
      "Faridabad",
      "Gurgaon",
      "Panipat",
      "Ambala",
      "Yamunanagar",
      "Rohtak",
      "Hisar",
      "Karnal",
      "Sonipat",
      "Panchkula",
      "Bhiwani",
      "Sirsa",
      "Bahadurgarh",
      "Jind",
    ],
    "Himachal Pradesh": [
      "Shimla",
      "Mandi",
      "Solan",
      "Dharamshala",
      "Kullu",
      "Manali",
      "Hamirpur",
      "Chamba",
      "Una",
      "Nahan",
      "Bilaspur",
      "Sirmaur",
      "Palampur",
      "Paonta Sahib",
    ],
    "Jammu and Kashmir": [
      "Srinagar",
      "Jammu",
      "Anantnag",
      "Baramulla",
      "Kathua",
      "Udhampur",
      "Rajauri",
      "Sopore",
      "Pulwama",
      "Kupwara",
      "Ganderbal",
      "Bandipora",
      "Doda",
      "Reasi",
    ],
    Jharkhand: [
      "Ranchi",
      "Jamshedpur",
      "Dhanbad",
      "Bokaro Steel City",
      "Deoghar",
      "Phusro",
      "Hazaribagh",
      "Giridih",
      "Ramgarh",
      "Medininagar",
      "Chirkunda",
      "Saunda",
      "Sindri",
      "Gumla",
    ],
    Karnataka: [
      "Bangalore",
      "Hubli-Dharwad",
      "Mysore",
      "Gulbarga",
      "Mangalore",
      "Belgaum",
      "Davanagere",
      "Bellary",
      "Bijapur",
      "Shimoga",
      "Tumkur",
      "Raichur",
      "Bidar",
      "Hospet",
    ],
    Kerala: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Kollam",
      "Thrissur",
      "Alappuzha",
      "Palakkad",
      "Kottayam",
      "Kannur",
      "Manjeri",
      "Kottarakkara",
      "Thalassery",
      "Kasaragod",
    ],
    Ladakh: ["Leh", "Kargil"],
    Lakshadweep: ["Kavaratti", "Agatti Island", "Andrott", "Minicoy"],
    "Madhya Pradesh": [
      "Indore",
      "Bhopal",
      "Jabalpur",
      "Gwalior",
      "Ujjain",
      "Sagar",
      "Dewas",
      "Satna",
      "Ratlam",
      "Rewa",
      "Murwara",
      "Singrauli",
      "Burhanpur",
      "Khandwa",
    ],
    Maharashtra: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Thane",
      "Nashik",
      "Kalyan-Dombivali",
      "Vasai-Virar",
      "Aurangabad",
      "Navi Mumbai",
      "Solapur",
      "Bhiwandi",
      "Amravati",
      "Malegaon",
      "Kolhapur",
    ],
    Manipur: [
      "Imphal",
      "Thoubal",
      "Bishnupur",
      "Churachandpur",
      "Kakching",
      "Senapati",
      "Tamenglong",
      "Ukhrul",
      "Jiribam",
      "Kangpokpi",
      "Chandel",
    ],
    Meghalaya: [
      "Shillong",
      "Tura",
      "Nongstoin",
      "Jowai",
      "Baghmara",
      "Williamnagar",
      "Nongpoh",
      "Resubelpara",
      "Mairang",
      "Mahendraganj",
      "Mawkyrwat",
    ],
    Mizoram: [
      "Aizawl",
      "Lunglei",
      "Saiha",
      "Champhai",
      "Serchhip",
      "Kolasib",
      "Lawngtlai",
      "Khawzawl",
      "Hnahthial",
      "Saitual",
      "Biate",
      "Thenzawl",
    ],
    Nagaland: [
      "Dimapur",
      "Kohima",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto",
      "Phek",
      "Mon",
      "Longleng",
      "Peren",
      "Kiphire",
    ],
    Odisha: [
      "Bhubaneswar",
      "Cuttack",
      "Rourkela",
      "Puri",
      "Sambalpur",
      "Balasore",
      "Berhampur",
      "Brahmapur",
      "Baripada",
      "Bhadrak",
      "Jharsuguda",
      "Bargarh",
      "Jeypore",
      "Bhawanipatna",
    ],
    Puducherry: ["Puducherry", "Karaikal", "Yanam", "Mahe"],
    Punjab: [
      "Ludhiana",
      "Amritsar",
      "Jalandhar",
      "Patiala",
      "Bathinda",
      "Hoshiarpur",
      "Mohali",
      "Batala",
      "Pathankot",
      "Moga",
      "Abohar",
      "Malerkotla",
      "Khanna",
    ],
    Rajasthan: [
      "Jaipur",
      "Jodhpur",
      "Kota",
      "Bikaner",
      "Ajmer",
      "Udaipur",
      "Bhilwara",
      "Alwar",
      "Bharatpur",
      "Sri Ganganagar",
      "Sikar",
      "Pali",
      "Hanumangarh",
    ],
    Sikkim: [
      "Gangtok",
      "Namchi",
      "Gyalshing",
      "Mangan",
      "Jorethang",
      "Ravangla",
      "Singtam",
      "Rangpo",
      "Soreng",
    ],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tiruppur",
      "Erode",
      "Tirunelveli",
      "Vellore",
      "Thoothukudi",
      "Dindigul",
      "Thanjavur",
      "Tiruvannamalai",
    ],
    Telangana: [
      "Hyderabad",
      "Warangal",
      "Nizamabad",
      "Khammam",
      "Karimnagar",
      "Ramagundam",
      "Mahbubnagar",
      "Nalgonda",
      "Adilabad",
      "Suryapet",
      "Miryalaguda",
      "Jagtial",
      "Nirmal",
    ],
    Tripura: [
      "Agartala",
      "Udaipur",
      "Dharmanagar",
      "Kailasahar",
      "Ambassa",
      "Belonia",
      "Teliamura",
      "Khowai",
      "Sabroom",
    ],
    "Uttar Pradesh": [
      "Lucknow",
      "Kanpur",
      "Ghaziabad",
      "Agra",
      "Meerut",
      "Varanasi",
      "Allahabad",
      "Bareilly",
      "Aligarh",
      "Moradabad",
      "Saharanpur",
      "Gorakhpur",
      "Faizabad",
    ],
    Uttarakhand: [
      "Dehradun",
      "Haridwar",
      "Roorkee",
      "Haldwani",
      "Rudrapur",
      "Kashipur",
      "Rishikesh",
      "Pithoragarh",
      "Ramnagar",
      "Manglaur",
      "Ranikhet",
    ],
    "West Bengal": [
      "Kolkata",
      "Howrah",
      "Asansol",
      "Siliguri",
      "Durgapur",
      "Bardhaman",
      "English Bazar",
      "Baharampur",
      "Habra",
      "Kharagpur",
      "Haldia",
      "Raiganj",
      "Krishnanagar",
    ],
  };
  const categories = [
    { value: "arts", label: "Arts" },
    { value: "food", label: "Food" },
    { value: "cultivation", label: "Cultivation" },
    { value: "live-performance", label: "Live Performance" },
  ];
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    freelancerUUID: "",
    heading: "",
    description: "",
    price: 0,
    city: "",
    state: "",
  });
  const [files, setFiles] = useState([]);
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [bookings, setBookings] = useState([]);

  const handleStateChange = (value) => {
    setSelectedState(value);
    setSelectedCity("");
  };
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSelectedChoice("");
  };
  const handleCityChange = (value) => {
    setSelectedCity(value);
  };
  const handleAddBooking = useCallback(() => {
    if (startHour && endHour) {
      const newBooking = {
        startTime: startHour,
        endTime: endHour,
      };
      setBookings((prevBookings) => [...prevBookings, newBooking]);
      setStartHour("");
      setEndHour("");
    } else {
      alert("Please enter both start and end times.");
    }
  }, [startHour, endHour]);
  const handleDrop = useCallback(
    (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
    [setFiles]
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="flex flex-col text-[#283618]">
      <h1 className=" text-3xl font-bold text-center mb-4">
        List your service
      </h1>
      <label className="font-semibold">Service:</label>
      <input
        type="text"
        name="heading"
        value={formData.heading}
        onChange={handleChange}
        className="border border-[#283618] rounded-md py-1 mb-2 active:outline-none active:border-none"
      />
      <label className="font-semibold">Description:</label>
      <textarea
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="border border-[#283618] rounded-md py-1 mb-2"
      ></textarea>
      <div>
        <div>
          <label className="font-semibold">State:</label>
          <Select
            placeholder="Select State"
            data={Object.keys(indianStates).map((state) => ({
              value: state,
              label: state,
            }))}
            searchable
            value={selectedState}
            onChange={handleStateChange}
            nothingFoundMessage="Nothing found..."
          />
        </div>
        <div>
          {" "}
          <label className="font-semibold" htmlFor="city">
            City:
          </label>
          <Select
            placeholder="Select City"
            data={
              selectedState
                ? indianStates[selectedState].map((city) => ({
                    value: city,
                    label: city,
                  }))
                : []
            }
            searchable
            value={selectedCity}
            onChange={handleCityChange}
            nothingFoundMessage="Nothing found..."
            disabled={!selectedState}
          />
        </div>
      </div>
      <label className="font-semibold" htmlFor="category">
        Category:
      </label>
      <Select
        placeholder="Select Category"
        data={categories}
        searchable
        value={selectedCategory}
        onChange={handleCategoryChange}
        nothingFoundMessage="Nothing found..."
      />
      <Dropzone
        onDrop={handleDrop}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={5 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
      >
        <Group
          justify="center"
          gap="xl"
          mih={220}
          style={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-blue-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-red-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-dimmed)",
              }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      {files.map((file, index) => {
        return <p key={index}>{file.name}</p>;
      })}
      <h1>Select Your slots</h1>
      <div>
        <label className="font-semibold" htmlFor="startHour">
          Session start:
        </label>
        <input
          type="number"
          id="startHour"
          min="0"
          max="23"
          value={startHour}
          onChange={(e) => setStartHour(e.target.value)}
        />
        <label className="font-semibold" htmlFor="endHour">
          Session end:
        </label>
        <input
          type="number"
          id="endHour"
          min="0"
          max="23"
          value={endHour}
          onChange={(e) => setEndHour(e.target.value)}
        />
        <div>
          <button onClick={handleAddBooking}>Add session</button>
        </div>
      </div>
      <h3>Booked Slots</h3>
      {bookings.length ? (
        <ul className="flex gap-x-2">
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.startTime} - {booking.endTime}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <button>Submit</button>
    </div>
  );
}
