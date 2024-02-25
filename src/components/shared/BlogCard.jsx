import Image from "next/image";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const BlogCard = ({ title, description, image, color = 'white' }) => {
  return (
    <div className="group/blog-card relative rounded-2xl overflow-hidden h-full min-h-[500px] md:min-h-[300px]">
      <Image src={image} fill alt={title} className="object-cover" />
      <div className="flex flex-col justify-between h-full relative z-10 p-8">
        <div className="mb-6">
          <h3 className={`text-${color} text-subtitle-sm mb-3`}>{title}</h3>
          {description && (
            <p className={`text-${color}`}>{description}</p>
          )}
        </div>
        <ArrowRightIcon className="group-hover/blog-card:translate-x-1 transition" />
      </div>
    </div>
  )
};

export default BlogCard;