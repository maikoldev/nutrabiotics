import Image from "next/image";

const ProductSliderItem = ({ name, description, image }) => {
  return (
    <div className="card relative md:bg-neuromorphism md:w-[78%] mx-auto rounded-[20px] md:backdrop-blur-sm min-h-[500px]">
      <div className="flex items-end justify-center">
        <Image src={image} className="h-[415px] md:h-[700px] w-[415px] md:w-[700px] relative z-10" alt={name} />
        <div className="content relative mb-[12%] translate-x-[-180px] md:right-[25%]">
          <h2 className="bg-violet text-white rounded-e-full text-[22px] md:text-[36px] font-black py-2 md:py-5 pl-[50%] pr-8 inline-block uppercase mb-4">
            {name}
          </h2>
          <p className="relative text-base md:text-normal left-[50%] md:w-[75%] line-clamp-5 md:line-clamp-3 max-md:leading-tight">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
};

export default ProductSliderItem;