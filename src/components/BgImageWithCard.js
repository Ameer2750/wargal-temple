

const BgImageWithCard = (props) => {
    return (
      <div className="relative">
        <div
          className="bg-cover w-[50%] bg-center h-screen relative z-0"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          {/* Empty div for overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-white mx-14">
              <h2 className="text-5xl mb-4">
                {props.heading}
              </h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                {props.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BgImageWithCard;
  