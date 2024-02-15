import Image from "next/image";
import CustomButton from "@/components/custom-button";

export default function ProductsGrid({ products = [] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div key={product.id}>
          <div className="product-card p-4 mb-6">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={300}
              className="object-cover w-full h-[350px] mx-auto rounded-2xl mb-4"
            />
            <h2 className="text-2xl font-extrabold uppercase line-clamp-1">
              {product.title.slice(0, 10)} ®
            </h2>
            <div className="internal-box">
              <div>
                <p className="line-clamp-9 mb-3">{product.description}</p>
                <a href="" className="font-bold underline">Ver producto</a>
              </div>
            </div>
          </div>
          <CustomButton color="purple" variant="outline" block>Ver más</CustomButton>
        </div>
      ))}
    </div>
  );
}