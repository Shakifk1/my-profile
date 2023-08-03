import React from 'react'
import "./Testimonials.css"
import { Swiper ,SwiperSlide } from 'swiper/react'
import profilepic1 from "../../img/profile1.jpg"
import profilepic2 from "../../img/profile2.jpg"
import profilepic3 from "../../img/profile3.jpg"
import profilepic4 from "../../img/profile4.jpg"
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css/pagination"
import "swiper/css"

const Testimonials = () => {
    const clients=[
        {
            img:profilepic1,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure, laboriosam natus eius cumque ab sed enim inventore aperiam nemo quo doloremque repellendus corrupti ipsum!"
        },
        {
            img:profilepic2,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure, laboriosam natus eius cumque ab sed enim inventore aperiam nemo quo doloremque repellendus corrupti ipsum!"
        },
        {
            img:profilepic3,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure, laboriosam natus eius cumque ab sed enim inventore aperiam nemo quo doloremque repellendus corrupti ipsum!"
        },
        {
            img:profilepic4,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure, laboriosam natus eius cumque ab sed enim inventore aperiam nemo quo doloremque repellendus corrupti ipsum!"
        }
    ]
  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading">
            <span>Client always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
        </div>
        {/* slider */}
        <Swiper
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        pagination={{clickable:true}}
        autoplay={{delay: 2500}}
        >
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonials">
                        <img src={client.img} alt="404" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials