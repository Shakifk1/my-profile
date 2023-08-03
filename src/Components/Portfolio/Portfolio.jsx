import React from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import Sidebar from "../../img/sidebar.png"
import Blog from "../../img/propic/blog.png"
import Youtube from "../../img/propic/youtube.png"
import Digital from "../../img/propic/Digital.png"
import Todojs from "../../img/propic/todoJs.png"
import Profile from "../../img/propic/profile.png"
import Car from "../../img/propic/CarMove.png"
import Magic from "../../img/propic/magicNotes.png"
import Todocss from "../../img/propic/todoCss.png"
import Redux from "../../img/propic/reduxCurd.jpg"
import Context from "../../img/propic/contextCurd.jpg"

import {Autoplay, Pagination,Navigation } from 'swiper/modules';
import "swiper/css/pagination"
import "swiper/css/navigation"
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
      autoplay={{delay :2500,
        disableOnInteraction: false,}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      pagination={{clickable:true}}
      spaceBetween={3}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <a href="https://shakifk1.github.io/Todo-Js/" target='_blank' rel="noreferrer"><img src={Todojs} alt="404" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://blogk1.netlify.app/" target='_blank' rel="noreferrer"><img src={Blog} alt="404" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shakifk1.github.io/youtube-dummy/" target='_blank' rel="noreferrer"><img src={Youtube} alt="404" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shakifk1.github.io/Digital-Clock/" target='_blank' rel="noreferrer"><img src={Digital} alt="404" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.google.com/" target='_blank' rel="noreferrer"><img src={Sidebar} alt="404" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shakifk1.netlify.app/" target='_blank' rel="noreferrer"><img src={Profile} alt="404" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shakifk1.github.io/css_5animation/page3.html" target='_blank' rel="noreferrer"><img src={Car} alt="404" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shakifk1.github.io/magic-notes/" target='_blank' rel="noreferrer"><img src={Magic} alt="404" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shakifk1.github.io/project-3/" target='_blank' rel="noreferrer"><img src={Todocss} alt="404" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://effulgent-arithmetic-3c09ba.netlify.app/" target='_blank' rel="noreferrer"><img src={Redux} alt="404" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://jolly-concha-45367b.netlify.app/" target='_blank' rel="noreferrer"><img src={Context} alt="404" /></a>
        </SwiperSlide>
      
      </Swiper>
    </div>
  )
}

export default Portfolio