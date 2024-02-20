import classNames from "classnames";

const CustomInput = ({ as = 'input', className, type = 'text', rows = 8, ...props }) => {
  const classNamex = classNames({
    [`${className}`]: true,
    'bg-white min-h-[75px] outline-none border-2 text-normal text-dark-blue/60 focus:border-purple': true,
    'rounded-[56px] px-8': as === 'input',
    'rounded-[28px] py-6 px-8': as === 'textarea',
  });

  return (
    <>
      {as === 'input' ? (
        <input type={type} className={classNamex} {...props} />
      ) : (
        <textarea rows={rows} className={classNamex} {...props} />
      )}
    </>
  )
}

export default CustomInput