/*
 * @Description: 基于 Swiper 的无缝轮播 （传入自定义item）
 * @Author: mengjiajun
 * @Date: 2023-12-13 09:36:01
 * @LastEditors: mengjiajun
 * @LastEditTime: 2023-12-13 09:39:58
 * @FilePath: \visualization-data-webui\src\components\SeamlessScroll\index.tsx
 */
import React from 'react';
import Autoplay from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

type TSeamlessScrollProps = {
  children: React.FunctionComponent[];
  spaceBetween?: number | string;
  slidesPerView?: number;
  speed?: number;
  direction?: 'horizontal' | 'vertical';
  swiperClassname?: string;
  swiperSlideClassname?: string;
  onSlideChange?: () => void;
  onSwiper?: () => void;
  autoplay?:
    | boolean
    | {
        delay: number;
        stopOnLastSlide: boolean;
        disableOnInteraction: boolean;
      };
  loop?: boolean;
};

const SeamlessScroll: React.FC<TSeamlessScrollProps> = ({
  children,
  spaceBetween = 0,
  slidesPerView = 4,
  speed = 1000,
  direction = 'horizontal',
  swiperSlideClassname,
  onSlideChange,
  onSwiper,
  swiperClassname = 'w-full h-full',
  autoplay = {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop = true,
}) => {
  // 当滚动数据个数在slidesPerview的一倍至2倍之间 复制一份让其无缝滚动
  if (slidesPerView <= children.length && children.length < 2 * slidesPerView) {
    children = children.concat(children);
  }

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={Number(spaceBetween)}
      slidesPerView={Number(slidesPerView)}
      speed={speed}
      direction={direction}
      onSlideChange={onSlideChange}
      onSwiper={onSwiper}
      className={swiperClassname}
      autoplay={autoplay}
      loop={loop ? (children.length > slidesPerView ? loop : false) : false}
    >
      {children.map((item: React.FunctionComponent, index: number) => (
        <SwiperSlide key={index} className={swiperSlideClassname}>
          {React.createElement(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SeamlessScroll;
