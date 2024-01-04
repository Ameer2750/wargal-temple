function Card (props) {

    return (
        <div className="bg-white flex flex-col  justify-center items-center gap-10 py-14 px-10  ">
            
            <div><img className="" src={props.image}></img></div>
            
            

            <h2 className="text-[#44233b] text-4xl font-semibold">{props.heading}</h2>
            
            <p className="text-[#44233b] text-xl">{props.para}</p>
        </div>
    )

}

export default Card;