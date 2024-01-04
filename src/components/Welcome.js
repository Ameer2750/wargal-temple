import Card from "./Card";
import YogaImage from "../assets/yoga-image.jpg";
import Sahaj from "../assets/Sahaj.jpg";
import Lord from "../assets/lord-image.jpg";

import Ashram from "../assets/Ashram-icon.webp";
import Involved from "../assets/Involved.webp";
import Donation from "../assets/Donation-icon.webp";
import ImageWithTextSection from "./ImageWithTextSection";

function Welcome() {
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-10 bg-[#ffefe2]  px-14 py-14">
        <div className="w-[50%]">
          <h5 className="text-lg text-[#fd8f8f]  font-semibold ">WELCOME</h5>

          <h1 className="text-6xl text-[#44233b]  font-semibold py-2 ">
            Experience Yoga at Our Vihara Ashram Studio
          </h1>
        </div>

        <div className="w-[50%]">
          <p className="text-xl text-[#694c5c]  font-semibold">
            We are happy to see newcomers at any of our yoga and meditation
            classes. Join the community to participate in the center`s life and
            the discussion club.
          </p>
          <br></br>

          <p className="text-xl  text-[#694c5c]  font-semibold">
            Stay at the Ashram and immerse yourself in our wonderful yogic
            lifestyle program with other like-minded members.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center bg-[#ffefe2] px-10 gap-6    ">
        <Card
          image={Ashram}
          heading="Ashram"
          para="A spiritual hermitage in green valleys of the mountains where you can see millions of stars at night."
        />
        <Card
          image={Involved}
          heading="Get Involved"
          para="Our community is actively involved in the life of locals that require humanitarian support on a regular basis."
        />
        <Card
          image={Donation}
          heading="Donation"
          para="We appreciate your contribution to the donation programs and will happily accept any help we can get."
        />
      </div>

      <div className="bg-[#ffefe2]  py-14">
        <div className="text-center">
          <h5 className="text-lg -mb-4 text-[#fd8f8f]">PROGRAMS</h5>
          <h2 className="text-[3.5rem]  font-bold text-[#44233b]">
            Meditation, Yoga, Retreats, Free <br></br>Programs & More...
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          <ImageWithTextSection
            image={YogaImage}
            heading="The Happiness Program"
            para="The practical knowledge of breathing techniques gives you balance and wisdom that will transform your life by unlocking the true potential of your mind and soul by bringing them fullness."
            reverse={false}
          />
          <ImageWithTextSection
            image={Sahaj}
            heading="Sahaj Samadhi Meditation"
            para="The state of samadhi will help you experience deep inner peace as well as increase self-awareness. It’s really easy to become fully proficient."
            reverse={true}
          />
          <ImageWithTextSection
            image={Lord}
            heading="Advanced Meditation Program"
            para="For an extraordinary sense of peace, go beyond your habitual active mind. Get renewed vitality with the help of our guided meditation processes."
            reverse={false}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center bg-[#ffefe2] items-center">
        <button className="rounded rounded-3xl  px-14  py-5 text-xl text-white bg-[#7e4555]">
          Other Program
        </button>
      </div>
    </div>
  );
}
export default Welcome;
