import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image1 from "../images/image1.jpg"
import Image2 from "../images/image2.jpg"
import Image3 from "../images/image3.jpg"
import Image4 from "../images/image4.jpg"
import Image5 from "../images/image5.jpg"
import "../components/swiper.css"
import styled from "styled-components"

const ImageSlider = ({ images }) => {
  return (
    <StyledSwiper
      cssMode={true}
      navigation={true}
      pagination={false}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      loop={true}
      autoplay={{ delay: 4000 }}
    >
      <SwiperSlide>
        <Img src={Image1} alt="flower"></Img>
      </SwiperSlide>
      <SwiperSlide>
        <Img src={Image2} alt="maedori-standing"></Img>
      </SwiperSlide>
      <SwiperSlide>
        <Img src={Image3} alt="two-and-ring"></Img>
      </SwiperSlide>
      <SwiperSlide>
        <Img src={Image4} alt="maedori-sitting"></Img>
      </SwiperSlide>
      <SwiperSlide>
        <Img src={Image5} alt="two-and-gakki"></Img>
      </SwiperSlide>
    </StyledSwiper>
  )
}

export default ImageSlider

const StyledSwiper = styled(Swiper)`
  .swiper-container .swiper-pagination {
    position: absolute;
    bottom: 1000px;
    left: 0;
    width: 100%;
    z-index: 10;
  }
`

const Img = styled.img`
  margin: 0;
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 70%,
    white 100%
  );
`
