import CustomButton from "@/components/custom-button";
import CustomInput from "@/components/custom-input";

export default function UiKit() {
  return (
    <>
      <div className="container mx-auto pt-5">
        <div className="grid grid-cols-2">
          <div>
            <h3 className="text-normal font-bold mb-3">Inputs & Textarea</h3>
            <div className="bg-[#F0F0F0] flex flex-col w-fit gap-6 p-6 rounded-[47px]">
              <CustomInput placeholder="Escribe aquí" className="w-[500px]" />
              <CustomInput placeholder="Escribe aquí" className="w-[500px]" />
              <CustomInput as="textarea" placeholder="Escribe aquí" className="w-[500px]" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-normal font-bold mb-3">Botón Flat</h3>
              <div className="grid grid-cols-3 gap-6">
                <CustomButton>Descubre más</CustomButton>
                <CustomButton color="dark-blue">Descubre más</CustomButton>
                <CustomButton color="purple">Descubre más</CustomButton>
              </div>
            </div>
            <div>
              <h3 className="text-normal font-bold mb-3">Botón Outline</h3>
              <div className="grid grid-cols-3 gap-6">
                <CustomButton variant="outline">Descubre más</CustomButton>
                <CustomButton variant="outline" color="dark-blue">Descubre más</CustomButton>
                <CustomButton variant="outline" color="purple">Descubre más</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
