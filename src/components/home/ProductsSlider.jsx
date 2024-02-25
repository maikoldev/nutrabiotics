import { useEffect, useRef } from "react";
import Swiper from 'swiper/bundle';
import useBreakpoint from "@/hooks/useBreakpoint";

import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import ProductSliderItem from "@/components/shared/ProductSliderItem";

const ProductsSlider = ({ products }) => {
  const breakpoint = useBreakpoint();

  useEffect(() => {
    // Configuración del Swiper según el breakpoint actual
    let swiperOptions;

    if (breakpoint === 'sm') {
      swiperOptions = {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
        },
      };
    }

    if (breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl') {
      swiperOptions = {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 575,
          depth: 800,
          modifier: 1,
          slideShadows: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      };
    }

    // Inicializar el Swiper
    new Swiper('#products-slider', swiperOptions);
  }, [breakpoint]);

  return (
    <div id="products-slider" className="swiper">
      <div className="swiper-wrapper">
        {products.map((product, index) => (
          <div className="swiper-slide" key={`product-${index}`}>
            <ProductSliderItem {...product} />
          </div>
        ))}
      </div>
      {breakpoint === 'sm' ? (
        <div className="swiper-pagination"></div>
      ) : (
        <>
          <ChevronLeftIcon className="swiper-button-prev text-violet/50 hover:text-violet left-[15%] top-[85%]" />
          <ChevronRightIcon className="swiper-button-next text-violet/50 hover:text-violet right-[15%] top-[85%]" />
        </>
      )}
    </div>
  )
}

export default ProductsSlider;