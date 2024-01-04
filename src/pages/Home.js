
import Header from "../components/Header";
import ImageWithTextSection from "../components/ImageWithTextSection";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import BgImageWithCard from "../components/BgImageWithCard";
import Hanuman from "../assets/Hanuman.jpg";

const Home = () => {
    return (
      <div>
        <Header />
        <Welcome />
  
        <div className="flex flex-row py-5  px-10">
          {/* Left side with 50% width */}
          <div className="w-1/2">
            <BgImageWithCard
              image={Hanuman}
              heading={"Left Image Heading"}
              buttonText={"Read more"}
            />
          </div>
  
          {/* Right side with two images each occupying 25% width */}
          <div className="flex flex-col w-1/4">
            <div className="">
              <BgImageWithCard
                image ={Hanuman}
                heading={"Right Image 1 Heading"}
                buttonText={"Read more"}
              />
            </div>
            <div>
              <BgImageWithCard
                image={Hanuman}
                heading={"Right Image 2 Heading"}
                buttonText={"Read more"}
              />
            </div>
          </div>
        </div>
  
      <Footer />
    </div>
  );
};

export default Home;
