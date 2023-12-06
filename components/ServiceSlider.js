// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { BsProjector, BsRobot } from "react-icons/bs";

//icons

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Front-end designing",
    description:
      " I specialize in creating captivating user interfaces that enhance the overall user experience.",
  },
  {
    icon: <RxPencil2 />,
    title: "Backend Programming",
    description:
      "Proficient in developing robust backend solutions to complement front-end functionalities.",
  },
  {
    icon: <RxDesktop />,
    title: "Python and java programming",
    description:
      "Reaching a basic level in developing applications using Python, and Java leveraging its versatility",
  },
  {
    icon: <BsRobot />,
    title: "Ardiuno IOT projects building",
    description:
      "I have experience i buidling award winning IOT projects for various school competitions and other events",
  },
  {
    icon: <RxDesktop />,
    title: "Website building",
    description:
      "Proficient in building websites from the ground up, integrating front-end and back-end technologies.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col
             gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4"> {item.icon}</div>
              {/* title and desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg ">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
