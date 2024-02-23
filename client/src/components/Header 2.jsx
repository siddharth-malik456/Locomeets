import Logo from "./Logo";
import LandingNav from "./LandingNav";
function Header({ loggedIn, setLoggedIn }) {
  return (
    <>
      <div className="flex justify-between items-center h-20 bg-[#903B4B] pl-20 pr-20 fixed w-full">
        <Logo />
        <LandingNav />
        {/* <PageNav loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> */}
      </div>
      <div className="h-20"></div>
    </>
  );
}

export default Header;
