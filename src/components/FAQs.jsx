import React from 'react'
import Accordion from './Accordion'

export default function FAQs() {
  return (
    <div id='faqs' className='flex flex-col gap-5 mb-20 px-3 lg:px-[20rem] lg:mb-[10rem]'>
        <h2 className='font-red-hat font-black text-3xl text-center mb-3'>FAQs</h2>
    <Accordion 
        accordionTitle='Do you offer gluten-free/vegan options?'
        content='Yes, we offer a selection of gluten-free and vegan desserts! Please check our menu online, and feel free to reach out if you have specific dietary needs.'
      />

      <Accordion 
        accordionTitle='Do you offer online ordering?'
        content='Yes! You can place your order directly through our website, select your favorite desserts, and schedule a pickup time that works for you.'
      />

    <Accordion 
        accordionTitle='How do I pay for my order?'
        content='You can pay in cash when you pick up your order. We currently only accept cash payments at the bakery.'
    />

    <Accordion 
        accordionTitle='Can I customize my dessert order?'
        content='Absolutely! Many of our desserts can be customized to your preferences. If you have special requests, feel free to mention them when placing your order, and we will do our best to accommodate.'
    />

    <Accordion 
        accordionTitle='Do you offer delivery?'
        content='At this time, we do not offer delivery services. All orders must be picked up at our bakery.'
    />

    <Accordion 
        accordionTitle='What is your pickup policy?'
        content='Once your order is ready, you can pick it up during our regular business hours. We will send you a confirmation message once your order is ready for pickup.'
    />

    <Accordion 
        accordionTitle='How far in advance should I place an order?'
        content='We recommend placing your order at least 24 hours in advance, especially for larger or custom orders. However, for regular items, same-day pickups may be available depending on availability.'
    />
    </div>
  )
}
