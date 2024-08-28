// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "./SlideBanner.css"; // Import Swiper styles
// import { ImageAssetV2 } from "../ImageAsset/ImageAssetV2";
import { Carousel } from "@/app/store/slices/frontendSlice";
type SlideShowProps = {
  carouselItems?: Carousel[];
};

// const SlideShowBanner = ({ carouselItems }: SlideShowProps) => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
//   return (
//     <div className="container flex flex-wrap items-center justify-between mx-auto py-[24px]">
//       <Swiper spaceBetween={10} slidesPerView={3}>
        // {carouselItems?.map((itemSlider, index) => (
        //   <SwiperSlide key={index}>
        //     <ImageAssetV2
        //       height={100}
        //       width={100}
        //       src={`${process.env["BASEURL_API"]}${itemSlider?.attributes?.image_slider?.url}`}
        //       className="w-full h-full"
        //     />
        //   </SwiperSlide>
        // ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SlideShowBanner;


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./SlideBanner.css"; 
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ImageAssetV2 } from "../ImageAsset/ImageAssetV2";

export default function App({ carouselItems }: SlideShowProps) {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    s: any,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
         {carouselItems?.map((itemSlider, index) => (
          <SwiperSlide key={index}>
            <ImageAssetV2
              height={50}
              width={50}
              src={`${process.env["BASEURL_API"]}${itemSlider?.attributes?.image_slider?.url}`}
              className="w-1/2 h-[150px]"
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
