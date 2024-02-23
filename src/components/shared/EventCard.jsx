import CustomButton from "../custom-button";

const EventCard = ({ date, description, title }) => {
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString('es-ES', { month: 'short' });

  return (
    <div className="grid grid-cols-12 gap-6 text-purple">
      <div className="col-span-2 bg-white rounded-lg py-4 px-6 grid place-content-center">
        <h3 className="text-[64px] font-black uppercase leading-none text-center">
          <span className="block">{day}</span>
          <span className="block text-[38px]">{month}</span>
        </h3>
      </div>
      <div className="col-span-10 bg-white rounded-lg p-6">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-span-8">
            <h3 className="text-normal font-black mb-2">{title}</h3>
            <p className="text-normal leading-tight line-clamp-2">{description}</p>
          </div>
          <div className="col-span-4 justify-self-center">
            <CustomButton>Conoce más</CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EventCard;