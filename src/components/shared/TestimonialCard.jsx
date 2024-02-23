import Image from "next/image";
import PlayVideoIcon from "@/components/icons/PlayVideoIcon";

const TestimonialCard = ({ testimonial }) => {
  const { author, occupation, resume, picture, video } = testimonial;

  return (
    <div className="grid relative w-[400px] h-[600px] -translate-x-[13%]">
      <Image fill src={picture} alt={author} className="w-full object-cover" />
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
        <PlayVideoIcon className="text-white/70 hover:text-white" />
      </button>
      <div className="relative font-inter text-white z-10 px-10 py-6 self-end">
        <h3 className="text-subtitle-sm">{author}</h3>
        <p className="text-base italic mb-2">{occupation}</p>
        <p className="text-base font-light">{resume}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;