import Link from "next/link";
import classNames from "classnames";

const CustomButton = ({
  block = false,
  children,
  color = 'yellow-gradient',
  href = null,
  to = null,
  variant = 'flat',
}) => {
  let flatClass = '';
  let outlineClass = '';

  switch (color) {
    case 'yellow-gradient':
      flatClass = 'bg-yellow-gradient text-white hover:bg-yellow-gradient-hover hover:text-[#4A494A]';
      outlineClass = 'border-gold text-gold hover:bg-yellow-gradient hover:text-white hover:border-transparent';
      break;
    case 'dark-blue':
      flatClass = 'bg-dark-blue text-white hover:bg-[#A2A8C9]';
      outlineClass = 'border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white hover:border-transparent';
      break;
    case 'purple':
      flatClass = 'bg-purple text-white hover:bg-[#A396B3]';
      outlineClass = 'border-purple text-purple hover:bg-purple hover:text-white hover:border-transparent';
      break;
  }

  const variantClass = variant === 'outline' ? outlineClass : flatClass;

  const className = classNames({
    [`${variantClass}`]: true,
    'py-[10px] px-6 md:text-xl font-bold rounded-full border': true,
    'w-full': block,
  });

  return (
    <>
      {(href || to) ? (
        <Link href={href || to}>{children}</Link>
      ) : (
        <button className={className}>{children}</button>
      )}
    </>
  );
}

export default CustomButton;