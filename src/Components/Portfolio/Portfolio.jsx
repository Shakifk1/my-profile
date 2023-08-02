import React from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination"
import "swiper/css"
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
      {/* heading */}
      <span style={{color: darkMode?"white":""}}>Recent Project</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
      modules={[Pagination]}
      pagination={{clickable:true}}
      spaceBetween={3}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Sidebar} alt="404" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="404" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="404" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="404" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio