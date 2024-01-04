import logo from "../assets/logo-retina-2.webp";

function Header() {
  return (
    <div className="flex flex-row justify-center items-center bg-[#703d50] py-5 ">
      <ul className="flex flex-row gap-10 text-white">
        <li className="font-semibold text-xl">Home</li>
        <li className="font-semibold text-xl">Features</li>
        <li className="font-semibold text-xl">About</li>
        <li className="font-semibold text-xl">Shop</li>
      </ul>

      <div className="flex flex-row justify-center items-center">
        <img
          className=" w-[50%]"
          src={logo}
          alt="Description"
        />
      </div>

      <ul className="flex flex-row text-white gap-10">
        <li className="font-semibold text-xl">Events</li>
        <li className="font-semibold text-xl">Donations</li>
        <li className="font-semibold text-xl">News</li>
        <li className="font-semibold text-xl">Contacts</li>
      </ul>
    </div>
  );
}
export default Header;
