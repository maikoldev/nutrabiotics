const ChevronDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#fff" d="m18 10-1.41-1.41L12 13.17 7.41 8.59 6 10l6 6 6-6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M24 0v24H0V0z" />
      </clipPath>
    </defs>
  </svg>
)
export default ChevronDownIcon;
