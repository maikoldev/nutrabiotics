import Image from "next/image";

const FounderCard = ({ photo, name, children, reserve = false, ...props }) => {
  return (
    <div className={`grid md:grid-cols-2 md:gap-6 ${props.className}`}>
      <div className={`md:col-span-1 mb-12 ${reserve ? 'md:order-2' : ''}`}>
        <Image src={photo} alt={name} className="rounded-2xl object-cover w-full h-[115vw] md:h-[83vh]" style={{ objectPosition: '0 30%' }} />
      </div>
      <div className="md:col-span-1">
        <h2 className="text-subtitle max-md:text-[30px] lg:mt-10 mb-4">{name}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default FounderCard;