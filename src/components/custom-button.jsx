import Link from "next/link";
import classNames from "classnames";

const CustomButton = ({
  block = false,
  children,
  color = 'yellow-gradient',
  href = null,
  to = null,
  variant = 'flat',
  type = 'button',
  className = '',
}) => {
  let flatClass = '';
  let outlineClass = '';

  switch (color) {
    case 'yellow-gradient':
      flatClass = 'bg-yellow-gradient text-white hover:bg-yellow-gradient-hover hover:text-[#4A494A]';
      outlineClass = 'border border-gold text-gold hover:bg-yellow-gradient hover:text-white hover:border-transparent';
      break;
    case 'dark-blue':
      flatClass = 'bg-dark-blue text-white hover:bg-[#A2A8C9]';
      outlineClass = 'border border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white hover:border-transparent';
      break;
    case 'purple':
      flatClass = 'bg-purple text-white hover:bg-[#A396B3]';
      outlineClass = 'border border-purple text-purple hover:bg-purple hover:text-white hover:border-transparent';
      break;
    case 'white':
      flatClass = 'bg-white text-purple border border-transparent hover:bg-transparent hover:text-white hover:border-white';
      outlineClass = 'border border-white text-white hover:bg-white hover:text-purple hover:border-transparent';
      break;
  }

  const variantClass = variant === 'outline' ? outlineClass : flatClass;

  const newClassName = classNames({
    [`${className}`]: true,
    [`${variantClass}`]: true,
    'py-[10px] px-12 md:text-xl font-bold rounded-full': true,
    'w-full': block,
  });

  return (
    <>
      {(href || to) ? (
        <Link href={href || to}>{children}</Link>
      ) : (
        <button className={newClassName} type={type}>{children}</button>
      )}
    </>
  );
}

export default CustomButton;