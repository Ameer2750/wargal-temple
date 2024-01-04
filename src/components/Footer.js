import logo from "../assets/logo-retina-2.webp";

function Footer() {
  return (
    <div className="bg-[#703d50] my-14">
      <div className="flex flex-row justify-center items-center ">
        <ul className="flex flex-row gap-10 text-white">
          <li className="font-semibold text-xl">Home</li>
          <li className="font-semibold text-xl">Ashram</li>
          <li className="font-semibold text-xl">Program</li>
          <li className="font-semibold text-xl">Events</li>
        </ul>

        <div className="flex flex-row justify-center items-center">
          <img className=" w-[50%]" src={logo} alt="Description" />
        </div>

        <ul className="flex flex-row text-white gap-10">
          <li className="font-semibold text-xl">Donations</li>
          <li className="font-semibold text-xl">News</li>
          <li className="font-semibold text-xl">About</li>
          <li className="font-semibold text-xl">Contacts</li>
        </ul>
      </div>
      <br></br>
      <div className="flex flex-row justify-center items-center">
        <p className="text-white  font-semibold text-lg">
          Copyright © ThemeREX 2024. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;
