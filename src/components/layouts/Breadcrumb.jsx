'use client'

import Link from 'next/link';

const Breadcrumb = ({ variant = 'light', items = [] }) => {
  return (
    <div className={`text-small md:text-xl font-bold ${variant === 'light' ? 'text-[#BBBBBB]' : 'text-white'}`}>
      {items.map((item, index) => (
        <span key={`breadcrumb-item-${item.text}`}>
          {item.href ? (
            <>
              <Link href={item.href} >{item.text}</Link>
              {" / "}
            </>
          ) : (
            <span className={variant === 'light' ? 'text-purple' : 'text-light-yellow'}>
              {item.text}
            </span>
          )}
        </span>
      ))}
    </div>
  )
}

export default Breadcrumb;