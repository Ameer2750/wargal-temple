const ImageWithTextSection = (props) => {
  return (
    <div className=" bg-[#ffefe2] ">
      <div
        className={`flex ${
          props.reverse ? "flex-row-reverse text-right gap-14 " : "flex-row"
        }  justify-center  items-start px-10 py-14  mx-14`}
      >
        <div className="w-[50%]">
          <img className="w-92" src={props.image} />
        </div>

        <div className="w-[50%]">
          <h5 className="text-4xl text-[#db4242] font-semibold ">
            {props.heading}
          </h5>
          <br></br>
          <p className="text-[#694c5c] text-xl font-semibold ">{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageWithTextSection;
