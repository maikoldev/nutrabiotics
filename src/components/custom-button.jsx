export default function NBtn({ variant = 'flat', color = 'yellow', block = false, children }) {
  const btnSize = block ? 'w-full' : '';

  return (
    <button className={`btn-${variant} ${color} py-2 px-8 md:text-xl rounded-full font-bold ${btnSize} border`}>
      {children}
    </button>
  );
}