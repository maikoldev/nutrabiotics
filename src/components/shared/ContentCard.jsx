import Image from 'next/image';
import Link from 'next/link';

const ContentCard = ({ content }) => {
  const { title, description, image, url } = content;

  return (
    <div className="">
      <Image src={image} alt={title} className="aspect-[57/61] object-cover w-full rounded-2xl mb-4" />
      <h3 className="text-subtitle-sm mb-2">{title}</h3>
      <p className="text-base mb-2">{description}</p>
      <Link href={url} className="text-base uppercase mb-2 underline hover:no-underline">Leer más</Link>
    </div>
  )
};

export default ContentCard;