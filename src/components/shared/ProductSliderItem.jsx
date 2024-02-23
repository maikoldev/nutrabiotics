import Image from "next/image";

const ProductSliderItem = ({ name, description, image }) => {
  return (
    <div className="card relative bg-neuromorphism w-[78%] mx-auto rounded-[20px] backdrop-blur-sm min-h-[500px]">
      <div className="flex items-end justify-center">
        <Image src={image} className="h-[700px] w-[700px] relative z-10 bg-red-700x" alt={name} />
        <div className="content relative mb-[12%] right-[25%]">
          <h2 className="bg-violet text-white rounded-e-full text-[36px] font-black py-5 pl-[50%] pr-8 inline-block uppercase mb-4">
            {name}
          </h2>
          <p className="relative text-normal left-[50%] w-[75%] line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
};

export default ProductSliderItem;