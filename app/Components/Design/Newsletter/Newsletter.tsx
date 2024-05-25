import React from 'react'
import Section from '../Reusables/Section'
import SectionTitle from '../Reusables/SectionTitle'
import Form from './Form'

const Newsletter = () => {
  return (
    <Section bgColor='#fffff'>
        <div className='m-auto w-11/12 md:w-8/12 bg-lightBlue py-4 md:py-8 rounded-2xl flex flex-col items-center'>
            <SectionTitle title='Contact' preTitle='Reach out to us' color={'dark'}/>
            <Form />
        </div>
    </Section>
  )
}

export default Newsletter