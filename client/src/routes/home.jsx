import Services from "../components/Services";

function Home() {
  return (
    <div>
      <div className="bg-[#903B4B] h-[74vh]">
        <img
          src="/public/welcomeImg.png"
          alt="welcomeImg"
          className="w-full"
        />
      </div>
      <Services />
    </div>
  );
}

export default Home;
