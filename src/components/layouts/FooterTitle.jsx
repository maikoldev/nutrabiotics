const FooterTitle = ({ children }) => {
  return (
    <>
      <h4 className="font-extrabold mb-4 md:mb-2">{children}</h4>
      <hr className="w-6 max-md:mx-auto border border-white/50 mb-4"></hr>
    </>
  );
};

export default FooterTitle;