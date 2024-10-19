import React from 'react'
import DessertCarousel from './DessertCarousel'
import { SwiperSlide } from 'swiper/react'
import DessertCard from './DessertCard'


export default function DessertDisplay() {
  return (
    <section className='mt-20 mb-20 flex flex-col items-center gap-12 lg:mb-[10rem]'>
      
      <div className='text-center'>
        <h2 className='font-red-hat font-black text-3xl'>Other Desserts</h2>
        <p className='font-montserrat font-semibold text-gold text-sm'>Satisfy your sweet tooth</p>
      </div>

      <div className='w-screen lg:w-1/2 px-3'>
      <DessertCarousel slidesPerView={1.8}>
            <SwiperSlide>
                <DessertCard 
                  dessertImg='/images/cinnamon-roll.png'
                  dessertName='Cinnamon Rolls'
                  dessertDescription='The fluffiest roll you will ever have...'
                />
            </SwiperSlide>

            <SwiperSlide>
                <DessertCard 
                    dessertImg='/images/brownie.png'
                    dessertName='Fudge Brownies'
                    dessertDescription='Sweet, fudgy and perfect for your cravings!'
                />
            </SwiperSlide>

            <SwiperSlide>
                <DessertCard 
                    dessertImg='/images/double-choc-cookie.png'
                    dessertName='M&Ms Cookie'
                    dessertDescription='M&Ms and double chocolate cookie'
                />
            </SwiperSlide>

            <SwiperSlide>
                <DessertCard 
                    dessertImg='/images/matcha-cookie.png'
                    dessertName='Matcha Cookie'
                    dessertDescription='description hhhf fhwihwf fhihw hihri'
                />
            </SwiperSlide>
        </DessertCarousel>

      </div>
     
    </section>
  )
}
