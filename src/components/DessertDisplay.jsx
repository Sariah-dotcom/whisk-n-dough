import React from 'react'
import DessertCarousel from './DessertCarousel'
import { SwiperSlide } from 'swiper/react'
import DessertCard from './DessertCard'

export default function DessertDisplay() {
  return (
    <section className='p-3 mt-12 flex flex-col gap-12'>
      
      <div className='text-center'>
        <h2 className='font-red-hat font-bold text-3xl'>Other Desserts</h2>
        <p className='font-montserrat font-semibold text-tan'>Satisfy your sweet tooth</p>
      </div>

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
                    dessertName='Brownies'
                    dessertDescription='description hhhf fhwihwf fhihw hihri'
                />
            </SwiperSlide>

            <SwiperSlide>
                <DessertCard 
                    dessertImg='/images/brownie.png'
                    dessertName='Brownies'
                    dessertDescription='description hhhf fhwihwf fhihw hihri'
                />
            </SwiperSlide>

            <SwiperSlide>
                <DessertCard 
                    dessertImg='/images/brownie.png'
                    dessertName='Brownies'
                    dessertDescription='description hhhf fhwihwf fhihw hihri'
                />
            </SwiperSlide>
        </DessertCarousel>
    </section>
  )
}
