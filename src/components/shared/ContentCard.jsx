import Image from 'next/image';
import Link from 'next/link';

const ContentCard = ({ content }) => {
  const { title, description, image, url } = content;

  return (
    <>
      <Image src={image} alt={title} className="aspect-[358/305] md:aspect-[57/61] object-cover w-full rounded-2xl mb-4" />
      <h3 className="text-subtitle-sm max-md:font-extrabold mb-2">{title}</h3>
      <p className="text-base mb-2">{description}</p>
      <Link href={url} className="text-base max-md:font-semibold uppercase mb-2 underline hover:no-underline">Leer más</Link>
    </>
  )
};

export default ContentCard;