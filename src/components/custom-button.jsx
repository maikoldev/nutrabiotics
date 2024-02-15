export default function NBtn({ variant = 'flat', color = 'yellow', block = false, children }) {
  const btnSize = block ? 'w-full' : '';

  return (
    <button className={`btn-${variant} ${color} py-2 px-8 text-xl rounded-full font-bold ${btnSize} border`}>
      {children}
    </button>
  );
}