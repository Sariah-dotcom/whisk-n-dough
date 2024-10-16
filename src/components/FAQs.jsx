import React from 'react'
import Accordian from './Accordian'

export default function FAQs() {
  return (
    <div className='flex flex-col gap-5 mt-12 px-3'>
        <h2 className='font-red-hat font-bold text-3xl text-center'>FAQs</h2>
    <Accordian 
        accordionTitle='Do you offer gluten-free/vegan options?'
        content='Yes, we offer a selection of gluten-free and vegan desserts! Please check our menu online, and feel free to reach out if you have specific dietary needs.'
      />

      <Accordian 
        accordionTitle='Do you offer online ordering?'
        content='Yes! You can place your order directly through our website, select your favorite desserts, and schedule a pickup time that works for you.'
      />

    <Accordian 
        accordionTitle='How do I pay for my order?'
        content='You can pay in cash when you pick up your order. We currently only accept cash payments at the bakery.'
    />

    <Accordian 
        accordionTitle='Can I customize my dessert order?'
        content='Absolutely! Many of our desserts can be customized to your preferences. If you have special requests, feel free to mention them when placing your order, and we will do our best to accommodate.'
    />

    <Accordian 
        accordionTitle='Do you offer delivery?'
        content='At this time, we do not offer delivery services. All orders must be picked up at our bakery.'
    />

    <Accordian 
        accordionTitle='What is your pickup policy?'
        content='Once your order is ready, you can pick it up during our regular business hours. We will send you a confirmation message once your order is ready for pickup.'
    />

    <Accordian 
        accordionTitle='How far in advance should I place an order?'
        content='We recommend placing your order at least 24 hours in advance, especially for larger or custom orders. However, for regular items, same-day pickups may be available depending on availability.'
    />
    </div>
  )
}
