import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import BaraAndStringImage from "../images/bara-and-string.jpg"
import CoupleAndStringImage from "../images/couple-and-string.jpg"
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
        <Img src={BaraAndStringImage} alt="bara"></Img>
      </SwiperSlide>
      <SwiperSlide>
        <Img src={CoupleAndStringImage} alt="couple"></Img>
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
`
