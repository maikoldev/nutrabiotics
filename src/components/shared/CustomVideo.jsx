const CustomVideo = ({ src, autoplay, ...props }) => {
  return (
    <video autoPlay={autoplay} {...props}>
      <source src={src} type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  );
};

export default CustomVideo;