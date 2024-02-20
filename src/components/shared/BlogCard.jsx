import Image from "next/image";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";

const BlogCard = ({ title, description, image, color = 'white' }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-full min-h-[300px]">
      <Image src={image} fill alt={title} className="object-cover" />
      <div className="flex flex-col justify-between h-full relative z-10 p-8">
        <div className="mb-6">
          <h3 className={`text-${color} text-subtitle-sm font-extrabold mb-3`}>{title}</h3>
          {description && (
            <p className={`text-${color}`}>{description}</p>
          )}
        </div>
        <Image src={ArrowRightIcon} alt="Arrow Right" />
      </div>
    </div>
  )
};

export default BlogCard;